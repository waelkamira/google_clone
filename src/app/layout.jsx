// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google Clone App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative mn-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
