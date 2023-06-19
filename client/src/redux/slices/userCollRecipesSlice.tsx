import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setCollRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setCollRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
