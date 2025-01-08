"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Clock,
  CreditCard,
  Users,
  Shield,
  HeartHandshake,
} from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "How long does the matching process take?",
    answer:
      "Our AI-powered matching system typically finds suitable candidates within 24-48 hours of your requirements submission.",
  },
  {
    icon: CreditCard,
    question: "What are the payment terms?",
    answer:
      "We offer flexible payment options with secure transactions. Payments are processed only after you're satisfied with the match.",
  },
  {
    icon: Users,
    question: "Can I hire multiple assistants?",
    answer:
      "Yes, you can hire multiple assistants for different roles or projects through our platform.",
  },
  {
    icon: Shield,
    question: "How do you verify assistants?",
    answer:
      "We conduct thorough background checks, skill assessments, and reference verification for all assistants.",
  },
  {
    icon: MessageCircle,
    question: "How do I communicate with assistants?",
    answer:
      "Our platform provides integrated messaging, video calls, and task management tools.",
  },
  {
    icon: HeartHandshake,
    question: "What if I'm not satisfied?",
    answer:
      "We offer a satisfaction guarantee with a free rematch if you're not happy with your initial assistant.",
  },
];

const FAQ = ({ id }: { id?: string }) => {
  return (
    <section
      id={id}
      className="py-24 px-36 md:px-4 bg-gradient-to-b from-indigo-950/50 to-background"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed">
            Everything you need to know about finding your perfect assistant.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                <faq.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{faq.question}</h3>
              <p className="text-sm text-zinc-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
