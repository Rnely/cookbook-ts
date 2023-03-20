import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './slices/urlSlice';
import pendingReducer from './slices/pendingSlice';
import queryReducer from './slices/recipeQuerySlice';
import userReducer from './slices/userSlice';
import userIdReducer from './slices/userIdSlice';
import recipesReducer from './slices/recipeSlice';
import followReducer from './slices/followSlice';
import userFollowingReducer from './slices/userFollowingSlice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    pending: pendingReducer,
    recipeFilter: queryReducer,
    currentUser: userReducer,
    currentUserId: userIdReducer,
    recipes: recipesReducer,
    follow: followReducer,
    userFollowing: userFollowingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
