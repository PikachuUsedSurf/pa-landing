"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Create Your Profile",
    description:
      "Set up your account and describe your assistant requirements or skills.",
  },
  {
    number: "2",
    title: "Specify Your Needs",
    description:
      "Detail your preferences, schedule, and specific requirements.",
  },
  {
    number: "3",
    title: "Get Matched",
    description:
      "Our AI system matches you with the most compatible candidates.",
  },
  {
    number: "4",
    title: "Start Working",
    description: "Begin your collaboration with full platform support.",
  },
];

const HowItWorks = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] animate-pulse" />
              <Image
                src="/placeholder.svg"
                alt="How it works illustration"
                fill
                className="object-cover mix-blend-overlay opacity-50"
              />
            </div>
          </motion.div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                How AssistantHire works?
              </h2>
              <p className="text-zinc-400 md:text-xl/relaxed">
                Our streamlined process makes finding the perfect assistant
                simple and efficient.
              </p>
            </div>
            <div className="grid gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                    {step.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
