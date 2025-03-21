import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import 'react-native-get-random-values';
import { Platform } from 'react-native';

const LICENSE_KEYS = {
  EXPIRATION_DATE: 'license_expiration',
  ACTIVATION_DATE: 'license_activation',
  IS_ACTIVE: 'license_active',
  USED_LICENSES: 'used_licenses',
  EXPIRED_LICENSES: 'expired_licenses',
  CODE_ID: 'codeID'
};

const SECRET_KEY = "MY_SECRET_KEY";

export const generateLicenseKey = async (codeID, index) => {
  const data = codeID + index + SECRET_KEY;
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await Crypto.digest(Crypto.CryptoDigestAlgorithm.MD5, dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 10);
};

export const generateLicenses = async (codeID) => {
  const licenses = [];
  for (let i = 1; i <= 100; i++) {
    const license = await generateLicenseKey(codeID, i);
    licenses.push(license);
  }
  return licenses;
};

export const isValidLicense = async (licenseKey) => {
  try {
    console.log('Début de la validation de la licence:', licenseKey);
    
    let codeID = await AsyncStorage.getItem(LICENSE_KEYS.CODE_ID);
    console.log('Code ID actuel:', codeID);
    
    if (!codeID) {
      console.log('Aucun Code ID trouvé');
      return {
        isValid: false,
        message: 'Code ID non trouvé. Veuillez générer un Code ID d\'abord.'
      };
    }

    console.log('Génération des licences valides...');
    const licenses = await generateLicenses(codeID);
    console.log('Nombre de licences générées:', licenses.length);
    
    if (!licenses.includes(licenseKey)) {
      console.log('Licence non trouvée dans la liste des licences valides');
      return {
        isValid: false,
        message: 'Clé de licence invalide pour ce dispositif'
      };
    }

    const usedLicenses = JSON.parse(await AsyncStorage.getItem(LICENSE_KEYS.USED_LICENSES) || '[]');
    console.log('Licences déjà utilisées:', usedLicenses);
    
    const expiredLicenses = JSON.parse(await AsyncStorage.getItem(LICENSE_KEYS.EXPIRED_LICENSES) || '[]');
    
    if (usedLicenses.includes(licenseKey)) {
      if (expiredLicenses.includes(licenseKey)) {
        console.log('Licence expirée et ne peut plus être utilisée');
        return {
          isValid: false,
          message: 'Cette licence a expiré et ne peut plus être utilisée'
        };
      }
      console.log('Licence déjà utilisée');
      return {
        isValid: false,
        message: 'Cette licence a déjà été utilisée'
      };
    }

    console.log('Validation de la licence réussie');
    return {
      isValid: true,
      message: 'Licence valide'
    };
  } catch (error) {
    console.error('Erreur lors de la validation de la licence:', error.message);
    return {
      isValid: false,
      message: 'Une erreur est survenue lors de la validation de la licence'
    };
  }
};

export const activateLicense = async (licenseKey) => {
  try {
    console.log('Début de l\'activation de la licence');
    
    if (!licenseKey) {
      console.log('Aucune clé de licence fournie');
      return {
        success: false,
        message: 'Clé de licence requise'
      };
    }
    
    console.log('Vérification de la validité de la licence...');
    const validationResult = await isValidLicense(licenseKey);
    
    if (!validationResult.isValid) {
      return {
        success: false,
        message: validationResult.message
      };
    }

    console.log('Licence valide, configuration des dates...');
    const activationDate = new Date();
    const expirationDate = new Date();
    expirationDate.setDate(activationDate.getDate() + 30);

    console.log('Mise à jour de la liste des licences utilisées...');
    const usedLicenses = JSON.parse(await AsyncStorage.getItem(LICENSE_KEYS.USED_LICENSES) || '[]');
    usedLicenses.push(licenseKey);

    console.log('Enregistrement des données de licence...');
    await AsyncStorage.setItem(LICENSE_KEYS.ACTIVATION_DATE, activationDate.toISOString());
    await AsyncStorage.setItem(LICENSE_KEYS.EXPIRATION_DATE, expirationDate.toISOString());
    await AsyncStorage.setItem(LICENSE_KEYS.IS_ACTIVE, 'true');
    await AsyncStorage.setItem(LICENSE_KEYS.USED_LICENSES, JSON.stringify(usedLicenses));

    console.log('Activation de la licence réussie');
    return {
      success: true,
      message: 'Licence activée avec succès'
    };
  } catch (error) {
    console.error('Erreur lors de l\'activation de la licence:', error.message);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'activation de la licence'
    };
  }
};

