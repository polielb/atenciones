import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import PasswordResetScreen from './src/screens/PasswordResetScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar sesión' }} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ title: 'Resetear clave' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
