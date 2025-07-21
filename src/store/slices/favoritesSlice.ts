// src/store/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Article = {
    title: string;
    description: string;
    urlToImage: string;
    url: string;
};
  
type Movie = {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
};
  
type FavoritesState = {
    articles: Article[];
    movies: Movie[];
};

const initialState: FavoritesState = {
    articles: [],
    movies: [],
};
  

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
      addToFavorites: (state, action: PayloadAction<Article>) => {
        const exists = state.articles.some((item) => item.url === action.payload.url);
        if (!exists) {
          state.articles.push(action.payload);
        }
      },
      removeFromFavorites: (state, action: PayloadAction<string>) => {
        state.articles = state.articles.filter((item) => item.url !== action.payload);
      },
      addFavoriteMovie: (state, action: PayloadAction<Movie>) => {
        const exists = state.movies.some((movie) => movie.id === action.payload.id);
        if (!exists) {
          state.movies.push(action.payload);
        }
      },
      removeFavoriteMovie: (state, action: PayloadAction<number>) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      },
    },
});
  

export const {
    addToFavorites,
    removeFromFavorites,
    addFavoriteMovie,
    removeFavoriteMovie,
} = favoritesSlice.actions;
  
export default favoritesSlice.reducer;
  
