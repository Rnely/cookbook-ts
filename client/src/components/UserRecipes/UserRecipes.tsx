import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import Text from '../TextComponent';
import './style.css';
import { ArrowForwardButton } from '../StyledButtons';
import { CardBox, StyledCard, StyledCardContent } from './style';
import { CardActions, Rating } from '@mui/material';
import useGetRecipes from '../useGetRecipes';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { StyledCardActions } from '../RecipeList/style';

interface Recipe {
  _id: string;
  user: string;
  userId: string;
  title: string;
  time: number;
  method: string;
  diet: string;
  avgRating: number;
  image: string;
}

const UserRecipes = () => {
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );

  const { id } = useParams();
  const nav = useNavigate();

  useGetRecipes();

  const userRecipes = recipe.filter((recipe) => recipe.userId === id);

  return (
    <>
      {userRecipes ? (
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
                  <Rating
                    value={recipe.avgRating}
                    precision={0.5}
                    disabled={true}
                  />
                  <Text text={recipe.user} variant="body1" />
                  <Text
                    text={recipe.time + ' minutes to cook'}
                    color="text.secondary"
                    py={1}
                  />
                  <Text text={recipe.diet} />
                </StyledCardContent>
                <StyledCardActions onClick={() => nav(`/recipe/${recipe._id}`)}>
                  <ArrowForwardButton text={'Cook This'} />
                </StyledCardActions>
              </StyledCard>
            );
          })}
        </CardBox>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};
export default UserRecipes;
