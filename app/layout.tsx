import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GrainBackground from "./components/ui/grain-background";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AssistantHire - Find Your Perfect Personal Assistant",
  description:
    "Connect with top-tier personal assistants for your business and personal needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
<<<<<<< HEAD
      <body className={`${inter.className} bg-black`}>
=======
      <body className={` bg-black`}>
>>>>>>> parent of f285ff4 (added database, added visitor counter, can now store CTA form questions into database, added pictures, added black and white mode, added home button in navbar)
        <GrainBackground />
        {children}
      </body>
    </html>
  );
}
