import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BloodInventory } from '../../types/organization';

interface InventoryState {
  items: BloodInventory[];
  loading: boolean;
  error: string | null;
}

const initialState: InventoryState = {
  items: [],
  loading: false,
  error: null,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setInventory: (state, action: PayloadAction<BloodInventory[]>) => {
      state.items = action.payload;
    },
    addInventoryItem: (state, action: PayloadAction<BloodInventory>) => {
      state.items.push(action.payload);
    },
    updateInventoryItem: (state, action: PayloadAction<Partial<BloodInventory> & { id: string }>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
  },
});

export const { setInventory, addInventoryItem, updateInventoryItem } = inventorySlice.actions;
export default inventorySlice.reducer;