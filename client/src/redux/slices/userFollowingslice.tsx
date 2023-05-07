import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userFollowing: [],
};

export const userFollowingSlice = createSlice({
  name: 'userFollowing',
  initialState,
  reducers: {
    setUserFollowing: (state, action) => {
      state.userFollowing = action.payload;
    },
  },
});

export const { setUserFollowing } = userFollowingSlice.actions;

export default userFollowingSlice.reducer;
