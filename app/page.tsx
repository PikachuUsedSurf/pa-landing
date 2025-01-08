'use client'

import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import VisitorCounter from './components/VisitorCounter'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Header />
      <HowItWorks id="how-it-works" />
      <FAQ id="faq" />
      <CTA id="cta" />
      <VisitorCounter />
      <Footer />
      <Toaster position="bottom-center" />
    </motion.main>
  )
}

