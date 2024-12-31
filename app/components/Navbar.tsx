"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Personal Assistance
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
                href="#features"
                className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="#company"
                className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
              >
                Company
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
