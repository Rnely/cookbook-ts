import RecipeComments from '../components/RecipeComments/RecipeComments';
import GetRecipeDetails from '../components/RecipeDetails';

const RecipeDetails = () => {
  return (
    <div className="center">
      <GetRecipeDetails />
      <RecipeComments />
    </div>
  );
};

export default RecipeDetails;
