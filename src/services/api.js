const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Busca todas as categorias de refeições
 * @returns {Promise<Array>} Lista de categorias
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};

/**
 * Busca refeições por nome
 * @param {string} query - Termo de busca
 * @returns {Promise<Array>} Lista de refeições
 */
export const fetchMealsByName = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Erro ao buscar refeições por nome:', error);
    return [];
  }
};

/**
 * Busca refeições por categoria
 * @param {string} category - Nome da categoria
 * @returns {Promise<Array>} Lista de refeições
 */
export const fetchMealsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error(`Erro ao buscar refeições da categoria "${category}":`, error);
    return [];
  }
};

/**
 * Busca detalhes de uma refeição por ID
 * @param {string} id - ID da refeição
 * @returns {Promise<Object|null>} Detalhes da receita
 */
export const fetchRecipeDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error('Erro ao buscar detalhes da receita:', error);
    return null;
  }
};
