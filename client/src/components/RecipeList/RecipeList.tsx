import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RootState } from '../../redux/store';
import './style.css';

interface Recipe {
  _id: string;
  title: string;
  time: number;
  method: string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const query = useSelector((state: RootState) => state.recipeFilter.query);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get('http://localhost:3000/recipes');
    setRecipes(response.data);
  };
  return (
    <div className="recipe-list">
      {recipes
        .filter((recipes) => {
          if (query === '') {
            return recipes;
          } else if (
            recipes.title.toLowerCase().includes(query.toLowerCase())
          ) {
            return recipes;
          }
        })
        .map((recipe) => {
          return (
            <div className="recipe-preview" key={recipe._id}>
              <h2>{recipe.title}</h2>
              <article>{recipe.time} minutes to cook</article>
              <footer>{recipe.method}</footer>
              <Link to={`/recipes/${recipe._id}`}>
                <button>Cook this</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default RecipeList;
