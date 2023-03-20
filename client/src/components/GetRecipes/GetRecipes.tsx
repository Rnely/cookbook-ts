import axios from 'axios';
import { setRecipes } from '../../redux/slices/recipeSlice';
import { useDispatch } from 'react-redux';

const GetRecipes = async () => {
  const dispatch = useDispatch();
  const response = await axios.get('http://localhost:5000/cookbook/recipes');
  dispatch(setRecipes(response.data));
};
export default GetRecipes;
