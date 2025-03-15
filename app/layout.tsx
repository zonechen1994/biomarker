import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} scroll-smooth`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
