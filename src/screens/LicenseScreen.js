import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Animated, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { activateLicense, getRemainingDays, clearLicenseData, initializeCodeID, getGeneratedLicenses } from '../utils/licenseUtils';

const WHATSAPP_NUMBER = "237655233322";



const LicenseScreen = () => {
  const navigation = useNavigation();
  const [remainingDays, setRemainingDays] = useState(0);
  const [codeID, setCodeID] = useState('');
  const [licenseKey, setLicenseKey] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const fetchRemainingDays = async () => {
      const days = await getRemainingDays();
      setRemainingDays(days);

      const interval = setInterval(async () => {
        const updatedDays = await getRemainingDays();
        setRemainingDays(updatedDays);

        if (updatedDays === 0) {
          clearInterval(interval);
        }
      }, 60000);

      return () => clearInterval(interval);
    };

    const getCodeID = async () => {
      try {
        const storedCodeID = await initializeCodeID();
        if (storedCodeID) {
          setCodeID(storedCodeID);
        } else {
          Alert.alert('Erreur', 'Échec de la génération ou de la récupération du Code ID.');
        }
      } catch (error) {
        console.error('Erreur lors de la génération du Code ID:', error);
        Alert.alert('Erreur', 'Échec de la génération ou de la récupération du Code ID.');
      }
    };

    fetchRemainingDays();
    getCodeID();
    AsyncStorage.getItem('licenseValid')
      .then(value => {
        console.log('licenseValid:', value);
      })
      .catch(error => console.error('Error getting licenseValid:', error));
    // generateAndStoreLicenses(); // Comment out or remove this line

    // Removed auto-validation code
  }, []);




  const [licenseMessage, setLicenseMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' ou 'error'
  const [showModal, setShowModal] = useState(false);
  const modalAnimation = useRef(new Animated.Value(0)).current;

  const showErrorModal = (message) => {
    setLicenseMessage(message);
    setMessageType('error');
    setShowModal(true);
    Animated.spring(modalAnimation, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    }).start();
  };

  const hideModal = () => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      setShowModal(false);
      setLicenseMessage('');
    });
  };

  const showSuccessModal = (message) => {
    setLicenseMessage(message);
    setMessageType('success');
    setShowModal(true);
    Animated.spring(modalAnimation, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    }).start();
    setTimeout(() => {
      hideModal();
      navigation.navigate('CV');
    }, 2000);
  };

  const handleActivate = async () => {
    const result = await activateLicense(licenseKey);
    if (result.success) {
      const days = await getRemainingDays();
      setRemainingDays(days);
      showSuccessModal('Votre licence a été activée avec succès pour 30 jours.');
    } else {
      showErrorModal(result.message);
    }
  };


  const sendWhatsApp = () => {
    const url = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=Voici%20mon%20Code%20ID:%20${codeID}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Erreur', 'Impossible d\'ouvrir WhatsApp.');
    });
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showModal && (
        <Animated.View 
          style={[styles.modalOverlay, {
            opacity: modalAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5]
            })
          }]}
        />
      )}
      {showModal && (
        <Animated.View 
          style={[styles.modalContainer, {
            transform: [{
              scale: modalAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1]
              })
            }],
            opacity: modalAnimation
          }]}
        >
          <View style={styles.modalContent}>
            <Icon 
              name={messageType === 'success' ? 'check-circle' : 'exclamation-circle'} 
              size={50} 
              color={messageType === 'success' ? '#2ecc71' : '#e74c3c'} 
            />
            <Text style={styles.modalTitle}>
              {messageType === 'success' ? 'Licence Activée' : 'Licence Invalide'}
            </Text>
            <Text style={styles.modalMessage}>{licenseMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={hideModal}>
              <Text style={styles.modalButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      <Animated.View style={[styles.sectionContainer, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Gestion de la Licence</Text>
      </Animated.View>

      {/* Instructions Section */}
      <Animated.View style={[styles.sectionContainer, { opacity: fadeAnim }]}>
        <Text style={[styles.instructionTitle, { fontSize: 22 }]}>Comment activer l'application ?</Text>
        <View style={styles.instructionContainer}>
          <View style={styles.instructionStepContainer}>
            <Icon name="money" size={20} color="#e67e22" style={styles.instructionIcon} />
            <Text style={[styles.instructionStep, { fontSize: 16 }]}>
              <Text style={{ fontWeight: 'bold' }}>Étape 1:</Text> Effectuez votre paiement (Le mode paiement est expliqué en bas).
            </Text>
          </View>
          <View style={styles.instructionStepContainer}>
            <Icon name="whatsapp" size={20} color="#25D366" style={styles.instructionIcon} />
            <Text style={[styles.instructionStep, { fontSize: 16 }]}>
              <Text style={{ fontWeight: 'bold' }}>Étape 2:</Text> Cliquez sur le bouton Envoyer Code ID afin d'envoyer votre code ID.
            </Text>
          </View>
          <View style={styles.instructionStepContainer}>
            <Icon name="key" size={20} color="#3498db" style={styles.instructionIcon} />
            <Text style={[styles.instructionStep, { fontSize: 16 }]}>
              <Text style={{ fontWeight: 'bold' }}>Étape 3:</Text> Une licence vous sera donnée.
            </Text>
          </View>
          <View style={styles.instructionStepContainer}>
            <Icon name="paste" size={20} color="#9b59b6" style={styles.instructionIcon} />
            <Text style={[styles.instructionStep, { fontSize: 16 }]}>
              <Text style={{ fontWeight: 'bold' }}>Étape 4:</Text> Copiez cette clé, collez-la dans la section "Entrez votre clé de licence" et validez.
            </Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.sectionContainer, styles.mainSection, { opacity: fadeAnim }]}>
        {licenseMessage ? (
          <View style={[styles.messageContainer, messageType === 'success' ? styles.successMessage : styles.errorMessage]}>
            <Text style={styles.messageText}>{licenseMessage}</Text>
          </View>
        ) : null}
        <View style={styles.codeIDSection}>
          <Text style={styles.label}>Votre Code ID :</Text>
          <Text style={styles.codeID}>{codeID}</Text>
          <TouchableOpacity onPress={sendWhatsApp} style={[styles.button, styles.sendButton]}>
            <Text style={styles.buttonText}>📱 Envoyer Code ID</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.licenseSection}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre clé de licence"
            value={licenseKey}
            onChangeText={setLicenseKey}
            placeholderTextColor="#666"
          />
          <TouchableOpacity onPress={handleActivate} style={[styles.button, styles.activateButton]}>
            <Text style={styles.buttonText}>✅ Activer la licence (30 jours)</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Section Statut de la Licence */}
      <Animated.View style={[styles.sectionContainer, { opacity: fadeAnim }]}>
        <View style={styles.section}>
          {remainingDays > 0 ? (
            <Text style={[styles.status, styles.valid]}>
              ⏳ Licence valide - {remainingDays} jours restants ✅
            </Text>
          ) : (
            <Text style={[styles.status, styles.expired]}>
              ❌ Licence expirée !
            </Text>
          )}
        </View>
      </Animated.View>

      {/* Section Informations de Paiement */}
      <Animated.View style={[styles.sectionContainer, styles.paymentSection, { opacity: fadeAnim }]}>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentTitle}>Informations de Paiement</Text>
          <Text style={styles.paymentDescription}>
            Choisissez votre méthode de paiement préférée pour activer votre licence.
          </Text>
          <View style={styles.paymentMethods}>
            <View style={styles.paymentMethod}>
              <Icon name="money" size={30} color="#e67e22" style={styles.paymentIcon} />
              <View>
                <Text style={styles.paymentMethodTitle}>Orange Money</Text>
                <Text style={styles.paymentNumber}>TEL : +237 655233322</Text>
                <Text style={styles.paymentName}>Nalaur Founou Yvan Ariel</Text>
              </View>
            </View>
            <View style={styles.paymentMethod}>
              <Icon name="mobile-phone" size={30} color="#27ae60" style={styles.paymentIcon} />
              <View>
                <Text style={styles.paymentMethodTitle}>Mobile Money</Text>
                <Text style={styles.paymentNumber}>+237 671054234</Text>
                <Text style={styles.paymentName}>Nalaur Founou Yvan Ariel</Text>
              </View>
            </View>
          </View>
          <Text style={styles.paymentInstruction}>
            Après le paiement, envoyez votre <Text style={styles.codeIDText}>Code ID</Text> par WhatsApp pour activer votre licence.
          </Text>
          <Text style={styles.priceInfo}>
            💰 COÛT : <Text style={styles.priceAmount}>1000fr</Text> (Validité 30 jours)
          </Text>
        </View>
      </Animated.View>

      {/* Section Licences Générées supprimée */}
    </ScrollView>
  );
};

