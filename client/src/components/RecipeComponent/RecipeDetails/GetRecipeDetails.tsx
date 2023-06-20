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
  StyledCard2,
  TimeBox,
  StepsBox,
  DietBox,
  TextBox,
  StyledCardActions,
  CollButtons,
} from './style';
import Text from '../../TextComponent';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  Rating,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';
import LoadingComponent from '../../LoadingComponent';
import { setUserCollections } from '../../../redux/slices/userCollections';
import { AddButton } from '../../StyledButtons/StyledButtons';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [newCollName, setNewCollName] = useState('');
  const [privColl, setPrivColl] = useState(false);
  const [avgRating, setAvgRating] = useState(0);
  const userCollections = useSelector(
    (state: RootState) => state.userCollections.userCollections,
  );

  const nav = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

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
    setAvgRating(response.data.avgRating);
  };

  const handleDelete = async () => {
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

  const handleCreateCollection = async () => {
    if (currentUserId) {
      if (newCollName === '') {
        toast.error('New collection name cannot be empty', {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        try {
          await axios.post(
            `http://localhost:5000/cookbook/users/${currentUserId}`,
            {
              collections: {
                name: newCollName,
                private: privColl,
                recipes: [],
              },
            },
          );
          setNewCollName('');
          if (id) {
            dispatch(
              setUserCollections([
                ...userCollections,
                { name: newCollName, private: privColl, recipes: [id] },
              ]),
            );
          }
          toast.success('Successfully created collection', {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } catch (error: any) {
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
      }
    } else {
      nav('/authentication');
    }
  };

  const handleRecipeSave = async (coll: string) => {
    try {
      await axios.patch(
        `http://localhost:5000/cookbook/users/${currentUserId}/collections`,
        {
          userId: currentUserId,
          collectionName: coll,
          recipeId: id,
        },
      );
      setAnchorEl(null);
      toast.success(`Successfully saved recipe to ${coll}`, {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error: any) {
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
                value={avgRating}
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
            <SaveBox>
              <StyledCardActions onClick={(e) => setAnchorEl(e.currentTarget)}>
                <AddButton text="Save to collection" />
              </StyledCardActions>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {userCollections.map((coll, index) => {
                  return (
                    <div key={index}>
                      <MenuItem onClick={() => handleRecipeSave(coll.name)}>
                        {coll.name}
                      </MenuItem>
                    </div>
                  );
                })}
                <Divider />
                <TextBox>
                  <TextField
                    variant="standard"
                    label="New collection"
                    type="text"
                    value={newCollName}
                    onChange={(e) => setNewCollName(e.target.value)}
                  />
                  {privColl ? (
                    <CollButtons onClick={() => setPrivColl(!privColl)}>
                      Private
                    </CollButtons>
                  ) : (
                    <CollButtons onClick={() => setPrivColl(!privColl)}>
                      Public
                    </CollButtons>
                  )}
                  <CollButtons onClick={handleCreateCollection}>
                    create
                  </CollButtons>
                </TextBox>
              </Menu>
            </SaveBox>
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
