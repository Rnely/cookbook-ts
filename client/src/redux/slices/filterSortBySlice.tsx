import { createSlice } from '@reduxjs/toolkit';

const filterSortBySlice = createSlice({
  name: 'pagination',
  initialState: {
    sortByRating: 'any',
    sortByCookTime: 'any',
  },
  reducers: {
    setSortByRating: (state, action) => {
      state.sortByRating = action.payload;
    },
    setSortByCookTime: (state, action) => {
      state.sortByCookTime = action.payload;
    },
  },
});

export const { setSortByRating, setSortByCookTime } = filterSortBySlice.actions;
export default filterSortBySlice.reducer;
