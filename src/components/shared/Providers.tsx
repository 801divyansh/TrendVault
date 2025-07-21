// src/components/shared/Providers.tsx
"use client";

import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { store } from "@/store";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ClerkProvider>
      <ReduxProvider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </ClerkProvider>
  );
}
