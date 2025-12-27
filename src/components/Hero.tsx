import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer, scaleUp } from '../lib/animations'

export function Hero() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
            </span>
            Free for individuals
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Track time.
            <br />
            <span className="text-zinc-600">That's it.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto md:text-xl"
          >
            Free forever for you. <span className="font-medium text-zinc-900">$1/user</span> for your team.
            <br className="hidden sm:block" />
            No tiers. No tricks. No enterprise pricing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-8 text-sm font-medium text-white w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            <motion.a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2, borderColor: '#a1a1aa' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              See how it works
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-zinc-500"
          >
            No credit card required
          </motion.p>
        </motion.div>

        {/* Timer Preview */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-20 md:mt-28 mx-auto max-w-xl"
        >
          <motion.div
            className="relative rounded-xl border border-zinc-200 bg-zinc-950 p-1 shadow-2xl shadow-zinc-900/10"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>

            {/* Timer content */}
            <div className="rounded-lg bg-zinc-900 p-8 md:p-12">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
                  Currently tracking
                </p>
                <motion.p
                  className="text-5xl md:text-7xl font-mono text-white tracking-wider font-light"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                >
                  02:34:17
                </motion.p>
                <p className="text-sm text-zinc-400 mt-4">
                  Project Alpha
                </p>

                {/* Stop button */}
                <motion.button
                  className="mt-8 h-14 w-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.05, backgroundColor: '#3f3f46' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-4 w-4 bg-white rounded-sm" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Subtle glow */}
          <div className="absolute inset-0 -z-10 mx-auto max-w-xl blur-3xl opacity-20 bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
