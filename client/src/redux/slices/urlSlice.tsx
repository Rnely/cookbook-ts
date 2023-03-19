import { createSlice } from '@reduxjs/toolkit';

interface UrlState {
  value: string;
}

const initialState: UrlState = {
  value: 'http://localhost:3000/recipes/',
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {},
});

export default urlSlice.reducer;
