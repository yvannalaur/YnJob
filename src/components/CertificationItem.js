import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CertificationItem = ({ certification, index, updateCertification, removeCertification }) => {
  return (
    <View key={index} style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="certificate" size={16} /> Nom de la certification
      </Text>
      <TextInput
        value={certification.name}
        onChangeText={(text) => updateCertification(index, 'name', text)}
        style={styles.input}
        accessibilityLabel="Nom de la certification"
      />

      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="office-building" size={16} /> Institution ou organisme délivrant la certification
      </Text>
      <TextInput
        value={certification.institution}
        onChangeText={(text) => updateCertification(index, 'institution', text)}
        style={styles.input}
        accessibilityLabel="Institution ou organisme délivrant la certification"
      />

      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="calendar" size={16} /> Date d'obtention
      </Text>
      <TextInput
        value={certification.date}
        onChangeText={(text) => updateCertification(index, 'date', text)}
        style={styles.input}
        accessibilityLabel="Date d'obtention"
      />

      <Text style={{ fontWeight: '500', marginBottom: 3 }}>
        <MaterialCommunityIcons name="text" size={16} /> Description ou domaine couvert (optionnel)
      </Text>
      <TextInput
        value={certification.description}
        onChangeText={(text) => updateCertification(index, 'description', text)}
        style={styles.input}
        accessibilityLabel="Description ou domaine couvert"
        multiline={true}
      />

      <Button mode="contained" onPress={() => removeCertification(index)} style={styles.removeButton} accessibilityLabel="Supprimer la certification">
        <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} />
        Supprimer
      </Button>
    </View>
  );
};

export default CertificationItem;
