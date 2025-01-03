import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    updatePoints: (state, action: PayloadAction<number>) => {
      if (state.currentUser) {
        state.currentUser.points += action.payload;
      }
    },
    updateLastDonation: (state, action: PayloadAction<string>) => {
      if (state.currentUser) {
        state.currentUser.lastDonation = action.payload;
        state.currentUser.donationCount += 1;
      }
    },
  },
});

export const { setUser, updatePoints, updateLastDonation } = userSlice.actions;
export default userSlice.reducer;