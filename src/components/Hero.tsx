"use client";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-stone-50">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-sage-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-stone-200/60 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compact badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-700 text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-gentle-pulse" />
            Free for individuals
          </motion.div>

          {/* Main headline - editorial serif style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-900 mb-6 leading-[0.95]"
          >
            Track time.
            <br />
            <span className="text-stone-400">Bill clients.</span>
          </motion.h1>

          {/* Value prop - tight and punchy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-500 max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Simple time tracking that gets out of your way.
            <br className="hidden sm:block" />
            <span className="text-stone-700 font-medium">Free forever.</span> Teams from $1/user.
          </motion.p>

          {/* Single prominent CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://app.timedigits.ca/login"
              className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-900/20 hover:shadow-xl hover:shadow-stone-900/30"
            >
              Start Free
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#features"
              className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium"
            >
              See features
            </a>
          </motion.div>

          {/* Trust signals - minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-6 text-stone-400 text-xs font-medium"
          >
            <span>No credit card</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Setup in 30 seconds</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Cancel anytime</span>
          </motion.div>
        </div>

        {/* Compact app preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl shadow-stone-200/50 p-6 md:p-8">
            {/* Mini timer demo */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-sage-500 animate-gentle-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Tracking</span>
              </div>
              <span className="text-xs text-stone-400">Project Alpha</span>
            </div>

            <div className="text-center py-8">
              <div className="font-mono text-5xl md:text-6xl font-light tracking-tight text-stone-900 tabular-nums">
                02:34:17
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="text-center">
                <div className="text-2xl font-semibold text-stone-900">6.4h</div>
                <div className="text-xs text-stone-400 mt-1">Today</div>
              </div>
              <div className="text-center border-x border-stone-100">
                <div className="text-2xl font-semibold text-stone-900">32h</div>
                <div className="text-xs text-stone-400 mt-1">This week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-sage-600">$3,200</div>
                <div className="text-xs text-stone-400 mt-1">Billable</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
