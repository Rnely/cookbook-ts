import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const filterRatingSlice = createSlice({
  name: 'filterRating',
  initialState,
  reducers: {
    setFilterRating: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterRating } = filterRatingSlice.actions;

export default filterRatingSlice.reducer;
