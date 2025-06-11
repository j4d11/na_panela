import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useChefProfile from '../hooks/useChefProfile';
import RecipeCard from '../components/RecipeCard';
import BackButton from '../components/BackButton';

export default function ChefProfile({ navigation, route }) {
    const { chef: chefFromHook } = useChefProfile();
    const { chef: chefFromParams } = route.params || {};

    const chef = chefFromParams || chefFromHook;

    // Receitas fixas para o perfil do chef
    const fixedRecipes = [
        {
            id: '1',
            title: 'Bolo de Chocolate',
            description: 'Fofinho, molhadinho e delicioso!',
            rating: '4.8',
        },
        {
            id: '2',
            title: 'Feijoada Tradicional',
            description: 'Receita clássica com um toque especial.',
            rating: '4.9',
        },
        {
            id: '3',
            title: 'Torta de Limão',
            description: 'A sobremesa perfeita para dias quentes.',
            rating: '4.7',
        },
    ];

    return (
        <View style={styles.container}>
               <BackButton />

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.profileCard}>
                    <View style={styles.profileSection}>
                        <Image source={chef.img} style={styles.chefImage} />
                        <View style={styles.chefInfo}>
                            <Text style={styles.chefName}>{chef.name}</Text>
                            <Text style={styles.chefBio}>{chef.bio || 'Apaixonado por culinária desde criança\nMembro desde 2024'}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.recipeCardContainer}>
                    <Text style={styles.sectionTitle}>Minhas Receitas</Text>
                    <View style={styles.cardWrapper}>
                        {fixedRecipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                title={recipe.title}
                                description={recipe.description}
                                rating={recipe.rating}
                                author={chef.name}
                            />
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
        backgroundColor: '#FFEDED',
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
    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginTop: 20,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chefImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f9cfd8',
        marginRight: 15,
    },
    chefInfo: {
        flex: 1,
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
    recipeCardContainer: {
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e17897',
        marginBottom: 15,
    },
    cardWrapper: {
        gap: 10,
    },
});
