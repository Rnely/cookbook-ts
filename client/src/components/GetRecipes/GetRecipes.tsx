import axios from 'axios';
import { setRecipes } from '../../redux/slices/recipeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const GetRecipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    findRecipes();
  }, []);
  const findRecipes = async () => {
    const response = await axios.get('http://localhost:5000/cookbook/recipes');
    dispatch(setRecipes(response.data));
  };
};
export default GetRecipes;
