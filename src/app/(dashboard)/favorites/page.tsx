"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import NewsCard from "@/components/cards/NewsCard";
import MovieCard from "@/components/cards/MovieCard";

export default function FavoritesPage() {
  const { articles, movies } = useSelector((state: RootState) => state.favorites);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">⭐ Your Favorites</h1>

      {/* News Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📰 Articles</h2>
        {articles.length === 0 && <p className="text-muted-foreground">No news saved yet.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <NewsCard key={i} article={article} />
          ))}
        </div>
      </div>

      {/* Movie Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">🎬 Movies</h2>
        {movies.length === 0 && <p className="text-muted-foreground">No movies saved yet.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