export const getRemainingDays = async () => {
  try {
    const isActive = await AsyncStorage.getItem(LICENSE_KEYS.IS_ACTIVE);
    if (isActive !== 'true') return 0;

    const expirationDateStr = await AsyncStorage.getItem(LICENSE_KEYS.EXPIRATION_DATE);
    if (!expirationDateStr) return 0;

    const expirationDate = new Date(expirationDateStr);
    const currentDate = new Date();
    const timeDifference = expirationDate - currentDate;

    if (timeDifference <= 0) {
      await AsyncStorage.setItem(LICENSE_KEYS.IS_ACTIVE, 'false');
      
      // Récupérer la liste des licences utilisées
      const usedLicensesStr = await AsyncStorage.getItem(LICENSE_KEYS.USED_LICENSES);
      if (usedLicensesStr) {
        const usedLicenses = JSON.parse(usedLicensesStr);
        // Si nous avons des licences utilisées, marquer la dernière comme expirée
        if (usedLicenses.length > 0) {
          const lastUsedLicense = usedLicenses[usedLicenses.length - 1];
          
          // Ajouter la licence à la liste des licences expirées
          const expiredLicenses = JSON.parse(await AsyncStorage.getItem(LICENSE_KEYS.EXPIRED_LICENSES) || '[]');
          if (!expiredLicenses.includes(lastUsedLicense)) {
            expiredLicenses.push(lastUsedLicense);
            await AsyncStorage.setItem(LICENSE_KEYS.EXPIRED_LICENSES, JSON.stringify(expiredLicenses));
          }
        }
      }
      return 0;
    }

    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  } catch (error) {
    console.error('Error getting remaining days:', error);
    return 0;
  }
};

export const clearLicenseData = async () => {
  try {
    await AsyncStorage.multiRemove(Object.values(LICENSE_KEYS));
    return true;
  } catch (error) {
    console.error('Error clearing license data:', error);
    return false;
  }
};

export const hasValidLicense = async () => {
  const remainingDays = await getRemainingDays();
  return remainingDays > 0;
};

import * as Application from 'expo-application';

export const initializeCodeID = async () => {
  try {
    let codeID = await AsyncStorage.getItem(LICENSE_KEYS.CODE_ID);
    if (!codeID) {
      // Utiliser l'identifiant unique de l'installation de l'application
      if (Platform.OS === 'android') {
        codeID = Application.androidId;
      } else if (Platform.OS === 'ios') {
        codeID = await Application.getIosIdForVendorAsync();
      } else {
        // Fallback pour les autres plateformes
        codeID = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
      }
      
      if (codeID) {
        await AsyncStorage.setItem(LICENSE_KEYS.CODE_ID, codeID);
      } else {
        console.error('Impossible d\'obtenir un identifiant unique pour l\'appareil');
        // Créer un ID de secours
        codeID = `fallback-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
        await AsyncStorage.setItem(LICENSE_KEYS.CODE_ID, codeID);
      }
    }
    return codeID;
  } catch (error) {
    console.error('Erreur lors de l\'initialisation du Code ID:', error);
    return null;
  }
};

export const getGeneratedLicenses = async () => {
  try {
    console.log('Début de la récupération des licences générées');
    let codeID = await initializeCodeID();
    console.log('Code ID récupéré:', codeID);
    
    if (!codeID) {
      console.log('Aucun Code ID trouvé');
      return {
        success: false,
        message: 'Code ID non trouvé. Veuillez générer un Code ID d\'abord.'
      };
    }
    
    console.log('Génération des licences pour le Device ID...');
    const licenses = await generateLicenses(codeID);
    console.log('Nombre de licences générées:', licenses.length);
    
    console.log('Récupération des licences utilisées...');
    const usedLicenses = JSON.parse(await AsyncStorage.getItem(LICENSE_KEYS.USED_LICENSES) || '[]');
    console.log('Nombre de licences utilisées:', usedLicenses.length);
    
    console.log('Création de la liste des licences avec leur statut...');
    const licensesWithStatus = licenses.map(license => {
      const isUsed = usedLicenses.includes(license);
      console.log(`Licence ${license.substring(0, 8)}... : ${isUsed ? 'utilisée' : 'disponible'}`);
      return {
        key: license,
        used: isUsed
      };
    });

    return {
      success: true,
      message: 'Licences récupérées avec succès',
      licenses: licensesWithStatus
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des licences:', error);
    return {
      success: false,
      message: 'Erreur lors de la récupération des licences',
      licenses: []
    };
  }
};