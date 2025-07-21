// src/app/(dashboard)/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCategory } from "@/features/news/newsSlice";
import { RootState, AppDispatch } from "@/store";
import NewsCard from "@/components/cards/NewsCard";
import CategorySelector from "@/components/shared/CategorySelector";

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector((state: RootState) => state.preferences.selectedCategory);
  const { articles, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsByCategory(category));
  }, [dispatch, category]);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold"> Personalized News</h1>

      <CategorySelector />

      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {articles.length === 0 && !loading && <p>No articles found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

