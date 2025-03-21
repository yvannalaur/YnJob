import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

const LanguageItem = ({ language, updateLanguage, removeLanguage }) => (
  <View style={languageStyles.languageItem}>
    {/* Titre de la section */}
    <Text style={{ fontWeight: '500', marginBottom: 3 }}>
      <MaterialCommunityIcons name="translate" size={16} /> Langue
    </Text>

    {/* Champ de saisie pour le nom de la langue */}
    <TextInput
      style={styles.input}
      placeholder="Nom de la langue"
      value={language.name}
      onChangeText={(text) => updateLanguage('name', text)}
    />

    {/* Slider pour le niveau de compétence */}
    <View style={languageStyles.sliderContainer}>
      <Slider
        style={languageStyles.slider}
        minimumValue={0}
        maximumValue={100}
        step={10}
        value={language.level}
        onValueChange={(value) => updateLanguage('level', value)}
      />
      <Text style={languageStyles.percentageText}>{`${Math.round(language.level)}%`}</Text>
    </View>

    {/* Bouton Supprimer */}
    <Button mode="contained" onPress={removeLanguage} style={styles.removeButton}>
      <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} />
      Supprimer
    </Button>
  </View>
);

const LanguagesSection = ({ languages, addLanguage, removeLanguage, updateLanguage }) => {
  return (
    <View style={styles.section}>
      {/* Titre de la section */}
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="translate" size={24} color="#007bff" /> Langues
      </Text>

      {/* Liste des langues */}
      {languages.map((language, index) => (
        <LanguageItem
          key={index}
          language={language}
          updateLanguage={(field, value) => updateLanguage(index, field, value)}
          removeLanguage={() => removeLanguage(index)}
        />
      ))}

      {/* Bouton Ajouter une langue */}
      <Button mode="contained" onPress={addLanguage} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={20} color="#fff" style={{ marginRight: 5 }} /> Ajouter une langue
      </Button>
    </View>
  );
};

const languageStyles = StyleSheet.create({
  languageItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  slider: {
    flex: 1,
    marginRight: 10,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  removeButton: {
    alignSelf: 'flex-end',
  },
  addButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default LanguagesSection;
