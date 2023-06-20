import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  time: 'any',
};

export const cookTimeSlice = createSlice({
  name: 'cookTime',
  initialState,
  reducers: {
    setCookTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
  },
});

export const { setCookTime } = cookTimeSlice.actions;

export default cookTimeSlice.reducer;
