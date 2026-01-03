"use client";
import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

export function WhySoCheap() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why is timedigits so cheap?
          </h2>

          <div className="relative">
            <Quotes
              size={48}
              weight="fill"
              className="text-teal-500/30 absolute -top-4 -left-2 md:left-8"
            />
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 px-4 md:px-16">
              We've been in your shoes. We spent years implementing time tracking
              for personal projects and companies, watching teams pay <span className="text-teal-400">$10-20 per user per month</span> for
              tools that took 5 minutes to build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-teal-400 mb-2">No VC money</div>
              <p className="text-slate-400">
                We're bootstrapped. No investors demanding 10x growth. We price for sustainability, not for Series B metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-teal-400 mb-2">No sales team</div>
              <p className="text-slate-400">
                No enterprise sales reps. No demo calls. No "contact us for pricing." The product sells itself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <div className="text-3xl font-bold text-teal-400 mb-2">No bloat</div>
              <p className="text-slate-400">
                We build what you need, not what looks good in a pitch deck. Less complexity = less cost = lower prices.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-500 mt-12 text-lg"
          >
            Time tracking shouldn't cost more than the coffee you drink while using it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
