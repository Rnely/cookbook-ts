import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

interface Recipe {
  _id: string;
  title: string;
  time: number;
  method: string;
}

const RecipeDetails: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [listIng, setListIng] = useState([]);

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${id}`);
    setRecipes([response.data]);
    setListIng(response.data.listIngredients);
  };

  const handleClick = async () => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${id}`);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details">
      {recipes.map((recipe) => {
        return (
          <article key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>Takes {recipe.time} minutes to cook</p>
            <p className="ing">{listIng.join(', ')}</p>
            <div>{recipe.method}</div>
            <button onClick={handleClick}>Delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default RecipeDetails;
