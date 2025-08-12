// ================================================================================
// ARCHIVO: front/src/screens/HomeScreen.js
// ================================================================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation, route }) => {
  const { user } = route.params || {};

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Ionicons name="person-circle" size={60} color="#2196F3" />
          <Text style={styles.welcomeText}>隆Bienvenido!</Text>
          <Text style={styles.userName}>
            {user?.nombres} {user?.apellidos}
          </Text>
          <Text style={styles.userEmail}>{user?.correo}</Text>
          <Text style={styles.userInfo}>Usuario: {user?.usuario}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>馃帀 隆Login Exitoso!</Text>
        
        <View style={styles.successContainer}>
          <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
          <Text style={styles.successTitle}>Sistema Funcionando Correctamente</Text>
          <Text style={styles.successText}>
            Has completado exitosamente el proceso de autenticaci贸n.
          </Text>
        </View>

        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="calendar" size={40} color="#4CAF50" />
            <Text style={styles.menuItemText}>Citas</Text>
            <Text style={styles.menuItemSubText}>Pr贸ximamente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="people" size={40} color="#FF9800" />
            <Text style={styles.menuItemText}>Pacientes</Text>
            <Text style={styles.menuItemSubText}>Pr贸ximamente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="document-text" size={40} color="#9C27B0" />
            <Text style={styles.menuItemText}>Reportes</Text>
            <Text style={styles.menuItemSubText}>Pr贸ximamente</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings" size={40} color="#607D8B" />
            <Text style={styles.menuItemText}>Configuraci贸n</Text>
            <Text style={styles.menuItemSubText}>Pr贸ximamente</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Informaci贸n del Sistema</Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>鉁?Componentes Funcionando:</Text>
            <Text style={styles.infoText}>鈥?Autenticaci贸n de usuarios</Text>
            <Text style={styles.infoText}>鈥?Reseteo de contrase帽as</Text>
            <Text style={styles.infoText}>鈥?Sistema de tokens</Text>
            <Text style={styles.infoText}>鈥?Env铆o de emails</Text>
            <Text style={styles.infoText}>鈥?Navegaci贸n entre pantallas</Text>
          </View>

          <View style={styles.testInfo}>
            <Text style={styles.testTitle}>馃И Datos de Testing:</Text>
            <Text style={styles.testText}>ID: {user?.id}</Text>
            <Text style={styles.testText}>Usuario: {user?.usuario}</Text>
            <Text style={styles.testText}>Email: {user?.correo}</Text>
            <Text style={styles.testText}>Nombre: {user?.nombres} {user?.apellidos}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color="#fff" />
        <Text style={styles.logoutButtonText}>Cerrar Sesi贸n</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#E3F2FD',
    marginTop: 5,
  },
  userInfo: {
    fontSize: 12,
    color: '#BBDEFB',
    marginTop: 3,
    fontStyle: 'italic',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  successContainer: {
    backgroundColor: '#e8f5e8',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  successTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 10,
    textAlign: 'center',
  },
  successText: {
    fontSize: 14,
    color: '#2e7d32',
    marginTop: 5,
    textAlign: 'center',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '47%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  menuItemSubText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    fontStyle: 'italic',
  },
  statsContainer: {
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#2e7d32',
    marginBottom: 5,
  },
  testInfo: {
    backgroundColor: '#f3e5f5',
    borderRadius: 10,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  testTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7B1FA2',
    marginBottom: 10,
  },
  testText: {
    fontSize: 14,
    color: '#7B1FA2',
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomeScreen;