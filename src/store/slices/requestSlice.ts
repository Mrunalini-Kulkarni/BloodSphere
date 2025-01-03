import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BloodRequest } from '../../types/request';

interface RequestState {
  requests: BloodRequest[];
  loading: boolean;
  error: string | null;
}

const initialState: RequestState = {
  requests: [],
  loading: false,
  error: null,
};

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<BloodRequest[]>) => {
      state.requests = action.payload;
    },
    addRequest: (state, action: PayloadAction<BloodRequest>) => {
      state.requests.unshift(action.payload);
    },
    updateRequestStatus: (state, action: PayloadAction<{ id: string; status: BloodRequest['status'] }>) => {
      const request = state.requests.find(req => req.id === action.payload.id);
      if (request) {
        request.status = action.payload.status;
      }
    },
  },
});

export const { setRequests, addRequest, updateRequestStatus } = requestSlice.actions;
export default requestSlice.reducer;