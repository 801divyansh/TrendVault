// src/store/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Article = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

type FavoritesState = {
  items: Article[];
};

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Article>) => {
      const exists = state.items.some((item) => item.url === action.payload.url);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.url !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
