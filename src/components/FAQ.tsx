"use client";
import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "Is it really free for individuals?",
    answer: "Yes, absolutely. We believe everyone should have access to simple time tracking. All core features like unlimited projects, history, and exports are free forever for solo users.",
  },
  {
    question: "How does the team pricing work?",
    answer: "Teams pay a flat fee of $5/month which includes up to 5 members. If you have more than 5 members, it's just $1/month for each additional person. No complex tiers or enterprise traps.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export your data to CSV at any time. Your data belongs to you, and we make it easy to take it with you for invoicing or accounting.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes! timedigits is built to work offline. Your timers will keep running and your data will sync automatically once you're back online.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-950">
      <div className="container max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-lg">
            Everything you need to know about timedigits.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl border-zinc-800/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <CaretDown 
                  size={20} 
                  className={cn(
                    "text-zinc-500 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
