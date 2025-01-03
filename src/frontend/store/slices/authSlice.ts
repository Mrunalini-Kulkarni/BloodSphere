import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Demo users for testing
const users = {
  'admin': {
    id: '0',
    email: 'admin',
    name: 'Administrator',
    points: 0,
    donationHistory: [],
    isAdmin: true
  },
  'nikpatil2123@gmail.com': {
    id: '2',
    email: 'nikpatil2123@gmail.com',
    name: 'Nik Patil',
    points: 0,
    donationHistory: [],
    isAdmin: false
  },
  'donor@example.com': {
    id: '1',
    email: 'donor@example.com',
    name: 'John Donor',
    points: 150,
    donationHistory: [
      { date: '2024-03-01', points: 50, type: 'Whole Blood' },
      { date: '2024-02-01', points: 50, type: 'Whole Blood' },
      { date: '2024-01-01', points: 50, type: 'Plasma' },
    ],
    isAdmin: false
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;
      if ((email === 'nikpatil2123@gmail.com' && password === '1234') || 
          (email === 'donor@example.com' && password === 'password123') ||
          (email === 'admin' && password === 'admin')) {
        state.isAuthenticated = true;
        state.user = users[email];
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    addDonation: (state, action: PayloadAction<{
      name: string;
      email: string;
      phone: string;
      amount: number;
      date: string;
      type: string;
      points: number;
    }>) => {
      if (state.user) {
        state.user.points += action.payload.points;
        state.user.donationHistory.unshift({
          date: action.payload.date,
          points: action.payload.points,
          type: action.payload.type,
        });
      }
    },
  },
});

export const { login, logout, addDonation } = authSlice.actions;
export default authSlice.reducer;