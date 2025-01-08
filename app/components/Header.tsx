"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-blue-950">
            <Image
              src="/placeholder.svg"
              alt="Professional workspace"
              fill
              className="object-cover opacity-80 mix-blend-overlay"
            />
          </div>
        </div>
        <div className="flex items-center p-8 lg:p-16">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-sm font-medium text-indigo-600">
                FASTEST ASSISTANT MATCHING
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find and hire your perfect assistant in minutes
              </h1>
              <p className="text-lg text-zinc-400 max-w-lg">
                Connect with pre-vetted personal assistants who match your needs
                perfectly. Our platform makes finding the right assistant easier
                than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                {/* <Input
                  type="email"
                  placeholder="Enter email to get started"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-400"
                /> */}
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
<<<<<<< HEAD
                  <Link href="#cta"> Claim Life Time Deal!</Link>
=======
                  <Link href="#cta">Claim Your Life Time Deal!</Link>
>>>>>>> parent of c09666d (Merge branch 'master' of https://github.com/PikachuUsedSurf/pa-landing)
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
