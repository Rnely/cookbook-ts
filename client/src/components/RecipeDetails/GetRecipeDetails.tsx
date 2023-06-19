import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import './style';
import {
  HeaderBox,
  ImageBox,
  IngBox,
  RatingBox,
  SaveBox,
  StyledCard,
  StyledCard2,
  StyledCardActions,
  TimeBox,
  StepsBox,
  DietBox,
} from './style';
import Text from '../TextComponent/TextComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Divider, Rating, useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

interface Recipe {
  _id: string;
  user: string;
  userId: string;
  title: string;
  time: number;
  method: string;
  diet: string;
  avgRating: number;
  userRating: Array<UserRate>;
  listIngredients: Array<String>;
  image: string;
}

interface UserRate {
  user: string;
  rating: number | null;
}

interface Steps {
  step: number;
  desc: string;
}

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe[] | null>(null);
  const [listIng, setListIng] = useState<String[]>([]);
  const [imgUrl, setImgUrl] = useState('');
  const currentUserName = useSelector(
    (state: RootState) => state.currentUserName.userName,
  );
  const currentUserId = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const [steps, setSteps] = useState<Steps[]>([]);

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/recipes/${id}`,
    );
    setRecipe([response.data]);
    setListIng(response.data.listIngredients);
    setSteps(response.data.method);
    setImgUrl(`http://localhost:5000/api/images/${response.data.image}`);
  };

  const handleClick = async () => {
    try {
      await axios.delete(`http://localhost:5000/cookbook/recipes/${id}`);
      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingChange = async (newValue: number | null) => {
    try {
      await axios.patch(`http://localhost:5000/cookbook/recipes/${id}/rating`, {
        userId: currentUserId,
        rating: newValue,
      });
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    getRecipe();
  };

  const isMobile = useMediaQuery('(max-width: 700px)');

  if (!recipe) {
    return <LoadingComponent />;
  }

  return (
    <>
      {recipe.map((recipe) => {
        return (
          <StyledCard2 key={recipe._id}>
            <HeaderBox>
              <Text text={recipe.title} variant="h5" fontWeight={600} />
            </HeaderBox>
            <TimeBox>
              <Text text={`${recipe.time} minutes to cook`} />
            </TimeBox>
            <DietBox>
              <Text text={`${recipe.diet} diet`} />
            </DietBox>
            <ImageBox>
              <img
                src={imgUrl}
                alt={recipe.title}
                height={isMobile ? 250 : 350}
                width={isMobile ? 380 : 500}
              />
            </ImageBox>
            <RatingBox>
              <Rating
                value={recipe.avgRating}
                disabled={currentUserName === recipe.user ? true : false}
                precision={0.5}
                onChange={(event, newValue) => {
                  if (currentUserName) {
                    handleRatingChange(newValue);
                  } else {
                    nav('/authentication');
                  }
                }}
              />
            </RatingBox>
            <SaveBox></SaveBox>
            <IngBox>
              <Text text={'Ingredients'} fontWeight={600} />
              {listIng.map((ing, index) => {
                return (
                  <div key={index}>
                    <Text text={ing} />
                  </div>
                );
              })}
            </IngBox>
            <StepsBox>
              <Text text={'Cooking steps'} fontWeight={600} />
              {steps.map((step, index) => {
                const lastIndex = steps.length - 1;
                return (
                  <div key={index}>
                    <Text text={`${step.step}.step`} />
                    <Text text={step.desc} />
                    {lastIndex ? <Divider /> : ''}
                  </div>
                );
              })}
            </StepsBox>
          </StyledCard2>
        );
      })}
    </>
  );
};

export default RecipeDetails;
