// Registro.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function RegistroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleRegistro = () => {
    // lógica de registro aqui
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      <View style={styles.cardBranco}>
      <Text style={styles.titulo}>Crie sua conta</Text>
      <Text style={styles.subtitulo}>Junte-se à nossa comunidade e descubra novas receitas!</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person-outline" size={20} color="#f472b6" style={styles.icon} />
          <TextInput
            placeholder="Insira seu Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#f472b6" style={styles.icon} />
          <TextInput
            placeholder="Insira seu Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#f472b6" style={styles.icon} />
          <TextInput
            placeholder="Crie uma senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#f472b6" style={styles.icon} />
          <TextInput
            placeholder="Confirme sua senha"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.botaoTexto}>Criar Conta</Text>
        </TouchableOpacity>

        <Text style={styles.ou}>ou</Text>

        <TouchableOpacity style={styles.googleBotao}>
          <AntDesign name="google" size={20} color="#fff" />
          <Text style={styles.botaoGoogleTexto}>Continuar com Google</Text>
        </TouchableOpacity>

        <Text style={styles.loginTexto}>
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
    backgroundColor: '#ffe4e6',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#be123c',
    marginBottom: 5,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#881337',
    marginBottom: 20,
  },
  cardBranco: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#f9a8d4',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 45,
  },
  botao: {
    backgroundColor: '#db2777',
    padding: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ou: {
    color: '#6b7280',
    marginVertical: 10,
  },
  googleBotao: {
    backgroundColor: '#ea4335',
    padding: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  botaoGoogleTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginTexto: {
    marginTop: 15,
    color: '#4b5563',
  },
  link: {
    color: '#be123c',
    fontWeight: 'bold',
  },
});
