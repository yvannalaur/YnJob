import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import des écrans
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import CreateCVScreen from './src/screens/CreateCVScreen';
import LicenseScreen from './src/screens/LicenseScreen';

// Crée un stack navigator
const Stack = createStackNavigator();

// Crée un bottom tab navigator
const Tab = createBottomTabNavigator();

// Écran principal avec menu
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Définir les icônes en fonction du nom de l'écran
          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Compte') {
            iconName = 'account-circle';
          } else if (route.name === 'CV') {
            iconName = 'file-document-edit';
          } else if (route.name === 'Licence') {
            iconName = 'shield-key';
          }

          // Retourner l'icône correspondante
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff', // Couleur active
        tabBarInactiveTintColor: 'gray', // Couleur inactive
        tabBarStyle: { backgroundColor: '#fff' }, // Style de la barre d'onglets
      })}
    >
      {/* Accueil */}
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{ title: 'Accueil' }}
      />

      {/* Mon Compte */}
      <Tab.Screen
        name="Compte"
        component={AccountScreen}
        options={{ title: 'Mon Compte' }}
      />

      {/* Créer CV */}
      <Tab.Screen
        name="CV"
        component={CreateCVScreen}
        options={{ title: 'Créer CV' }}
      />
      {/* Activer Licence */}
      <Tab.Screen
        name="Licence"
        component={LicenseScreen}
        options={{ title: 'Activer Licence' }}
      />
    </Tab.Navigator>
  );
};

// Application principale
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('./assets/logo.png')} // Remplacez par le chemin de votre logo
          style={styles.loadingLogo}
        />
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {/* Menu principal */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }} // Masquer l'en-tête
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  loadingLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default App;
