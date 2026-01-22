import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Kids | Trusouri Botez & Hăinuțe Premium",
  description: "Trusouri de botez personalizate, hăinuțe din bumbac organic și cadouri de poveste. Magazin online premium pentru copii 0-24 luni.",
};

import { WishlistProvider } from "@/context/WishlistContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <WishlistProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
