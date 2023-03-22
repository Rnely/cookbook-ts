import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import GetRecipes from '../useGetRecipes';
import './style.css';
import './style';
import Text from '../TextComponent/TextComponent';
import { CardActions } from '@mui/material';
import {
  CardBox,
  StyledButton,
  StyledCard,
  StyledCardContent,
  TextBox,
} from './style';

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
                <CardActions>
                  <button
                    className="cssbuttons-io-button"
                    onClick={() => nav(`/recipe/${recipe._id}`)}
                  >
                    {' '}
                    Cook This
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </CardActions>
              </StyledCard>
            );
          })}
      </CardBox>
    </>
  );
};

export default RecipeList;
