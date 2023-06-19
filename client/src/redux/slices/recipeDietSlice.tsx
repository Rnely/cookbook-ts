import { createSlice } from '@reduxjs/toolkit';

interface RecipeDietState {
  value: string;
}

const initialState: RecipeDietState = {
  value: 'Any',
};

export const recipeDietSlice = createSlice({
  name: 'recipeDiet',
  initialState,
  reducers: {
    setRecipeDiet: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRecipeDiet } = recipeDietSlice.actions;

export default recipeDietSlice.reducer;
