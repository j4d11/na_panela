import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.profile}>
        <Image source={require('../../assets/imgs/user.png')} style={styles.profileImage} />
        <View style={styles.divider} />
      </View>

      <View style={styles.menu}>
        <DrawerItem
          label="Início"
          icon={({ size }) => <Icon name="home" color="#d46b86" size={28} />}
          labelStyle={styles.label}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Sair"
          icon={({ size }) => <Icon name="logout" color="#d46b86" size={28} />}
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
    backgroundColor: '#FFEDED', 
  },
  profile: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#d46b86',
    marginTop: 10,
    borderRadius: 1,
  },
  menu: {
    backgroundColor: '#ffffff', 
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 16,
  },
  label: {
    color: '#d46b86',
    fontWeight: 'bold',
    fontSize: 18, 
  },
});
