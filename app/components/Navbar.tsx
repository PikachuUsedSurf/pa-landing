'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm bg-white/50 dark:bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              PA-TZ
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#how-it-works" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </Link>
              <Link href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </Link>
              <Link href="#cta" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#how-it-works" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              How It Works
            </Link>
            <Link href="#faq" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              FAQ
            </Link>
            <Link href="#cta" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

