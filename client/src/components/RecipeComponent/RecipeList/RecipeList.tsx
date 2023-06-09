import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useGetRecipes from '../useGetRecipes';
import './style.css';
import './style';
import Text from '../../TextComponent';
import {
  CardBox,
  StyledCard,
  StyledCardContent,
  StyledCardActions,
} from './style';
import { ArrowForwardButton } from '../../StyledButtons';
import { Rating } from '@mui/material';
import LoadingComponent from '../../LoadingComponent';

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
  const query = useSelector((state: RootState) => state.query.query);
  const recipeDiet = useSelector((state: RootState) => state.recipeDiet.value);
  const filterRating = useSelector(
    (state: RootState) => state.filterRating.value,
  );
  const filterCookTime = useSelector(
    (state: RootState) => state.filterCookTime.time,
  );
  const sortByRating = useSelector(
    (state: RootState) => state.filterSortBy.sortByRating,
  );
  const sortByCookTime = useSelector(
    (state: RootState) => state.filterSortBy.sortByCookTime,
  );

  useGetRecipes();

  return (
    <>
      {recipes ? (
        <CardBox>
          {recipes
            .filter((recipes) => recipes.avgRating >= filterRating)
            .filter((recipes) => {
              if (recipeDiet === 'Any') {
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
            .filter((recipes) => {
              if (filterCookTime === 'any') {
                return recipes;
              } else if (filterCookTime === 'long') {
                return recipes.time > 60;
              } else {
                return recipes.time <= parseInt(filterCookTime);
              }
            })
            .sort((recipeA, recipeB) => {
              if (sortByRating === 'high') {
                return recipeB.avgRating - recipeA.avgRating;
              } else if (sortByRating === 'low') {
                return recipeA.avgRating - recipeB.avgRating;
              } else {
                return 0;
              }
            })
            .sort((recipeA, recipeB) => {
              if (sortByCookTime === 'quick') {
                return recipeA.time - recipeB.time;
              } else if (sortByCookTime === 'long') {
                return recipeB.time - recipeA.time;
              } else {
                return 0;
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

export default RecipeList;
