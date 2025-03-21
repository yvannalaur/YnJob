import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';
import CertificationItem from './CertificationItem';

const CertificationsSection = ({ certifications, addCertification, removeCertification, updateCertification }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="certificate" size={24} color="#444" /> Certifications
      </Text>
      {certifications.map((certification, index) => (
        <CertificationItem
          key={index}
          certification={certification}
          index={index}
          updateCertification={updateCertification}
          removeCertification={removeCertification}
        />
      ))}
      <Button mode="contained" onPress={addCertification} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={20} color="#fff" style={{ marginRight: 5 }} /> Ajouter une certification
      </Button>
    </View>
  );
};

export default CertificationsSection;
