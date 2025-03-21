import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EducationItem = ({ education, index, updateEducation, removeEducation }) => {
  const [current, setCurrent] = useState(education.current || false);

  const handleCurrentChange = () => {
    setCurrent(!current);
    updateEducation(index, 'current', !current);
  };

  return (
    <View key={index} style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="school" size={16} /> Institution
      </Text>
      <TextInput
        value={education.institution}
        onChangeText={(text) => updateEducation(index, 'institution', text)}
        style={styles.input}
        accessibilityLabel="Institution"
        placeholder="e.g., Université de Yaoundé I"
      />
      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="certificate" size={16} /> Diplôme
      </Text>
      <TextInput
        value={education.degree}
        onChangeText={(text) => updateEducation(index, 'degree', text)}
        style={styles.input}
        accessibilityLabel="Diplôme"
        placeholder="e.g., Licence en Informatique"
      />
      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="format-list-bulleted" size={16} /> Description
      </Text>
      <TextInput
        value={education.description}
        onChangeText={(text) => updateEducation(index, 'description', text)}
        style={styles.input}
        accessibilityLabel="Description"
        placeholder="Description de la formation"
        multiline={true}
      />
      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="calendar-start" size={16} /> Date de début
      </Text>
      <TextInput
        value={education.startDate}
        onChangeText={(text) => updateEducation(index, 'startDate', text)}
        style={styles.input}
        accessibilityLabel="Date de début"
        placeholder="e.g., 10 Novembre 2020"
      />
      {!current && (
        <>
          <Text style={{ fontWeight: '500', marginBottom: 3 }}>
            <MaterialCommunityIcons name="calendar-end" size={16} /> Date de fin
          </Text>
          <TextInput
            value={education.endDate}
            onChangeText={(text) => updateEducation(index, 'endDate', text)}
            style={styles.input}
            accessibilityLabel="Date de fin"
             placeholder="e.g., 10 Novembre 2023"
          />
        </>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox
          status={current ? 'checked' : 'unchecked'}
          onPress={handleCurrentChange}
          accessibilityLabel="De nos jours"
        />
        <Text style={{ fontSize: 16 }}>De nos jours</Text>
      </View>
      <Button mode="contained" onPress={() => removeEducation(index)} style={styles.removeButton} accessibilityLabel="Supprimer la formation">
        <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} />
        Supprimer
      </Button>
    </View>
  );
};

export default EducationItem;
