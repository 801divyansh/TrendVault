// src/app/(dashboard)/favorites/page.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import NewsCard from "@/components/cards/NewsCard";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">❤️ Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-muted-foreground">You haven't added anything yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
