import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DonationRequest } from '../../types';

interface DonationRequestsState {
  requests: DonationRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: DonationRequestsState = {
  requests: [],
  loading: false,
  error: null,
};

const donationRequestsSlice = createSlice({
  name: 'donationRequests',
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<DonationRequest[]>) => {
      state.requests = action.payload;
    },
    addRequest: (state, action: PayloadAction<DonationRequest>) => {
      state.requests.unshift(action.payload);
    },
    updateRequestStatus: (state, action: PayloadAction<{ id: string; status: 'open' | 'fulfilled' | 'closed' }>) => {
      const request = state.requests.find(req => req.id === action.payload.id);
      if (request) {
        request.status = action.payload.status;
      }
    },
  },
});

export const { setRequests, addRequest, updateRequestStatus } = donationRequestsSlice.actions;
export default donationRequestsSlice.reducer;