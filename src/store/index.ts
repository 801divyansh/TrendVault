// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import preferencesReducer from "./slices/preferencesSlice";
import newsReducer from "@/features/news/newsSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    news: newsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
