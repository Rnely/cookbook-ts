import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

export const userNameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
