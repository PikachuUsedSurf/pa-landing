import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Header />
    </main>
  );
}
