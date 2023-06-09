import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserCollections {
  name: string;
  recipes: string[];
}

interface UserState {
  userCollections: UserCollections[];
}

const initialState: UserState = {
  userCollections: [],
};

export const userCollections = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCollections: (state, action: PayloadAction<UserCollections[]>) => {
      state.userCollections = action.payload;
    },
  },
});

export const { setUserCollections } = userCollections.actions;

export default userCollections.reducer;
