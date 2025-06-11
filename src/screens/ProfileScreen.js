import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('Jade Sawandra');
  const [email, setEmail] = useState('jade@gmail.com');

  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleSave = () => {
    setName(editedName);
    setEmail(editedEmail);
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.cardWrapper}>
        <View style={styles.profileCard}>
          <Image source={require('../../assets/imgs/user.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>

        {/* Card Editável com Favoritos + Formulário */}
        <View style={styles.editBox}>
          <View style={styles.favBox}>
            <Ionicons name="heart-outline" size={18} color="#d55a92" />
            <Text style={styles.favText}>Favoritos</Text>
          </View>

          <Text style={styles.label}>Edite seus dados:</Text>

          <Text style={styles.inputLabel}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome..."
            value={editedName}
            onChangeText={setEditedName}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email..."
            keyboardType="email-address"
            value={editedEmail}
            onChangeText={setEditedEmail}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>✔ Salvar</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Sair com Ícone Acima */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Ionicons name="log-out-outline" size={28} color="#B81D4E" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8f1',
  },
  cardWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 16,
    padding: 15,
    justifyContent: 'flex-start',
    marginBottom: 60,
  },
  profileCard: {
    backgroundColor: '#F6DEEA',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D94F6D',
  },
  profileEmail: {
    fontSize: 14,
    color: '#a84d74',
  },
  editBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 30,
  },
  favBox: {
    backgroundColor: '#F6DEEA',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  favText: {
    fontSize: 18,
    color: '#a84d74',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    color: '#D94F6D',
    fontSize: 18,
    marginBottom: 10,
  },
  inputLabel: {
    color: '#D94F6D',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F6DEEA',
    padding: 10,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#B81D4E',
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
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    color: '#d55a92',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4,
  },
});
