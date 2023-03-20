import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './style.css';
import GetRecipes from '../GetRecipes';

interface Recipe {
  _id: string;
  user: string;
  title: string;
  time: number;
  method: string;
}

const RecipeList: React.FC = () => {
  const query = useSelector((state: RootState) => state.recipeFilter.query);
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );

  if (recipe) {
    GetRecipes();
  }

  return (
    <div className="recipe-list">
      {recipe
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

export default RecipeList;
