// src/app/(dashboard)/movies/page.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "@/features/movies/movieSlice";
import { RootState, AppDispatch } from "@/store";
import MovieCard from "@/components/cards/MovieCard";

export default function MoviesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);       

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">🎬 Trending Movies</h1>

      {loading && <p>Loading movies...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {movies.length === 0 && !loading && <p>No movies found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
