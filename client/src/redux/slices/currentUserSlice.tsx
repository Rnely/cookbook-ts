import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

export const currentUserNameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setCurrentUserName } = currentUserNameSlice.actions;

export default currentUserNameSlice.reducer;
