import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Text from '../TextComponent/TextComponent';
import GetRecipes from '../useGetRecipes';
import './style.css';
import { RecipeListButton } from '../StyledButtons';
import { CardBox, StyledCard, StyledCardContent, TextBox } from './style';
import { CardActions } from '@mui/material';

interface Recipe {
  _id: string;
  user: string;
  userId: string;
  title: string;
  time: number;
  method: string;
}

const UserRecipes = () => {
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );
  const { id } = useParams();
  const nav = useNavigate();

  if (recipe) {
    GetRecipes();
  }

  const userRecipes = recipe.filter((recipe) => recipe.userId === id);

  return (
    <CardBox>
      {userRecipes.map((recipe) => {
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
            <CardActions onClick={() => nav(`/recipe/${recipe._id}`)}>
              <RecipeListButton />
            </CardActions>
          </StyledCard>
        );
      })}
    </CardBox>
  );
};
export default UserRecipes;
