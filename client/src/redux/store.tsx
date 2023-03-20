import { configureStore } from '@reduxjs/toolkit';
import urlReducer from './slices/urlSlice';
import pendingReducer from './slices/pendingSlice';
import queryReducer from './slices/recipeQuerySlice';
import userReducer from './slices/userSlice';
import recipesReducer from './slices/recipeSlice';

export const store = configureStore({
  reducer: {
    url: urlReducer,
    pending: pendingReducer,
    recipeFilter: queryReducer,
    currentUser: userReducer,
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
