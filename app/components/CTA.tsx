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
import {
  ref,
  push,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
import { database } from "../../lib/firebase";
import { toast } from "react-hot-toast";

const CTA = ({ id }: { id?: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    assistanceType: "",
    frequency: "",
    source: "",
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkEmailExists = async (email: string) => {
    const emailRef = ref(database, "ctaResponses");
    const emailQuery = query(emailRef, orderByChild("email"), equalTo(email));
    const snapshot = await get(emailQuery);
    return snapshot.exists();
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        const emailExists = await checkEmailExists(formData.email);
        if (emailExists) {
          toast.error("This email is already registered.");
          setIsSubmitting(false);
          return;
        }

        const ctaResponsesRef = ref(database, "ctaResponses");
        await push(ctaResponsesRef, formData);
        console.log("Form data submitted successfully:", formData);
        toast.success("Thank you for joining our waitlist!");
        setIsOpen(false);
        setStep(1);
        setFormData({
          assistanceType: "",
          frequency: "",
          source: "",
          email: "",
        });
      } catch (error) {
        console.error("Error submitting form data:", error);
        toast.error("An error occurred. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Find Your Perfect Match?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our waitlist to be notified when we launch! <br /> Be the first
          few to claim your lifetime deal below!
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
              className="bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 relative"
            >
<<<<<<< HEAD
              Join Waitlist & Claim Lifetime Deal!
=======
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg" />
              <span className="absolute inset-0.5 bg-white dark:bg-zinc-950 rounded-[7px]" />
              <span className="relative">
                Join Waitlist & Claim Lifetime Deal!
              </span>
>>>>>>> a34d291f77874f14b659a984959d4ab0ad7ba64a
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800">
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
                          name="assistanceType"
                          value="personal"
                          onChange={handleInputChange}
                          checked={formData.assistanceType === "personal"}
                          className="w-4 h-4"
                        />
                        <span>Personal Assistance</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="assistanceType"
                          value="business"
                          onChange={handleInputChange}
                          checked={formData.assistanceType === "business"}
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
                          name="frequency"
                          value="fullTime"
                          onChange={handleInputChange}
                          checked={formData.frequency === "fullTime"}
                          className="w-4 h-4"
                        />
                        <span>Full-time</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="frequency"
                          value="partTime"
                          onChange={handleInputChange}
                          checked={formData.frequency === "partTime"}
                          className="w-4 h-4"
                        />
                        <span>Part-time</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="frequency"
                          value="asNeeded"
                          onChange={handleInputChange}
                          checked={formData.frequency === "asNeeded"}
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
                      How did you find our service?
                    </h3>
                    <div className="space-y-4">
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="source"
                          value="socialMedia"
                          onChange={handleInputChange}
                          checked={formData.source === "socialMedia"}
                          className="w-4 h-4"
                        />
                        <span>Social Media</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="source"
                          value="friendsFamily"
                          onChange={handleInputChange}
                          checked={formData.source === "friendsFamily"}
                          className="w-4 h-4"
                        />
                        <span>Friends or Family</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="source"
                          value="work"
                          onChange={handleInputChange}
                          checked={formData.source === "work"}
                          className="w-4 h-4"
                        />
                        <span>Work</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <Input
                          type="radio"
                          name="source"
                          value="onlineAd"
                          onChange={handleInputChange}
                          checked={formData.source === "onlineAd"}
                          className="w-4 h-4"
                        />
                        <span>Online Advertisement</span>
                      </Label>
                    </div>
                  </motion.div>
                )}
                {step === 4 && (
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
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
<<<<<<< HEAD
                      className="w-96 bg-zinc-900 border-zinc-800"
=======
                      className="w-full max-w-md mx-auto bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
>>>>>>> a34d291f77874f14b659a984959d4ab0ad7ba64a
                    />
                  </motion.div>
                )}
              </div>
              <DrawerFooter>
                <Button
                  type="submit"
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : step < 4
                    ? "Next"
                    : "Submit"}
                </Button>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="w-full border-zinc-200 dark:border-zinc-800"
                  >
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
