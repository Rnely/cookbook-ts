import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './slices/urlSlice';
import pendingReducer from './slices/pendingSlice';
import queryReducer from './slices/recipeQuerySlice';
import userNameReducer from './slices/userNameSlice';
import userIdReducer from './slices/userIdSlice';
import recipesReducer from './slices/recipeSlice';
import followingArrayReducer from './slices/followingArraySlice';
import followingReducer from './slices/followingSlice';
import userReducer from './slices/userSlice';
import userFollowingReducer from './slices/userFollowingslice';
import loginReducer from './slices/loginSlice';
import currentUserNameReducer from './slices/currentUserSlice';
import recipeDietReducer from './slices/recipeDietSlice';
import filterRatingReducer from './slices/filterRatingSlice';
import userCollectionsReducer from './slices/userCollections';
import userCollRecipes from './slices/userCollRecipesSlice';
import filterCookTimeReducer from './slices/filterCookTimeSlice';
import filterSortByReducer from './slices/filterSortBySlice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    pending: pendingReducer,
    query: queryReducer,
    userName: userNameReducer,
    currentUserId: userIdReducer,
    recipes: recipesReducer,
    followingArray: followingArrayReducer,
    following: followingReducer,
    user: userReducer,
    userFollowing: userFollowingReducer,
    currentUserName: currentUserNameReducer,
    loginState: loginReducer,
    recipeDiet: recipeDietReducer,
    filterRating: filterRatingReducer,
    userCollections: userCollectionsReducer,
    userCollRecipes: userCollRecipes,
    filterCookTime: filterCookTimeReducer,
    filterSortBy: filterSortByReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
