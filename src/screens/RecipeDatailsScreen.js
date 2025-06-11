import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRecipeDetails } from '../hooks/useRecipeDetails';
import BackButton from '../components/BackButton';

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
      <BackButton />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {detailedRecipe.strMealThumb && (
          <Image source={{ uri: detailedRecipe.strMealThumb }} style={styles.image} />
        )}

        <View style={styles.content}>
          <Text style={styles.category}>{detailedRecipe.strCategory || 'Sem categoria'}</Text>
          <Text style={styles.title}>{detailedRecipe.strMeal || 'Sem título'}</Text>

          <View style={styles.cardInfo}>
            <View style={styles.statItem}>
              <AntDesign name="star" size={16} color="#FFD700" />
              <Text style={styles.statsText}>{rating || '--'} por avaliação</Text>
            </View>

            <View style={styles.statItem}>
              <Feather name="clock" size={16} color="#a3a3a3" />
              <Text style={styles.statsText}>Tempo de Preparo: 30 min (média)</Text>
            </View>

            <View style={styles.statItem}>
              <Feather name="users" size={16} color="#a3a3a3" />
              <Text style={styles.statsText}>Porção: 4 pessoas</Text>
            </View>

            <View style={styles.statItem}>
              <Feather name="book" size={16} color="#a3a3a3" />
              <Text style={styles.statsText}>Dificuldade: Média</Text>
            </View>
          </View>

          {/* Ingredientes */}
          <View style={styles.sectionWhite}>
            <View style={styles.sectionTitleRow}>
           <MaterialCommunityIcons name="clipboard-check-outline" size={20} color="#B81D4E" style={{ marginRight: 6 }} />
              <Text style={styles.sectionTitlePink}>Ingredientes</Text>
            </View>
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <Text key={index} style={styles.itemPink}>• {item}</Text>
              ))
            ) : (
              <Text style={styles.itemPink}>Ingredientes não disponíveis.</Text>
            )}
          </View>

          {/* Modo de preparo */}
          <View style={styles.sectionWhite}>
            <View style={styles.sectionTitleRow}>
             <MaterialCommunityIcons name="pot" size={20} color="#B81D4E" style={{ marginRight: 6 }} />
              <Text style={styles.sectionTitlePink}>Modo de Preparo</Text>
            </View>
            {detailedRecipe.strInstructions ? (
              detailedRecipe.strInstructions
                .split('\n')
                .filter((p) => p.trim() !== '')
                .map((p, index) => (
                  <Text key={index} style={styles.itemPink}>{p.trim()}</Text>
                ))
            ) : (
              <Text style={styles.itemPink}>Modo de preparo não disponível.</Text>
            )}
          </View>

          {/* Avaliação */}
          <View style={styles.ratingRow}>
            <Text style={styles.sectionTitleLarge}>Deixe sua Avaliação</Text>
            <TouchableOpacity style={styles.submitButtonInline}>
              <Feather name="send" size={18} color="#fff" style={{ marginRight: 4 }} />
              <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <AntDesign key={i} name="star" size={24} color={i === 1 ? '#FFD700' : '#ccc'} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdecef',
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
  cardInfo: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statsText: {
    fontSize: 12,
    color: '#B81D4E',
    marginLeft: 6,
  },
  sectionWhite: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 12,
    marginTop: 15,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitlePink: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#B81D4E',
  },
  sectionTitleLarge: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#B81D4E',
  },
  itemPink: {
    fontSize: 14,
    color: '#B81D4E',
    marginBottom: 4,
  },
  ratingRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  submitButtonInline: {
    backgroundColor: '#B81D4E',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
