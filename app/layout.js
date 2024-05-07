import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eyebrow studio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
