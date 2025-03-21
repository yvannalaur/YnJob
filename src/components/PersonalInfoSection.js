import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

const PersonalInfoSection = ({ userData, handleChange }) => {
  const [expanded, setExpanded] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      // Convert image to base64
      const base64 = await convertImageToBase64(uri);
      handleChange('photo', base64);
    }
  };

  const convertImageToBase64 = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error converting image to base64:", error);
      return null;
    }
  };


  const initialLastName = "Nalaur";
  const initialFirstName = "Yvan";
  const initialTitle = "Informaticien";
  const initialEmail = "yvannnalaur@gmail.com";
  const initialPhone = "+237 655233322";

  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="account" size={24} color={styles.subtitle.color} /> Informations Personnelles
      </Text>

      <Button mode="contained" onPress={() => setExpanded(!expanded)} style={styles.button}>
        {expanded ? 'Réduire les informations personnelles' : 'Ajouter des informations personnelles'}
      </Button>

      {expanded && (
        <View>
          <TouchableOpacity onPress={pickImage} style={personalInfoStyles.imageContainer}>
            <Image
              source={userData.photo ? { uri: userData.photo } : require('../assets/default-avatar.png')}
              style={personalInfoStyles.image}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={personalInfoStyles.editText}>Modifier la photo</Text>
              {userData.photo && (
                <TouchableOpacity onPress={() => handleChange('photo', null)}>
                  <MaterialCommunityIcons name="delete" size={20} color="#dc3545" />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>

          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="account" size={16} /> Nom
            </Text>
            <TextInput
              value={userData.lastName}
              onChangeText={(text) => handleChange('lastName', text)}
              style={styles.input}
              accessibilityLabel="Nom"
              placeholder="Nalaur"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="account" size={16} /> Prénom
            </Text>
            <TextInput
              value={userData.firstName}
              onChangeText={(text) => handleChange('firstName', text)}
              style={styles.input}
              accessibilityLabel="Prénom"
              placeholder="Yvan"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="briefcase" size={16} /> Titre du poste
            </Text>
            <TextInput
              value={userData.title}
              onChangeText={(text) => handleChange('title', text)}
              style={styles.input}
              accessibilityLabel="Titre du poste"
              placeholder="Informaticien"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="email" size={16} /> Email
            </Text>
            <TextInput
              value={userData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              style={styles.input}
              accessibilityLabel="Email"
              placeholder="yvannnalaur@gmail.com"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="phone" size={16} /> Téléphone
            </Text>
            <TextInput
              value={userData.phone}
              onChangeText={(text) => handleChange('phone', text)}
              keyboardType="phone-pad"
              style={styles.input}
              accessibilityLabel="Téléphone"
              placeholder="+237 655233322"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="home" size={16} /> Adresse
            </Text>
            <TextInput
              value={userData.address}
              onChangeText={(text) => handleChange('address', text)}
              style={styles.input}
              accessibilityLabel="Adresse"
              placeholder="e.g. Yaoundé, Cameroun"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="calendar" size={16} /> Date de naissance
            </Text>
            <TextInput
              value={userData.dateOfBirth}
              onChangeText={(text) => handleChange('dateOfBirth', text)}
              style={styles.input}
              accessibilityLabel="Date de naissance"
              placeholder="27 Mai 1989"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="linkedin" size={16} /> LinkedIn (optionnel)
            </Text>
            <TextInput
              value={userData.linkedin}
              onChangeText={(text) => handleChange('linkedin', text)}
              style={styles.input}
              accessibilityLabel="LinkedIn"
              placeholder="e.g. linkedin.com/in/etoofils"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="web" size={16} /> Portfolio ou site web (optionnel)
            </Text>
            <TextInput
              value={userData.portfolio}
              onChangeText={(text) => handleChange('portfolio', text)}
              style={styles.input}
              accessibilityLabel="Portfolio ou site web"
              placeholder="e.g. etoofils.com"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="account-details" size={16} /> Profil (facultatif)
            </Text>
            <TextInput
              value={userData.profile}
              onChangeText={(text) => handleChange('profile', text)}
              multiline={true}
              style={styles.input}
              accessibilityLabel="Profil"
              placeholder="Ingénieur informaticien passionné par le développement d'applications web et mobiles innovantes. Expert en React Native, Java et développement back-end."
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="flag" size={16} /> Nationalité (facultatif)
            </Text>
            <TextInput
              value={userData.nationality}
              onChangeText={(text) => handleChange('nationality', text)}
              style={styles.input}
              accessibilityLabel="Nationalité"
              placeholder="e.g. Camerounaise"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="account-group" size={16} /> État civil
            </Text>
            <TextInput
              value={userData.maritalStatus}
              onChangeText={(text) => handleChange('maritalStatus', text)}
              style={styles.input}
              accessibilityLabel="État civil"
              placeholder="e.g. Célibataire, Marié(e)"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="car" size={16} /> Permis de conduire
            </Text>
            <TextInput
              value={userData.drivingLicense}
              onChangeText={(text) => handleChange('drivingLicense', text)}
              style={styles.input}
              accessibilityLabel="Permis de conduire"
              placeholder="e.g. B"
            />
          </View>
          <View>
            <Text style={{ fontWeight: '500', marginBottom: 3 }}>
              <MaterialCommunityIcons name="human-child" size={16} /> Nombre d'enfants
            </Text>
            <TextInput
              value={userData.childrenCount}
              onChangeText={(text) => handleChange('childrenCount', text)}
              keyboardType="number-pad"
              style={styles.input}
              accessibilityLabel="Nombre d'enfants"
              placeholder="e.g. 2"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const personalInfoStyles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editText: {
    color: '#007bff',
    marginTop: 5,
  }
});

export default PersonalInfoSection;
