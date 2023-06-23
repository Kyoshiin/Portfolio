"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratyay Roy",
  description: "Portfolio of Pratyay Roy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
