// src/app/(dashboard)/layout.tsx
import React from "react";
import Providers from "@/components/shared/Providers";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import "@/app/globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
        <Providers>
          <div className="flex h-screen overflow-hidden bg-background text-foreground">
            <Sidebar />
            <main className="flex flex-col flex-1 overflow-y-auto">
              <Topbar />
              <div className="p-4">{children}</div>
            </main>
          </div>
        </Providers>
  );
}
