import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import GetRecipes from '../GetRecipes';
import { useState } from 'react';
import './style.css';

interface Recipe {
  _id: string;
  user: string;
  title: string;
  time: number;
  method: string;
}

const UserRecipes = () => {
  const userName = useSelector((state: RootState) => state.currentUser.user);
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );

  if (recipe) {
    GetRecipes();
  }

  const userRecipes = recipe.filter((recipe) => recipe.user === userName);

  return (
    <div className="recipe-list">
      {userRecipes.map((recipe) => {
        return (
          <div className="recipe-preview" key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.user}</p>
            <article>{recipe.time} minutes to cook</article>
            <footer>{recipe.method}</footer>
            <Link to={`/recipe/${recipe._id}`}>
              <button>Cook this</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default UserRecipes;
