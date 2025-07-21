import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import preferencesReducer from "./slices/preferencesSlice";
import newsReducer from "@/features/news/newsSlice";
import favoritesReducer from "./slices/favoritesSlice";
import movieReducer from "@/features/movies/movieSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // only persist favorites
};

const rootReducer = combineReducers({
  preferences: preferencesReducer,
  news: newsReducer,
  movies: movieReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // required for redux-persist
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
