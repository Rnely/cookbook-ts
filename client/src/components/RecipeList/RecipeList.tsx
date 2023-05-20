import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useGetRecipes from '../useGetRecipes';
import './style.css';
import './style';
import Text from '../TextComponent/TextComponent';
import {
  CardBox,
  StyledCard,
  StyledCardContent,
  StyledCardActions,
  PageBtnBox,
} from './style';
import { ArrowForwardButton, ArrowBackButton } from '../StyledButtons';
import { Rating } from '@mui/material';
import LoadingComponent from '../LoadingComponent';
import { setPage } from '../../redux/slices/paginationSlice';

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

  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.pagination.page);
  const pageSize = useSelector((state: RootState) => state.pagination.pageSize);
  const totalPages = useSelector(
    (state: RootState) => state.pagination.totalPages,
  );

  useGetRecipes({ page, pageSize, query, recipeDiet, filterRating });

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {recipes.length !== 0 ? (
        <>
          <CardBox>
            {recipes.map((recipe) => {
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

          <PageBtnBox>
            <StyledCardActions onClick={handlePreviousPage}>
              <ArrowBackButton text={'Prev page'} />
            </StyledCardActions>
            <StyledCardActions onClick={handleNextPage}>
              <ArrowForwardButton text={'Next page'} />
            </StyledCardActions>
          </PageBtnBox>
        </>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default RecipeList;
