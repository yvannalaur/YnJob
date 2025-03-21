import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

const ReferenceItem = ({ reference, updateReference, removeReference }) => (
  <View>
    {/* Nom et prénom de la personne de référence */}
    <TextInput
      label="Nom et prénom"
      placeholder="Nom et prénom"
      value={reference.name}
      onChangeText={(text) => updateReference('name', text)}
      style={styles.input}
    />

    {/* Titre/Position professionnelle */}
    <TextInput
      label="Titre/Position"
      placeholder="Titre/Position"
      value={reference.title}
      onChangeText={(text) => updateReference('title', text)}
      style={styles.input}
    />

    {/* Nom de l'entreprise ou de l'organisation */}
    <TextInput
      label="Entreprise/Organisation"
      placeholder="Entreprise/Organisation"
      value={reference.company}
      onChangeText={(text) => updateReference('company', text)}
      style={styles.input}
    />

    {/* Coordonnées de la personne (téléphone et/ou e-mail) */}
    <TextInput
      label="Téléphone/E-mail"
      placeholder="Téléphone/E-mail"
      value={reference.contact}
      onChangeText={(text) => updateReference('contact', text)}
      style={styles.input}
    />
    <Button mode="contained" onPress={() => removeReference()} style={styles.removeButton}>
      <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} /> Supprimer
    </Button>
  </View>
);

const ReferencesSection = ({ references, addReference, removeReference, updateReference }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="account-group" size={24} color="#444" /> Références
      </Text>
      {references.map((reference, index) => (
        <View key={index}>
          <ReferenceItem
            key={index}
            reference={reference}
            updateReference={(field, value) => updateReference(index, field, value)}
            removeReference={() => removeReference(index)}
          />
        </View>
      ))}
      <Button mode="contained" onPress={addReference} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={20} color="#fff" style={{ marginRight: 5 }} /> Ajouter une référence
      </Button>
    </View>
  );
};

export default ReferencesSection;
