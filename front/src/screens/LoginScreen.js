// ================================================================================
// ARCHIVO: atencionesfsa/src/screens/LoginScreen.js
// ================================================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ApiService from '../services/ApiService';

const LoginScreen = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!correo.trim() || !clave.trim()) {
      Alert.alert('Error', 'Por favor ingrese correo y contraseña');
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      Alert.alert('Error', 'Por favor ingrese un correo electrónico válido');
      return;
    }

    setLoading(true);
    try {
      const response = await ApiService.login(correo, clave);
      
      if (response.needsPasswordReset) {
        // Redirigir a pantalla de reseteo de contraseña
        navigation.navigate('PasswordReset', { 
          correo: response.correo,
          usuario: response.usuario
        });
      } else if (response.success) {
        // Login exitoso, ir a home
        navigation.navigate('Home', { user: response.user });
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Ionicons name="medical" size={80} color="#2196F3" />
          <Text style={styles.title}>AtencionesFSA</Text>
          <Text style={styles.subtitle}>Sistema de Gestión</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Contraseña"
              value={clave}
              onChangeText={setClave}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>

          <View style={styles.helpContainer}>
            <Text style={styles.helpText}>
              📝 Para primer acceso use: 12345
            </Text>
            <Text style={styles.helpSubText}>
              Se le solicitará crear una nueva contraseña
            </Text>
          </View>

          <View style={styles.testContainer}>
            <Text style={styles.testTitle}>🧪 Datos de Prueba:</Text>
            <Text style={styles.testText}>Email: test@example.com</Text>
            <Text style={styles.testText}>Clave: 12345</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  // Reemplaza estas líneas en el StyleSheet
  formContainer: {
     backgroundColor: '#fff',
	  borderRadius: 10,
	  padding: 20,
	  // Cambiar de shadow* a boxShadow
	  boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.1)',
	  // Eliminar estas líneas:
	  // shadowColor: '#000',
	  // shadowOffset: { width: 0, height: 2 },
	  // shadowOpacity: 0.1,
	  // shadowRadius: 3.84,
	  // elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonDisabled: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  helpText: {
    color: '#1976d2',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  helpSubText: {
    color: '#1976d2',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 5,
  },
  testContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f3e5f5',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  testTitle: {
    color: '#7B1FA2',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  testText: {
    color: '#7B1FA2',
    fontSize: 13,
    marginBottom: 2,
  },
});

export default LoginScreen;