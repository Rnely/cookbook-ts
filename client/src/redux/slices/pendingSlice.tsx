import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PendingState {
  pending: boolean;
}

const initialState: PendingState = {
  pending: false,
};

export const pendingSlice = createSlice({
  name: 'isPending',
  initialState,
  reducers: {
    setPending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },
  },
});

export const { setPending } = pendingSlice.actions;

export default pendingSlice.reducer;
