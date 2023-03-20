import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FollowState {
  follow: boolean;
}

const initialState: FollowState = {
  follow: false,
};

export const followSlice = createSlice({
  name: 'followButton',
  initialState,
  reducers: {
    setFollow: (state, action: PayloadAction<boolean>) => {
      state.follow = action.payload;
    },
  },
});

export const { setFollow } = followSlice.actions;

export default followSlice.reducer;
