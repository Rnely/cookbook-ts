import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Text from '../TextComponent/TextComponent';
import GetRecipes from '../useGetRecipes';
import './style.css';
import { ArrowForwardButton } from '../StyledButtons';
import { CardBox, StyledCard, StyledCardContent, TextBox } from './style';
import { CardActions } from '@mui/material';

interface Recipe {
  _id: string;
  user: string;
  userId: string;
  title: string;
  time: number;
  image: string;
}

const UserRecipes = () => {
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );
  const { id } = useParams();
  const nav = useNavigate();

  //if (recipe) {
  //  GetRecipes();
  //}

  const userRecipes = recipe.filter((recipe) => recipe.userId === id);

  return (
    <CardBox>
      {userRecipes.map((recipe) => {
        return (
          <StyledCard key={recipe._id}>
            <img
              src={`http://localhost:5000/api/images/${recipe.image}`}
              width={'100%'}
              height={245}
            />
            <StyledCardContent>
              <Text text={recipe.title} variant="h5" fontWeight={550} />
              <Text text={recipe.user} variant="body1" />
              <Text
                text={recipe.time + 'minutes to cook'}
                color="text.secondary"
                py={1}
              />
            </StyledCardContent>
            <CardActions onClick={() => nav(`/recipe/${recipe._id}`)}>
              <ArrowForwardButton text={'Cook This'} />
            </CardActions>
          </StyledCard>
        );
      })}
    </CardBox>
  );
};
export default UserRecipes;
