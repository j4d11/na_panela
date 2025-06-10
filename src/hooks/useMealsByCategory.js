import { useState, useEffect } from 'react';
import { fetchMealsByCategory } from '../services/api';

export default function useMealsByCategory(category) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const chefs = ['Ana Maria', 'Carlos Silva', 'João Rocha'];

  function getRandomChef() {
    return chefs[Math.floor(Math.random() * chefs.length)];
  }

  function getRandomRating() {
    return (Math.random() * 2 + 3).toFixed(1);
  }

  useEffect(() => {
    setLoading(true);
    fetchMealsByCategory(category)
      .then(data => {
        const mealsWithExtras = (data || []).map(meal => ({
          ...meal,
          rating: getRandomRating(),
          chef: getRandomChef(),
        }));
        setMeals(mealsWithExtras);
      })
      .catch(err => {
        console.error('Erro ao buscar refeições por categoria:', err);
        setMeals([]);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { meals, loading };
}
