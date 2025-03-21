import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

const AbilityItem = ({ ability, updateAbility, removeAbility }) => (
  <View style={abilityStyles.abilityItem}>
    {/* Titre de la section */}
    <Text style={{ fontWeight: '500', marginBottom: 3 }}>
      <MaterialCommunityIcons name="star" size={16} /> Compétence
    </Text>

    {/* Champ de saisie pour le nom de la compétence */}
    <TextInput
      style={styles.input}
      placeholder="Nom de la compétence"
      value={ability.name}
      onChangeText={(text) => updateAbility('name', text)}
    />

    {/* Slider pour le niveau de compétence */}
    <View style={abilityStyles.sliderContainer}>
      <Slider
        style={abilityStyles.slider}
        minimumValue={0}
        maximumValue={100}
        step={10}
        value={ability.level}
        onValueChange={(value) => updateAbility('level', value)}
      />
      <Text style={abilityStyles.percentageText}>{`${Math.round(ability.level)}%`}</Text>
    </View>

    {/* Bouton Supprimer */}
    <IconButton
      icon="delete"
      size={20}
      onPress={removeAbility}
      style={abilityStyles.removeButton}
    />
  </View>
);

const abilityStyles = StyleSheet.create({
  abilityItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
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

export default AbilityItem;
