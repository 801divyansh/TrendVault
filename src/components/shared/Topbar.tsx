// src/components/shared/Topbar.tsx
"use client";

import { Input } from "@/components/ui/input";

export default function Topbar() {

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b rounded-2xl">
      <Input placeholder="Search..." className="max-w-sm" />
    </header>
  );
}
