import { useState, useEffect } from 'react';
import { fetchMealsByCategory } from '../services/api';

const categoriesApi = [
    { label: 'Doces', apiCategory: 'Dessert' },
    { label: 'Salgados', apiCategory: 'Miscellaneous' },
    { label: 'Bebidas', apiCategory: 'Drink' },
    { label: 'Massas', apiCategory: 'Pasta' },
    { label: 'Carnes', apiCategory: 'Beef' },
];

const descriptionsByCategory = {
    Doces: "Sobremesa doce e deliciosa",
    Salgados: "Sabor perfeito para petiscar",
    Bebidas: "Refresque-se com essa bebida",
    Massas: "Clássico da culinária italiana",
    Carnes: "Sabor robusto e suculento",
};

const chefs = ['Maria Braga', 'Ana Maria', 'Rosa Silva'];

function getRandomRating() {
    return (Math.random() * 2 + 3).toFixed(1);
}

function getRandomChef() {
    return chefs[Math.floor(Math.random() * chefs.length)];
}

export default function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMultipleCategories();
    }, []);

    async function fetchMultipleCategories() {
        try {
            const results = await Promise.all(
                categoriesApi.map(cat => fetchMealsByCategory(cat.apiCategory))
            );

            let combined = [];
            results.forEach((meals, index) => {
                if (meals && meals.length > 0) {
                    combined.push({
                        ...meals[0],
                        categoryLabel: categoriesApi[index].label,
                        rating: getRandomRating(),
                    });
                }
            });

            if (combined.length < 5) {
                for (let i = 0; i < results.length; i++) {
                    const meals = results[i] || [];
                    for (let j = 1; j < meals.length && combined.length < 5; j++) {
                        combined.push({
                            ...meals[j],
                            categoryLabel: categoriesApi[i].label,
                        });
                    }
                }
            }

            const recipesWithExtras = combined.slice(0, 5).map(recipe => ({
                ...recipe,
                description: descriptionsByCategory[recipe.categoryLabel] || "Deliciosa receita caseira",
                rating: getRandomRating(),
                chef: getRandomChef(),
            }));

            setRecipes(recipesWithExtras);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return { recipes, loading, categoriesApi, chefs };
}
