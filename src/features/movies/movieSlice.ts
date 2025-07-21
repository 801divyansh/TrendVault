// src/features/movies/movieSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrending", async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
});

interface MovieState {
    movies: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: MovieState = {
    movies: [],
    loading: false,
    error: null,
  };
  

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
