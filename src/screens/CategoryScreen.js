import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import useMealsByCategory from '../hooks/useMealsByCategory';

export default function CategoriasScreen({ navigation }) {
  const route = useRoute();
  const { category } = route.params;

  const { meals, loading } = useMealsByCategory(category);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeals = meals.filter(meal =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffe6ec' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>
        <Header />

        <Text style={styles.title}>{category === 'Dessert' ? 'Doces' :
                                      category === 'Beef' ? 'Carnes' :
                                      category === 'Miscellaneous' ? 'Salgados' :
                                      category === 'Drink' ? 'Bebidas' :
                                      category === 'Pasta' ? 'Massas' :
                                      category}</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar receita..."
          placeholderTextColor="#aaa"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#e91e63" />
        ) : (
          filteredMeals.map(meal => (
            <RecipeCard
              key={meal.idMeal}
              title={meal.strMeal}
              description="Receita deliciosa e fácil de preparar!"
              rating={meal.rating}
              author={meal.chef}
              image={meal.strMealThumb}
              onPress={() => navigation.navigate('Detalhes', { recipe: meal })}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffe6ec',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e17897',
    marginBottom: 10,
    marginTop: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderColor: '#e17897',
    borderWidth: 1,
  },
});
