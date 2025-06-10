import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRecipeDetails } from '../hooks/useRecipeDetails'; // ajuste o caminho conforme necessário

export default function RecipeDetails({ route, navigation }) {
  const { recipe, rating } = route.params;
  const { detailedRecipe, loading } = useRecipeDetails(recipe.idMeal);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Carregando detalhes...</Text>
      </View>
    );
  }

  if (!detailedRecipe) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>Detalhes da receita não encontrados.</Text>
      </View>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = detailedRecipe[`strIngredient${i}`];
    const measure = detailedRecipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${measure ? measure.trim() : ''} ${ingredient.trim()}`.trim());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#e17897" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voltar</Text>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {detailedRecipe.strMealThumb && (
          <Image source={{ uri: detailedRecipe.strMealThumb }} style={styles.image} />
        )}

        <View style={styles.content}>
          <Text style={styles.category}>
            {detailedRecipe.strCategory || 'Sem categoria'}
          </Text>
          <Text style={styles.title}>
            {detailedRecipe.strMeal || 'Sem título'}
          </Text>

          <View style={styles.statsColumn}>
            <View style={styles.statItem}>
              <AntDesign name="star" size={16} color="#FFD700" />
              <Text style={styles.statsText}>{rating || '--'} por avaliação</Text>
            </View>

            <View style={styles.statItem}>
              <Feather name="clock" size={16} color="#a3a3a3" />
              <Text style={styles.statsText}>Tempo de Preparo: 30 min (média)</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <Feather name="users" size={16} color="#a3a3a3" />
            <Text style={styles.statsText}>Porção: 4 pessoas</Text>
          </View>

          <View style={styles.statItem}>
            <Feather name="book" size={16} color="#a3a3a3" />
            <Text style={styles.statsText}>Dificuldade: Média</Text>
          </View>

          {/* Ingredientes */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <AntDesign name="checkcircleo" size={18} color="#e17897" style={{ marginRight: 6 }} />
              <Text style={styles.sectionTitle}>Ingredientes</Text>
            </View>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <Text key={index} style={styles.item}>• {item}</Text>
              ))
            ) : (
              <Text style={styles.item}>Ingredientes não disponíveis.</Text>
            )}
          </View>

          {/* Modo de preparo */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Feather name="coffee" size={18} color="#e17897" style={{ marginRight: 6 }} />
              <Text style={styles.sectionTitle}>Modo de Preparo</Text>
            </View>
            {detailedRecipe.strInstructions ? (
              detailedRecipe.strInstructions
                .split('\n')
                .filter((p) => p.trim() !== '')
                .map((p, index) => (
                  <Text key={index} style={styles.item}>
                    {p.trim()}
                  </Text>
                ))
            ) : (
              <Text style={styles.item}>Modo de preparo não disponível.</Text>
            )}
          </View>

          {/* Avaliação */}
          <View style={styles.ratingSection}>
            <Text style={styles.sectionTitle}>⭐ Deixe sua Avaliação</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <AntDesign key={i} name="star" size={24} color={i === 1 ? '#FFD700' : '#ccc'} />
              ))}
            </View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos continuam iguais...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdecef',
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
  content: {
    paddingVertical: 10,
  },
  category: {
    backgroundColor: '#fcd6e2',
    color: '#e17897',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e17897',
    marginVertical: 10,
  },
  statsColumn: {
    marginVertical: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statsText: {
    fontSize: 12,
    color: '#a3a3a3',
    marginLeft: 6,
  },
  section: {
    backgroundColor: '#fcd6e2',
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e17897',
  },
  item: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  ratingSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#e17897',
    marginTop: 10,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 15,
  },
});
