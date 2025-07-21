// src/components/cards/MovieCard.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovie, removeFavoriteMovie } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.movies.some((fav) => fav.id === movie.id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteMovie(movie.id));
    } else {
      dispatch(addFavoriteMovie(movie));
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="w-full h-72 object-cover"
        />
      )}
      <CardContent className="flex flex-col justify-between flex-1 p-4 space-y-2">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-3">{movie.overview}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-yellow-500">⭐ {movie.vote_average}</span>
          <Button
            size="sm"
            onClick={toggleFavorite}
            variant={isFavorite ? "secondary" : "outline"}
          >
            {isFavorite ? "Remove" : "❤️ Favorite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
