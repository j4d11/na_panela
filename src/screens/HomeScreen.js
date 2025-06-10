import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import useRecipes from '../hooks/useRecipes';

export default function HomeScreen({ navigation }) {
    const { recipes, loading, categoriesApi, chefs } = useRecipes();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffe6ec' }}>
            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                <Header />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Receita do Dia</Text>
                    <RecipeCard
                        title="Tempurá"
                        description="Crocante, fácil e deliciosa!"
                        rating="4.9"
                        author="Ana Maria"
                        onPress={() => navigation.navigate('Detalhes')}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Explore as Categorias</Text>
                    <View style={styles.categoriesRow}>
                        {categoriesApi.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.categoryButton}
                                onPress={() => navigation.navigate('Categorias', { category: item.apiCategory })}
                            >
                                <Entypo name="bowl" size={24} color="#e17897" />
                                <Text style={styles.categoryText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Receitas em Destaque</Text>

                    {loading ? (
                        <ActivityIndicator size="large" color="#e91e63" />
                    ) : (
                        recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.idMeal}
                                title={recipe.strMeal}
                                description={recipe.description}
                                rating={recipe.rating}
                                author={recipe.chef}
                                onPress={() => navigation.navigate('Detalhes', { recipe, rating: recipe.rating })}
                                image={recipe.strMealThumb}
                            />
                        ))
                    )}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Conheça os Chefes</Text>
                    <View style={styles.chefsRow}>
                        {chefs.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.chefContainer}
                                onPress={() => navigation.navigate('ChefPerfil')}
                            >
                                <View style={styles.chefImage} />
                                <Text style={styles.chefName}>{item}</Text>
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
        backgroundColor: '#ffe6ec',
        padding: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e17897',
        marginBottom: 10,
    },
    categoriesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryButton: {
        alignItems: 'center',
    },
    categoryText: {
        marginTop: 5,
        color: '#a3a3a3',
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
        backgroundColor: '#f9cfd8',
        borderRadius: 30,
        marginBottom: 5,
    },
    chefName: {
        color: '#a3a3a3',
        fontSize: 12,
    },
});
