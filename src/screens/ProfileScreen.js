import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de voltar e sair

export default function ProfileScreen({ navigation }) {

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color="#d55a92" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      {/* Card do Perfil */}
      <View style={styles.profileCard}>
        {/* Imagem genérica (ícone de perfil) */}
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.profileName}>Jade Sawandra</Text>
        <Text style={styles.profileEmail}>jade@gmail.com</Text>
      </View>

      {/* Favoritos */}
      <View style={styles.favBox}>
        <Ionicons name="heart-outline" size={18} color="#d55a92" />
        <Text style={styles.favText}>Favoritos</Text>
      </View>

      {/* Editar dados */}
      <View style={styles.editBox}>
        <Text style={styles.label}>Edite seus dados:</Text>

        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome..." />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} placeholder="Email..." keyboardType="email-address" />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>✔ Salvar</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Sair */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#d55a92" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8f1',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backText: {
    marginLeft: 5,
    color: '#d55a92',
    fontSize: 16,
  },
  profileCard: {
    backgroundColor: '#fdd6e4',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#f9bcd0',
    borderRadius: 30,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#822b56',
  },
  profileEmail: {
    fontSize: 14,
    color: '#a84d74',
  },
  favBox: {
    backgroundColor: '#fdd6e4',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  favText: {
    fontSize: 16,
    color: '#a84d74',
  },
  editBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#822b56',
    marginBottom: 10,
  },
  inputLabel: {
    color: '#822b56',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fdd6e4',
    padding: 10,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#a84d74',
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#d55a92',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
