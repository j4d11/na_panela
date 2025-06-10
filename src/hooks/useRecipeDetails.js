import { useEffect, useState } from 'react';
import { fetchRecipeDetails } from '../services/api';

export function useRecipeDetails(idMeal) {
  const [detailedRecipe, setDetailedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchRecipeDetails(idMeal)
      .then(data => setDetailedRecipe(data))
      .catch(error => {
        console.error('Erro ao buscar detalhes da receita:', error);
        setDetailedRecipe(null);
      })
      .finally(() => setLoading(false));
  }, [idMeal]);

  return { detailedRecipe, loading };
}
