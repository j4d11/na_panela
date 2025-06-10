import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profile}>
        <Icon name="account-circle" size={80} color="#d46b86" />
      </View>

      <View style={styles.menu}>
        <DrawerItem
          label="Início"
          icon={({ color, size }) => <Icon name="home" color="#d46b86" size={size} />}
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Sair"
          icon={({ color, size }) => <Icon name="logout" color="#d46b86" size={size} />}
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6ec', // rosa claro
  },
  profile: {
    alignItems: 'center',
    marginVertical: 30,
  },
  menu: {
    backgroundColor: '#fff0f5',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  label: {
    color: '#d46b86',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
