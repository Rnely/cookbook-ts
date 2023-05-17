import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import './style';
import { StyledCard, StyledCardActions } from './style';
import Text from '../TextComponent/TextComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Rating } from '@mui/material';
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
  image: string; // Add the imageFilename property
}

interface UserRate {
  user: string;
  rating: number | null;
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
  const recipes: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    const selectedRecipe = recipes.find((r) => r._id === id);
    if (selectedRecipe) {
      setRecipe([selectedRecipe]);
      console.log(selectedRecipe);
      setListIng(selectedRecipe.listIngredients);
      setImgUrl(`http://localhost:5000/api/images/${selectedRecipe.image}`);
    }
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
      getRecipe();
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
  };

  if (!recipe) {
    return <LoadingComponent />;
  }

  return (
    <>
      {recipe.map((recipe) => {
        return (
          <StyledCard key={recipe._id}>
            <Text text={recipe.title} variant="h5" fontWeight={600} />
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
            <h4>
              Author:
              <button
                className="btn"
                onClick={() => nav(`/user/${recipe.userId}`)}
              >
                <Text text={recipe.user} fontWeight={600} />
              </button>
            </h4>
            <p> Takes {recipe.time} minutes to cook</p>
            <Text text={recipe.diet} />
            <p className="ing">{listIng.join(', ')}</p>
            <div>{recipe.method}</div>
            <img src={imgUrl} alt={recipe.title} height={500} width={500} />
            {currentUserName === recipe.user ? (
              <StyledCardActions>
                <button className="cssbuttons-io-button" onClick={handleClick}>
                  Delete
                  <div className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z"
                      />
                    </svg>
                  </div>
                </button>
              </StyledCardActions>
            ) : (
              ''
            )}
          </StyledCard>
        );
      })}
    </>
  );
};

export default RecipeDetails;
