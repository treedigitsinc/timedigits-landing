"use client";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to track time
            <br />
            <span className="text-teal-500">the simple way?</span>
          </h2>

          <p className="text-slate-500 text-lg mb-10">
            Join thousands who ditched bloated tools for timedigits.
          </p>

          <a
            href="https://app.timedigits.ca/login"
            className="group inline-flex items-center gap-3 bg-teal-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30"
          >
            Start Free Now
            <ArrowRight size={24} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 text-sm">
            <span>No credit card</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Free forever for individuals</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
