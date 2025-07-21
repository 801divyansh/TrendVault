// src/components/shared/Sidebar.tsx
"use client";
import Link from "next/link";
import { Home, Star, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-muted p-4 border-r hidden md:block">
      <h2 className="text-xl font-bold mb-6">📊 Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="flex items-center gap-2 hover:text-primary">
            <Home size={18} /> Home
          </Link>
        </li>
        <li>
          <Link href="/favorites" className="flex items-center gap-2 hover:text-primary">
            <Star size={18} /> Favorites
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center gap-2 hover:text-primary">
            <Settings size={18} /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
}
