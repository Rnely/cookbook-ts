import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUserNameState {
  userName: string;
}

const initialState: CurrentUserNameState = {
  userName: '',
};

export const currentUserNameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setCurrentUserName } = currentUserNameSlice.actions;

export default currentUserNameSlice.reducer;
