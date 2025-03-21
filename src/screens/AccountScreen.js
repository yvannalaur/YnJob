import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  Alert,
  Text,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { Button, Card, Checkbox } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';
import Slider from '@react-native-community/slider';
import * as ImagePicker from 'expo-image-picker';
import { getUserData, saveUserData, resetUserData } from '../utils/userData'; // Importez les fonctions de gestion des données

// Importez tous les composants nécessaires
import PersonalInfoSection from '../components/PersonalInfoSection';
import LanguagesSection from '../components/LanguagesSection';
import AbilitiesSection from '../components/AbilitiesSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import HobbiesSection from '../components/HobbiesSection';
import ReferencesSection from '../components/ReferencesSection';
import CertificationsSection from '../components/CertificationsSection';

// Données initiales
const resetData = {
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

// Composant principal
const AccountScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(resetData);
  const [collapsedSections, setCollapsedSections] = useState({
    personalInfo: false,
    languages: false,
    skills: false,
    education: false,
    experience: false,
    hobbies: false,
    references: false,
    certifications: false,
  });

  // Charger les données utilisateur au démarrage
  useEffect(() => {
    // Démarrer l'animation de fondu
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const loadUserData = async () => {
      try {
        console.log('Chargement des données utilisateur...');
        const data = await getUserData(); // Chargez les données depuis AsyncStorage
        if (data) {
          console.log('Données utilisateur chargées avec succès');
          setUserData(data);
        } else {
          console.log('Aucune donnée utilisateur trouvée, utilisation des valeurs par défaut');
          setUserData(resetData);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
        // En cas d'erreur, utiliser les données par défaut
        console.log('Utilisation des valeurs par défaut suite à une erreur');
        setUserData(resetData);
      } finally {
        setLoading(false);
      }
    };

    // Ajouter un délai pour s'assurer que l'écran est prêt
    setTimeout(() => {
      loadUserData();
    }, 300);
  }, []);

  // Gestion des changements de données
  const handleChange = (name, value) => {
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Sauvegarder les données
  const handleSave = async () => {
    try {
      await saveUserData(userData); // Sauvegardez les données dans AsyncStorage
      Alert.alert('Succès', 'Les données ont été enregistrées avec succès !');
      navigation.navigate('CV', { userData });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'enregistrement.');
    }
  };

  // Réinitialiser les données
  const handleReset = async () => {
    try {
      const data = await resetUserData(); // Réinitialisez les données dans AsyncStorage
      setUserData(data);
      Alert.alert('Succès', 'Les données ont été réinitialisées avec succès !');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation des données :', error);
    }
  };

  // Basculer les sections
  const toggleSection = (section) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Mettre à jour une compétence
  const updateSkill = (index, field, value) => {
    const updatedSkills = [...userData.skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setUserData({ ...userData, skills: updatedSkills });
  };

  // Affichage du chargement
  if (loading) {
    return <Text style={styles.loadingText}>Chargement...</Text>;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Animated.ScrollView style={{ opacity: fadeAnim }}>
        {/* Titre de la page */}
        <Text style={styles.accountTitle}>Mon Compte</Text>

        {/* Section Informations Personnelles */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('personalInfo')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="account" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Informations Personnelles</Text>
              <MaterialCommunityIcons
                name={collapsedSections.personalInfo ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.personalInfo}>
            <PersonalInfoSection userData={userData} handleChange={handleChange} />
          </Collapsible>
        </Card>

        {/* Section Langues */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('languages')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="translate" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Langues</Text>
              <MaterialCommunityIcons
                name={collapsedSections.languages ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.languages}>
            <LanguagesSection
              languages={userData.languages}
              addLanguage={() => setUserData(prev => ({ ...prev, languages: [...prev.languages, { name: '', level: 50 }] }))}
              removeLanguage={index => setUserData(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) }))}
              updateLanguage={(index, field, value) => {
                const updatedLanguages = [...userData.languages];
                updatedLanguages[index] = { ...updatedLanguages[index], [field]: value };
                setUserData({ ...userData, languages: updatedLanguages });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Compétences */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('skills')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="tools" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Compétences</Text>
              <MaterialCommunityIcons
                name={collapsedSections.skills ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.skills}>
            <AbilitiesSection
              abilities={userData.skills}
              addAbility={() => setUserData(prev => ({ ...prev, skills: [...prev.skills, { name: '', level: 50 }] }))}
              removeAbility={index => setUserData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }))}
              updateAbility={(index, field, value) => {
                const updatedSkills = [...userData.skills];
                updatedSkills[index] = { ...updatedSkills[index], [field]: value };
                setUserData({ ...userData, skills: updatedSkills });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Formation */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('education')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="school" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Formation</Text>
              <MaterialCommunityIcons
                name={collapsedSections.education ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.education}>
            <EducationSection
              educations={userData.educations}
              addEducation={() => setUserData(prev => ({ ...prev, educations: [...prev.educations, { institution: '', degree: '', startDate: '', endDate: '', current: false }] }))}
              removeEducation={index => setUserData(prev => ({ ...prev, educations: prev.educations.filter((_, i) => i !== index) }))}
              updateEducation={(index, field, value) => {
                const updatedEducations = [...userData.educations];
                updatedEducations[index] = { ...updatedEducations[index], [field]: value };
                setUserData({ ...userData, educations: updatedEducations });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Expériences Professionnelles */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('experience')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="briefcase" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Expériences Professionnelles</Text>
              <MaterialCommunityIcons
                name={collapsedSections.experience ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.experience}>
            <ExperienceSection
              experiences={userData.experiences}
              addExperience={() => setUserData(prev => ({ ...prev, experiences: [...prev.experiences, { company: '', position: '', tasks: '', startDate: '', endDate: '', current: false }] }))}
              removeExperience={index => setUserData(prev => ({ ...prev, experiences: prev.experiences.filter((_, i) => i !== index) }))}
              updateExperience={(index, field, value) => {
                const updatedExperiences = [...userData.experiences];
                updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
                setUserData({ ...userData, experiences: updatedExperiences });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Loisirs */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('hobbies')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="heart" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Loisirs</Text>
              <MaterialCommunityIcons
                name={collapsedSections.hobbies ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.hobbies}>
            <HobbiesSection
              hobbies={userData.hobbies}
              addHobby={() => setUserData(prev => ({ ...prev, hobbies: [...prev.hobbies, ''] }))}
              removeHobby={index => setUserData(prev => ({ ...prev, hobbies: prev.hobbies.filter((_, i) => i !== index) }))}
              updateHobby={(index, value) => {
                const updatedHobbies = [...userData.hobbies];
                updatedHobbies[index] = value;
                setUserData({ ...userData, hobbies: updatedHobbies });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Références */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('references')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="account-group" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Références</Text>
              <MaterialCommunityIcons
                name={collapsedSections.references ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.references}>
            <ReferencesSection
              references={userData.references}
              addReference={() => setUserData(prev => ({ ...prev, references: [...prev.references, { name: '', title: '', company: '', contact: '' }] }))}
              removeReference={index => setUserData(prev => ({ ...prev, references: prev.references.filter((_, i) => i !== index) }))}
              updateReference={(index, field, value) => {
                const updatedReferences = [...userData.references];
                updatedReferences[index] = { ...updatedReferences[index], [field]: value };
                setUserData({ ...userData, references: updatedReferences });
              }}
            />
          </Collapsible>
        </Card>

        {/* Section Certifications */}
        <Card style={styles.sectionCard}>
          <TouchableOpacity onPress={() => toggleSection('certifications')}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name="certificate" size={24} color="#007bff" />
              <Text style={styles.sectionTitle}>Certifications</Text>
              <MaterialCommunityIcons
                name={collapsedSections.certifications ? 'chevron-down' : 'chevron-up'}
                size={24}
                color="#007bff"
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsedSections.certifications}>
            <CertificationsSection
              certifications={userData.certifications}
              addCertification={() => setUserData(prev => ({ ...prev, certifications: [...prev.certifications, { name: '', date: '', institution: '', description: '' }] }))}
              removeCertification={index => setUserData(prev => ({ ...prev, certifications: prev.certifications.filter((_, i) => i !== index) }))}
              updateCertification={(index, field, value) => {
                const updatedCertifications = [...userData.certifications];
                updatedCertifications[index] = { ...updatedCertifications[index], [field]: value };
                setUserData({ ...userData, certifications: updatedCertifications });
              }}
            />
          </Collapsible>
        </Card>

        {/* Boutons d'action */}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleSave}
            style={[styles.saveButton, styles.buttonShadow]}
            labelStyle={styles.buttonLabel}
            icon="content-save"
          >
            Enregistrer
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              Alert.alert(
                'Confirmation',
                'Êtes-vous sûr de vouloir réinitialiser toutes vos données ? Cette action est irréversible.',
                [
                  { text: 'Annuler', style: 'cancel' },
                  { text: 'Réinitialiser', onPress: handleReset, style: 'destructive' }
                ]
              );
            }}
            style={[styles.resetButton, styles.buttonShadow]}
            labelStyle={styles.buttonLabel}
            icon="delete-sweep"
          >
            Réinitialiser
          </Button>
        </View>
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  accountTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 123, 255, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  sectionCard: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginLeft: 10,
    flex: 1,
  },
  sectionContent: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  saveButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  resetButton: {
    backgroundColor: '#dc3545',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#007bff',
  },
  addButton: {
    backgroundColor: '#00bfff', // Bleu ciel
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  removeButton: {
    backgroundColor: '#ff4444', // Rouge
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default AccountScreen;