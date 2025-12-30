"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaretDown, ArrowRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { getFeaturedFAQs } from "../data/faqData";

// Get only featured FAQs for the landing page (8 most important)
const featuredFAQs = getFeaturedFAQs(8);

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
          {featuredFAQs.map((faq, index) => (
            <div
              key={faq.id}
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

        {/* Link to full FAQ page */}
        <div className="mt-12 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
          >
            View all 80+ questions <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
