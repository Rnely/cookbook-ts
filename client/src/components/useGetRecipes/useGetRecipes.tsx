import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTotalPages } from '../../redux/slices/paginationSlice';
import { setRecipes } from '../../redux/slices/recipeSlice';

interface GetRecipesParams {
  page: number;
  pageSize: number;
  filterRating: number;
  recipeDiet: string;
  query: string;
}

export const useGetRecipes = (params: GetRecipesParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    findRecipes();
  }, [
    params.page,
    params.pageSize,
    params.filterRating,
    params.recipeDiet,
    params.query,
  ]);

  const findRecipes = async () => {
    try {
      const { page, pageSize, filterRating, recipeDiet, query } = params;
      const response = await axios.get(
        'http://localhost:5000/cookbook/recipes',
        {
          params: {
            page,
            pageSize,
            filterRating,
            recipeDiet,
            query,
          },
        },
      );

      const { recipes, totalPages } = response.data;
      const parsedRecipes = recipes;

      dispatch(setRecipes(parsedRecipes));
      dispatch(setTotalPages(totalPages));
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };
};

export default useGetRecipes;
