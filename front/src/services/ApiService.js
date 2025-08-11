// ================================================================================
// src/services/ApiService.js - CORREGIDO PARA MANEJO DE ERRORES HTTP
// ================================================================================
import axios from 'axios';
import { API_BASE_URL } from '@env';

class ApiService {
  static async login(correo, clave) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login.php`, {
        correo,
        clave
      });
      return response.data;
    } catch (error) {
      console.log('Error en login:', error.response?.data); // Debug log
      if (error.response) {
        // El servidor respondió con un código de error (4xx, 5xx)
        const errorMessage = error.response.data?.error || error.response.data?.message || 'Error del servidor';
        throw new Error(errorMessage);
      } else if (error.request) {
        // La petición se hizo pero no se recibió respuesta
        throw new Error('No se pudo conectar con el servidor. Verifica tu conexión a internet.');
      } else {
        // Algo pasó al configurar la petición
        throw new Error('Error en la petición: ' + error.message);
      }
    }
  }

  static async requestPasswordReset(correo, nuevaClave) {
    try {
      console.log('Enviando request a:', `${API_BASE_URL}/reset_password.php`); // Debug log
      console.log('Datos enviados:', { correo, nuevaClave: '***' }); // Debug log (sin mostrar la clave)
      
      const response = await axios.post(`${API_BASE_URL}/reset_password.php`, {
        correo,
        nuevaClave
      });
      
      console.log('Respuesta exitosa:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.log('Error completo:', error); // Debug log completo
      console.log('Error response:', error.response?.data); // Debug log de la respuesta
      console.log('Error status:', error.response?.status); // Debug log del status
      
      if (error.response) {
        // El servidor respondió con un código de error (4xx, 5xx)
        const errorMessage = error.response.data?.error || 
                            error.response.data?.message || 
                            `Error del servidor (${error.response.status})`;
        throw new Error(errorMessage);
      } else if (error.request) {
        // La petición se hizo pero no se recibió respuesta
        console.log('No response received:', error.request);
        throw new Error('No se pudo conectar con el servidor. Verifica tu conexión a internet.');
      } else {
        // Algo pasó al configurar la petición
        console.log('Request setup error:', error.message);
        throw new Error('Error en la petición: ' + error.message);
      }
    }
  }

  static async verifyResetToken(token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/verify-reset-token.php?token=${token}`);
      return response.data;
    } catch (error) {
      console.log('Error en verifyResetToken:', error.response?.data); // Debug log
      if (error.response) {
        const errorMessage = error.response.data?.error || error.response.data?.message || 'Error del servidor';
        throw new Error(errorMessage);
      } else if (error.request) {
        throw new Error('No se pudo conectar con el servidor. Verifica tu conexión a internet.');
      } else {
        throw new Error('Error en la petición: ' + error.message);
      }
    }
  }
}

export default ApiService;