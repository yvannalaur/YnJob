import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AbilityItem from './AbilityItem';
import styles from '../styles';

const AbilitiesSection = ({ abilities, addAbility, removeAbility, updateAbility }) => {
  return (
    <View style={styles.section}>
      {/* Titre de la section */}
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="star" size={24} color="#4682B4" /> Compétences
      </Text>

      {/* Liste des compétences */}
      {abilities.map((ability, index) => (
        <AbilityItem
          key={index}
          ability={ability}
          updateAbility={(field, value) => updateAbility(index, field, value)}
          removeAbility={() => removeAbility(index)}
        />
      ))}

      {/* Bouton Ajouter une compétence */}
      <Button mode="contained" onPress={addAbility} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={20} color="#fff" style={{ marginRight: 5 }} /> Ajouter une compétence
      </Button>
    </View>
  );
};

export default AbilitiesSection;
