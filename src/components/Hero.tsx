"use client";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 pb-8 overflow-hidden bg-stone-50">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - Ramp style bold */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight"
          >
            Track time.
            <br />
            <span className="text-stone-400">Bill clients.</span>
          </motion.h1>

          {/* Value prop - single line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-stone-500 max-w-md mx-auto mb-8"
          >
            Simple time tracking. Free forever for individuals.
            Teams from <span className="text-stone-700 font-semibold">$1/user</span>.
          </motion.p>

          {/* Single CTA - Ramp style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="https://app.timedigits.ca/login"
              className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-800 transition-all duration-300"
            >
              Start Free
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>

            <span className="text-stone-400 text-sm">
              No credit card required
            </span>
          </motion.div>
        </div>

        {/* Compact app preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xl p-6">
            {/* Mini timer demo */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-sage-500 animate-pulse" />
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">Tracking</span>
              </div>
              <span className="text-xs text-stone-400">Project Alpha</span>
            </div>

            <div className="text-center py-4">
              <div className="font-mono text-4xl md:text-5xl font-light tracking-tight text-stone-900 tabular-nums">
                02:34:17
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-100">
              <div className="text-center">
                <div className="text-xl font-semibold text-stone-900">6.4h</div>
                <div className="text-xs text-stone-400">Today</div>
              </div>
              <div className="text-center border-x border-stone-100">
                <div className="text-xl font-semibold text-stone-900">32h</div>
                <div className="text-xs text-stone-400">Week</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-sage-600">$3,200</div>
                <div className="text-xs text-stone-400">Billable</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
