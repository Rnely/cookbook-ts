import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  following: [],
};

export const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
  },
});

export const { setFollowing } = followingSlice.actions;

export default followingSlice.reducer;
