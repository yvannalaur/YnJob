import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

const HobbiesSection = ({ hobbies, addHobby, removeHobby, updateHobby }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>
        <MaterialCommunityIcons name="heart" size={24} color="#444" /> Centres d'intérêt
      </Text>
      {hobbies.map((hobby, index) => (
        <View key={index}>
          <TextInput
            label="Centre d'intérêt"
            value={hobby}
            placeholder="e.g., Football, Lecture"
             onFocus={(e) => {
              if (hobby === "e.g., Football, Lecture") {
                updateHobby(index, '');
              }
            }}
            onBlur={(e) => {
              if (!hobby) {
                updateHobby(index, "e.g., Football, Lecture");
              }
            }}
            onChangeText={(text) => updateHobby(index, text)}
            style={styles.input}
          />
          <Button mode="contained" onPress={() => removeHobby(index)} style={styles.removeButton}>
            <MaterialCommunityIcons name="delete" size={20} color="#fff" style={{ marginRight: 5 }} /> Supprimer
          </Button>
        </View>
      ))}
      <Button mode="contained" onPress={addHobby} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={20} color="#fff" style={{ marginRight: 5 }} /> Ajouter un centre d'intérêt
      </Button>
    </View>
  );
};

export default HobbiesSection;
