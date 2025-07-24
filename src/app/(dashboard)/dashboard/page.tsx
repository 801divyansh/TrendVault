"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchNewsByCategory } from "@/features/news/newsSlice";
import { RootState, AppDispatch } from "@/store";
import NewsCard from "@/components/cards/NewsCard";
import CategorySelector from "@/components/shared/CategorySelector";
import { useUser, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { useEffect } from "react";

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector((state: RootState) => state.preferences.selectedCategory);
  const { articles, loading, error } = useSelector((state: RootState) => state.news);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      dispatch(fetchNewsByCategory(category));
    }
  }, [dispatch, category, isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <SignedIn>
        <div className="p-4 space-y-6">
          <h1 className="text-2xl font-bold">Personalized News</h1>
          <p>Welcome, {user?.fullName || user?.username || "User"}</p>
          <p>Your email: {user?.primaryEmailAddress?.emailAddress}</p>

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
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}