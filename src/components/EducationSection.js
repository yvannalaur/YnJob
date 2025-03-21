import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EducationItem from './EducationItem';

const EducationSection = ({ educations, addEducation, removeEducation, updateEducation }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="school" size={24} color={styles.subtitle.color} /> Éducation
      </Text>
      {educations.map((education, index) => (
        <EducationItem
          key={index}
          education={education}
          index={index}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      ))}
      <Button mode="contained" onPress={addEducation} style={styles.button} accessibilityLabel="Ajouter une formation">
        Ajouter une formation
      </Button>
    </View>
  );
};

export default EducationSection;
