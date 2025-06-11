import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import useRecipes from '../hooks/useRecipes';

export default function HomeScreen({ navigation }) {
  const { recipes, loading, categoriesApi, chefs } = useRecipes();

  const categoryImages = {
    Doces: require('../../assets/imgs/Doces.png'),
    Salgados: require('../../assets/imgs/salgados.png'),
    Bebidas: require('../../assets/imgs/bebidas.png'),
    Massas: require('../../assets/imgs/massas.png'),
    Carnes: require('../../assets/imgs/carnes.png'),
  };

  const chefImages = [
    require('../../assets/imgs/chef1.png'),
    require('../../assets/imgs/chef2.png'),
    require('../../assets/imgs/chef3.png'),
  ];

  const chefNames = ['Maria Braga', 'Ana Maria', 'Rosa Silva'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFEDED' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Receita do Dia</Text>
          <RecipeCard
            title="Tempurá"
            description="Crocante, fácil e deliciosa!"
            rating="4.9"
            author="Ana Maria"
          />
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Explore as Categorias</Text>
          <View style={styles.categoriesRow}>
            {categoriesApi.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryButton}
                onPress={() =>
                  navigation.navigate('Categorias', {
                    category: item.apiCategory,
                  })
                }
              >
                <View style={styles.categoryCircle}>
                  <Image
                    source={categoryImages[item.label]}
                    style={styles.categoryImage}
                  />
                </View>
                <Text style={styles.categoryText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Receitas em Destaque</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#e91e63" />
          ) : (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                title={recipe.strMeal}
                description={recipe.description}
                rating={recipe.rating}
                author={recipe.chef}
                onPress={() =>
                  navigation.navigate('Detalhes', {
                    recipe,
                    rating: recipe.rating,
                  })
                }
                image={recipe.strMealThumb}
              />
            ))
          )}
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Conheça os Chefes</Text>
          <View style={styles.chefsRow}>
            {chefNames.map((name, index) => (
              <TouchableOpacity
                key={index}
                style={styles.chefContainer}
                onPress={() =>
                  navigation.navigate('ChefPerfil', {
                    chef: {
                      name,
                      img: chefImages[index],
                    },
                  })
                }
              >
                <Image source={chefImages[index]} style={styles.chefImage} />
                <Text style={styles.chefName}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEDED',
    // padding: 10,
  },
  sectionCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e17897',
    marginBottom: 15,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    alignItems: 'center',
  },
  categoryCircle: {
    backgroundColor: '#fce7ef',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  categoryImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  categoryText: {
    color: '#D94F6D',
    fontWeight: '800',
    fontSize: 12,
  },
  chefsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chefContainer: {
    alignItems: 'center',
  },
  chefImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  chefName: {
    color: '#a3a3a3',
    fontSize: 12,
  },
});
