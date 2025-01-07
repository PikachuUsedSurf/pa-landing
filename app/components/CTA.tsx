"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CTA = ({ id }: { id?: string }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log("Submitted email:", email);
      setIsOpen(false);
      setStep(1);
      setEmail("");
    }
  };

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Find Your Perfect Match?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our waitlist to be notified when we launch!
        </motion.p>
        <motion.p
          className="text-xl mb-8 text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Claim your lifetime deal below
        </motion.p>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-zinc-950 border-zinc-800 hover:bg-zinc-900"
            >
              Join Waitlist & Claim Lifetime Deal!
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-zinc-950 border-zinc-800">
            <form onSubmit={handleSubmit}>
              <DrawerHeader>
                <DrawerTitle>Quick Questionnaire</DrawerTitle>
                <DrawerDescription>
                  Help us understand your needs better. It'll only take a
                  minute!
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 py-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold">
                      What type of assistance are you looking for?
                    </h3>
                    <div className="space-y-4">
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          id="personal"
                          name="assistanceType"
                          className="w-4 h-4"
                        />
                        <span>Personal Assistance</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          id="business"
                          name="assistanceType"
                          className="w-4 h-4"
                        />
                        <span>Business Assistance</span>
                      </Label>
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold">
                      How often would you need assistance?
                    </h3>
                    <div className="space-y-4">
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          id="fullTime"
                          name="frequency"
                          className="w-4 h-4"
                        />
                        <span>Full-time</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          id="partTime"
                          name="frequency"
                          className="w-4 h-4"
                        />
                        <span>Part-time</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          id="asNeeded"
                          name="frequency"
                          className="w-4 h-4"
                        />
                        <span>As needed</span>
                      </Label>
                    </div>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold">
                      Enter your email to join our waitlist
                    </h3>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-96 bg-zinc-900 border-zinc-800"
                    />
                  </motion.div>
                )}
              </div>
              <DrawerFooter>
                <Button
                  type="submit"
                  className="w-full bg-zinc-900 hover:bg-zinc-800"
                >
                  {step < 3 ? "Next" : "Submit"}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full border-zinc-800">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default CTA;
