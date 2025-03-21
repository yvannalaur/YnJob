import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = ({ experiences, addExperience, removeExperience, updateExperience }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="briefcase" size={24} color={styles.subtitle.color} /> Expérience Professionnelle
      </Text>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          experience={experience}
          index={index}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      ))}
      <Button mode="contained" onPress={addExperience} style={styles.button} accessibilityLabel="Ajouter une expérience">
        Ajouter une expérience
      </Button>
    </View>
  );
};

export default ExperienceSection;
