"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4  ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              AssistantHire
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#how-it-works"
                className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                How It Works
              </Link>
              <Link
                href="#faq"
                className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQ
              </Link>
              <Link
                href="#cta"
                className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#how-it-works"
              className="text-foreground/60 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-foreground/60 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </Link>
            <Link
              href="#cta"
              className="text-foreground/60 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
