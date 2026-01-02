"use client";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl text-stone-900 mb-6">
            Ready to track time
            <br />
            <span className="text-stone-400">the simple way?</span>
          </h2>

          <p className="text-stone-500 text-lg mb-10">
            Join thousands who ditched bloated tools for timedigits.
          </p>

          <a
            href="https://app.timedigits.ca/login"
            className="group inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-900/20 hover:shadow-xl hover:shadow-stone-900/30"
          >
            Start Free Now
            <ArrowRight size={24} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-stone-400 text-sm">
            <span>No credit card</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Free forever for individuals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
