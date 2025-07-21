// src/components/shared/Topbar.tsx
"use client";
import { UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only true after hydration
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
      <Input placeholder="Search..." className="max-w-sm" />
      <div className="flex items-center gap-4">
      {mounted && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
