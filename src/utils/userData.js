import AsyncStorage from '@react-native-async-storage/async-storage';

// Clé pour le stockage local
const USER_DATA_KEY = 'userData';

// Données par défaut
const defaultUserData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  photo: null,
  languages: [],
  experiences: [],
  educations: [],
  skills: [{ name: 'HTML', level: 80 }, { name: 'CSS', level: 70 }, { name: 'JS', level: 60 }],
  references: [],
  hobbies: [],
  certifications: [],
  maritalStatus: '',
  drivingLicense: '',
  childrenCount: '',
};

// Fonction pour charger les données utilisateur
export const getUserData = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_DATA_KEY);
    if (!data) {
      console.log("Aucune donnée utilisateur trouvée, utilisation des valeurs par défaut");
      return defaultUserData;
    }
    
    try {
      const parsedData = JSON.parse(data);
      // Vérifier que toutes les propriétés requises sont présentes
      return { ...defaultUserData, ...parsedData };
    } catch (parseError) {
      console.error("Erreur lors de l'analyse des données utilisateur :", parseError);
      return defaultUserData;
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données utilisateur :", error);
    return defaultUserData;
  }
};

// Fonction pour sauvegarder les données utilisateur
export const saveUserData = async (userData) => {
  try {
    const userDataString = JSON.stringify(userData);
    await AsyncStorage.setItem(USER_DATA_KEY, userDataString);
    console.log("Données utilisateur sauvegardées avec succès :", userData); // Ajout d'un log de succès
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données utilisateur :", error);
  }
};

// Fonction pour réinitialiser les données utilisateur
export const resetUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_DATA_KEY);
    console.log("Données utilisateur réinitialisées avec succès."); // Ajout d'un log de succès
    return defaultUserData; // Retourne les données par défaut au lieu de null
  } catch (error) {
    console.error("Erreur lors de la réinitialisation des données utilisateur :", error);
    return defaultUserData; // Retourne les données par défaut en cas d'erreur
  }
};
