import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import useGetRecipes from '../../RecipeComponent/useGetRecipes';
import { Divider, Menu, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setCollRecipes } from '../../../redux/slices/userCollRecipesSlice';
import axios from 'axios';
import { setUserCollections } from '../../../redux/slices/userCollections';

interface Collections {
  name: string;
  private: boolean;
  recipes: Array<string>;
}

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

const UserCollections = () => {
  useGetRecipes();
  const recipe: Recipe[] = useSelector(
    (state: RootState) => state.recipes.recipes,
  );
  const collections: Collections[] = useSelector(
    (state: RootState) => state.userCollections.userCollections,
  );
  const currentUser = useSelector(
    (state: RootState) => state.currentUserId.userId,
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [collection, setCollection] = useState('madeByUser');
  const { id } = useParams();
  const dispatch = useDispatch();

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/cookbook/users/${id}`,
    );
    dispatch(setUserCollections(response.data.collections));
  };

  useEffect(() => {
    getUser();
    if (collection === 'madeByUser') {
      const userRecipes = recipe.filter((recipe) => recipe.userId === id);
      dispatch(setCollRecipes(userRecipes));
    } else {
      const selectedCollection = collections.find((c) => c.name === collection);
      if (selectedCollection) {
        const selectedRecipes = recipe.filter((r) =>
          selectedCollection.recipes.includes(r._id),
        );
        dispatch(setCollRecipes(selectedRecipes));
      }
    }
    setAnchorEl(null);
  }, [collection]);

  return (
    <>
      <button onClick={(e) => setAnchorEl(e.currentTarget)}>
        {anchorEl ? 'Close' : 'Open'}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {collections.map((coll, index) => {
          return coll.private ? (
            id === currentUser ? (
              <div key={index}>
                <MenuItem onClick={() => setCollection(coll.name)}>
                  {coll.name}
                </MenuItem>
              </div>
            ) : (
              ''
            )
          ) : (
            <div key={index}>
              <MenuItem onClick={() => setCollection(coll.name)}>
                {coll.name}
              </MenuItem>
            </div>
          );
        })}
        <Divider />
        <MenuItem onClick={() => setCollection('madeByUser')}>
          Recipes made by me
        </MenuItem>
      </Menu>
    </>
  );
};
export default UserCollections;
