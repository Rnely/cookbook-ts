import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import GetRecipes from '../useGetRecipes';
import './style.css';
import './style';
import Text from '../TextComponent/TextComponent';
import { CardBox, StyledCard, StyledCardContent, TextBox } from './style';
import { RecipeListButton } from '../StyledButtons';
import { StyledCardActions } from '../RecipeDetails/style';

interface Recipe {
  _id: string;
  user: string;
  title: string;
  time: number;
  method: string;
}

const RecipeList: React.FC = () => {
  const nav = useNavigate();
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );
  const query = useSelector((state: RootState) => state.recipeFilter.query);

  if (recipe) {
    GetRecipes();
  }

  return (
    <>
      <CardBox>
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
              <StyledCard key={recipe._id}>
                <StyledCardContent>
                  <Text text={recipe.title} variant="h5" fontWeight={550} />
                  <Text text={recipe.user} variant="body1" />
                  <Text
                    text={recipe.time + 'minutes to cook'}
                    color="text.secondary"
                    py={1}
                  />
                  <TextBox>
                    <Text text={recipe.method} />
                  </TextBox>
                </StyledCardContent>
                <StyledCardActions onClick={() => nav(`/recipe/${recipe._id}`)}>
                  <RecipeListButton />
                </StyledCardActions>
              </StyledCard>
            );
          })}
      </CardBox>
    </>
  );
};

export default RecipeList;
