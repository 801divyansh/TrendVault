// src/store/slices/preferencesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PreferencesState = {
  selectedCategory: string;
};

const initialState: PreferencesState = {
  selectedCategory: "technology",
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = preferencesSlice.actions;
export default preferencesSlice.reducer;
