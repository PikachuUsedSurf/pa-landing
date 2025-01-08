import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GrainBackground from "./components/ui/grain-background";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-black`}>
        <GrainBackground />
        {children}
      </body>
    </html>
  );
}
