// src/components/home/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { motion } from "framer-motion";
import { useAuth, useUser, UserButton } from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Menu, Heart, LayoutDashboard, Film } from "lucide-react";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80 rounded-b-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary tracking-tight">
          Trend<span className="text-foreground">Vault</span>
        </Link>

        {/* Desktop Nav (visible on md+) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/movies">
                <Button variant="ghost">Movies</Button>
              </Link>
              <Link href="/favorites">
                <Button variant="ghost">Favorites</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] animate-slideIn">
            <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-4">
                {isSignedIn ? (
                  <>
                    <Link href="/dashboard">
                      <Button variant="ghost" className="w-full justify-start">
                        <LayoutDashboard className="mr-2 h-5 w-5" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/movies">
                      <Button variant="ghost" className="w-full justify-start">
                        <Film className="mr-2 h-5 w-5" />
                        Movies
                      </Button>
                    </Link>
                    <Link href="/favorites">
                      <Button variant="ghost" className="w-full justify-start">
                        <Heart className="mr-2 h-5 w-5 text-destructive" />
                        Favorites
                      </Button>
                    </Link>
                    <div className="flex items-center gap-3 pl-4 mt-4">
                      <UserButton afterSignOutUrl="/" />
                      <div className="text-sm font-medium">{user?.fullName || user?.username}</div>
                    </div>
                  </>
                ) : (
                  <Link href="/sign-in">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
