import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from 'react'
import { Providers } from "@/components";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Journey Builder React Coding Challenge",
  description: "Journey Builder React Coding Challenge by Strahinja Belic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
