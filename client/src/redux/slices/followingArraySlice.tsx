import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  followingArray: [],
};

export const followingArraySlice = createSlice({
  name: 'followButton',
  initialState,
  reducers: {
    setFollowingArray: (state, action) => {
      state.followingArray = action.payload;
    },
  },
});

export const { setFollowingArray } = followingArraySlice.actions;

export default followingArraySlice.reducer;
