import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Powered by TMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
