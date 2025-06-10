import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function AuthButtons({ onLogin, onRegister }) {
  return (
    <View style={styles.authContainer}>
      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={onRegister}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#F48FB1',
    padding: 12,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#F06292',
    padding: 12,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});