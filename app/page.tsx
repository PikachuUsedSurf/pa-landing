"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Header />
      <HowItWorks id="how-it-works" />
      <FAQ id="faq" />
      <CTA id="cta" />
    </motion.main>
  );
}
