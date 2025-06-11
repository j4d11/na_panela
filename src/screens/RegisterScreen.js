// Registro.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function RegistroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/imgs/Captura de tela 2025-06-10 224332.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>
          Junte-se à nossa comunidade e descubra novas receitas!
        </Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={20} color="#E4899D" style={styles.icon} />
          <TextInput
            placeholder="Insira seu Nome"
            placeholderTextColor="#E4899D"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#E4899D" style={styles.icon} />
          <TextInput
            placeholder="Insira seu Email"
            placeholderTextColor="#E4899D"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#e17897" style={styles.icon} />
          <TextInput
            placeholder="Crie uma senha"
            placeholderTextColor="#e17897"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#e17897" style={styles.icon} />
          <TextInput
            placeholder="Confirme sua senha"
            placeholderTextColor="#e17897"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.ou}>ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Home')}>
          <AntDesign name="google" size={20} color="#fff" />
          <Text style={styles.googleButtonText}>Continuar com Google</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já tem uma conta?
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}> Faça login aqui</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    color: '#E4899D',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#D94F6D',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4899D',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  button: {
    backgroundColor: '#E4899D',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  ou: {
    marginHorizontal: 10,
    color: '#a3a3a3',
  },
  googleButton: {
    backgroundColor: '#E4899D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
  },
  googleButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    color: '#a3a3a3',
  },
  link: {
    color: '#E4899D',
    fontWeight: 'bold',
  },
});
