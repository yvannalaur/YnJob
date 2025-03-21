import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ExperienceItem = ({ experience, index, updateExperience, removeExperience }) => {
  const [current, setCurrent] = useState(experience.current || false);

  const handleCurrentChange = () => {
    setCurrent(!current);
    updateExperience(index, 'current', !current);
  };

  return (
    <View key={index} style={{ marginBottom: 10 }}>
      <View>
        <Text style={{ fontWeight: '500', marginBottom: 3 }}>
          <MaterialCommunityIcons name="office-building" size={16} /> Entreprise
        </Text>
        <TextInput
          value={experience.company}
          onChangeText={(text) => updateExperience(index, 'company', text)}
          style={styles.input}
          accessibilityLabel="Entreprise"
          placeholder="Nom de l'entreprise"
        />
      </View>
      <View>
        <Text style={{ fontWeight: '500', marginBottom: 3 }}>
          <MaterialCommunityIcons name="briefcase" size={16} /> Poste
        </Text>
        <TextInput
          value={experience.position}
          onChangeText={(text) => updateExperience(index, 'position', text)}
          style={styles.input}
          accessibilityLabel="Poste"
          placeholder="Poste occupé"
        />
      </View>
      <View>
        <Text style={{ fontWeight: '500', marginBottom: 3 }}>
          <MaterialCommunityIcons name="format-list-bulleted" size={16} /> Tâches
        </Text>
        <TextInput
          value={experience.tasks}
          onChangeText={(text) => updateExperience(index, 'tasks', text)}
          multiline={true}
          style={styles.input}
          accessibilityLabel="Tâches"
          placeholder="Entrez chaque tâche sur une nouvelle ligne"
        />
      </View>

      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="calendar-start" size={16} /> Date de début
      </Text>
      <TextInput
        value={experience.startDate}
        onChangeText={(text) => updateExperience(index, 'startDate', text)}
        style={styles.input}
        accessibilityLabel="Date de début"
        placeholder="10 Novembre 2025"
      />
      {!current && (
        <View>
          <Text style={{ fontWeight: '500', marginBottom: 3 }}>
            <MaterialCommunityIcons name="calendar-end" size={16} /> Date de fin
          </Text>
          <TextInput
            value={experience.endDate}
            onChangeText={(text) => updateExperience(index, 'endDate', text)}
            style={styles.input}
            accessibilityLabel="Date de fin"
            placeholder="10 Novembre 2025"
          />
        </View>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Checkbox
          status={current ? 'checked' : 'unchecked'}
          onPress={handleCurrentChange}
          accessibilityLabel="De nos jours"
        />
        <Text style={{ fontSize: 16 }}>De nos jours</Text>
      </View>
      <Button mode="contained" onPress={() => removeExperience(index)} style={styles.removeButton} accessibilityLabel="Supprimer l'expérience">
        <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} />
        Supprimer
      </Button>
    </View>
  );
}

export default ExperienceItem;
