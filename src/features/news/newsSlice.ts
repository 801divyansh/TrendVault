// src/features/news/newsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

type Article = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

type NewsState = {
  articles: Article[];
  loading: boolean;
  error: string | null;
};

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchNewsByCategory = createAsyncThunk(
  "news/fetchByCategory",
  async (category: string) => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    return res.data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNewsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default newsSlice.reducer;