// Styles CSS
const styles = StyleSheet.create({
  licensesContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  licensesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  licensesList: {
    maxHeight: 200,
  },
  licenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  licenseKey: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#333',
  },
  licenseStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  usedLicense: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
  },
  availableLicense: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    zIndex: 1000,
  },
  modalContainer: {
    position: 'absolute',
    top: '30%',
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#2c3e50',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#34495e',
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  messageContainer: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  successMessage: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  errorMessage: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  sectionContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    padding: 10,
    transition: "opacity 0.5s ease-in-out",
  },
    title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  codeID: {
    fontSize: 14,
    marginBottom: 10,
    color: '#222',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
  valid: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  expired: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  paymentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  paymentDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  paymentMethod: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  paymentInstruction: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  codeIDText: {
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Roboto',
  },
  priceInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  priceAmount: {
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
  },
  paymentNumber: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  instructionContainer: {
    marginBottom: 10,
  },
  instructionStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructionIcon: {
    marginRight: 10,
  },
  instructionStep: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'left',
  },
  paymentNumbers: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'left',
  },
  codeIDSection: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 20,
  },
  licenseSection: {
    marginTop: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  codeID: {
    fontSize: 16,
    color: '#34495e',
    backgroundColor: '#f7f9fc',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e3e8ee',
  },
  input: {
    backgroundColor: '#f7f9fc',
    borderWidth: 1,
    borderColor: '#e3e8ee',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#2c3e50',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  sendButton: {
    backgroundColor: '#3498db',
    marginTop: 10,
  },
  activateButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
  valid: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  expired: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
  paymentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  paymentDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  paymentMethod: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  paymentInstruction: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  codeIDText: {
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Roboto',
  },
  priceInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  priceAmount: {
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
  },
  paymentNumber: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'center',
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left',
  },
  instructionContainer: {
    marginBottom: 10,
  },
  instructionStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructionIcon: {
    marginRight: 10,
  },
  instructionStep: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'left',
  },
  paymentNumbers: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    textAlign: 'left',
  },
  codeIDSection: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    padding: 10,
  },
  paymentContact: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  paymentName: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  paymentPhone: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
  }
});

export default LicenseScreen;
