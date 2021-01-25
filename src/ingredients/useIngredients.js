import { useState, useEffect } from 'react';

export const useIngredients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadIngredients = async () => {
      const response = await fetch('/ingredients');
      const ingredientsResponse = await response.json();
      setIngredients(ingredientsResponse);
      setIsLoading(false);
    }

    loadIngredients();
  }, []);

  return { isLoading, ingredients, setIngredients };
}