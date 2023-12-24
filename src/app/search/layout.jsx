// "use client";
import { Inter } from "next/font/google";
import "../globals.css";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google Clone App",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
