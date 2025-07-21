// src/components/shared/CategorySelector.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCategory } from "@/store/slices/preferencesSlice";

const categories = ["technology", "sports", "business", "health", "science"];

export default function CategorySelector() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state: RootState) => state.preferences.selectedCategory);

  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "default" : "outline"}
          onClick={() => dispatch(setCategory(cat))}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Button>
      ))}
    </div>
  );
}
