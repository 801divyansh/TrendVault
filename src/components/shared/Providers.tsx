// src/components/shared/Providers.tsx
"use client";

import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ClerkProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </ClerkProvider>
  );
}
