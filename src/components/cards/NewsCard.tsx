// src/components/cards/NewsCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store";

type Props = {
  article: {
    title: string;
    description: string;
    urlToImage: string;
    url: string;
  };
};

export default function NewsCard({ article }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFav = favorites.some((item) => item.url === article.url);

  const handleClick = () => {
    if (isFav) {
      dispatch(removeFromFavorites(article.url));
    } else {
      dispatch(addToFavorites(article));
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="News image"
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <CardContent className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button asChild>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </Button>
          <Button
            variant={isFav ? "destructive" : "secondary"}
            size="sm"
            onClick={handleClick}
          >
            {isFav ? "Remove" : "Favorite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
