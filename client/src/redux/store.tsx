import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './slices/urlSlice';
import pendingReducer from './slices/pendingSlice';
import queryReducer from './slices/recipeQuerySlice';
import userNameReducer from './slices/userNameSlice';
import userIdReducer from './slices/userIdSlice';
import recipesReducer from './slices/recipeSlice';
import followReducer from './slices/followSlice';
import followingReducer from './slices/followingSlice';
import userReducer from './slices/userSlice';
import userFollowingReducer from './slices/userFollowingslice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    pending: pendingReducer,
    recipeFilter: queryReducer,
    currentUser: userNameReducer,
    currentUserId: userIdReducer,
    recipes: recipesReducer,
    follow: followReducer,
    following: followingReducer,
    user: userReducer,
    userFollowing: userFollowingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
