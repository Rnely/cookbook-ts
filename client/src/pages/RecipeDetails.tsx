import RecipeComments from '../components/RecipeComponent/RecipeComments';
import GetRecipeDetails from '../components/RecipeComponent/RecipeDetails';

const RecipeDetails = () => {
  return (
    <div className="center">
      <GetRecipeDetails />
      <RecipeComments />
    </div>
  );
};

export default RecipeDetails;
