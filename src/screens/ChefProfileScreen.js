import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useChefProfile from '../hooks/useChefProfile';  // import do hook

export default function ChefProfile({ navigation }) {
    const { chef } = useChefProfile();  // usa o hook aqui

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="#e17897" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Voltar</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.profileSection}>
                    <View style={styles.chefImage} />
                    <Text style={styles.chefName}>{chef.name}</Text>
                    <Text style={styles.chefBio}>{chef.bio}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Minhas Receitas</Text>
                    {chef.recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            rating={recipe.rating}
                            author={chef.name}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  // seu estilo continua igual
  container: {
      flex: 1,
      backgroundColor: '#ffe6ec',
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
      marginLeft: 10,
      color: '#e17897',
      fontSize: 16,
  },
  scrollContainer: {
      paddingHorizontal: 15,
  },
  profileSection: {
      alignItems: 'center',
      paddingVertical: 25,
  },
  chefImage: {
      width: 100,
      height: 100,
      backgroundColor: '#f9cfd8',
      borderRadius: 50,
      marginBottom: 15,
  },
  chefName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#e17897',
      marginBottom: 5,
  },
  chefBio: {
      color: '#a3a3a3',
      fontSize: 14,
  },
  section: {
      marginTop: 20,
      marginBottom: 30,
  },
  sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#e17897',
      marginBottom: 15,
  },
});
