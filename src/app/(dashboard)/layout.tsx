"use client";
import React, { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SignedIn>
        <div className="flex h-screen overflow-hidden bg-background text-foreground relative">
          {/* Sidebar */}
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          {/* Main content */}
          <main className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Topbar />
            <div className="p-4 max-w-5xl mx-auto w-full">{children}</div>
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center h-screen">
          <SignIn routing="hash" />
        </div>
      </SignedOut>
    </ThemeProvider>
  );
}