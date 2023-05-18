import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import GetRecipes from '../useGetRecipes';
import './style.css';
import './style';
import Text from '../TextComponent/TextComponent';
import {
  CardBox,
  StyledCard,
  StyledCardContent,
  TextBox,
  StyledCardActions,
} from './style';
import { RecipeListButton } from '../StyledButtons';
import { Rating } from '@mui/material';
import LoadingComponent from '../LoadingComponent';

interface Recipe {
  _id: string;
  user: string;
  title: string;
  time: number;
  method: string;
  diet: string;
  avgRating: number;
  image: string;
}

const RecipeList: React.FC = () => {
  const nav = useNavigate();
  const recipes: Recipe[] | null = useSelector(
    (state: RootState) => state.recipes.recipes,
  );
  const query = useSelector((state: RootState) => state.recipeFilter.query);
  const recipeDiet = useSelector((state: RootState) => state.recipeDiet.value);
  const filterRating = useSelector(
    (state: RootState) => state.filterRating.value,
  );

  if (recipes) {
    GetRecipes();
  }

  return (
    <>
      {recipes.length !== 0 ? (
        <CardBox>
          {recipes
            .filter((recipes) => recipes.avgRating >= filterRating)
            .filter((recipes) => {
              if (recipeDiet === 'All') {
                return recipes;
              } else if (recipes.diet.includes(recipeDiet)) {
                return recipes;
              }
            })
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
                  <StyledCardActions
                    onClick={() => nav(`/recipe/${recipe._id}`)}
                  >
                    <RecipeListButton text={'Cook This'} />
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

export default RecipeList;
