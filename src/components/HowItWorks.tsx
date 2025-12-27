import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { step: '1', text: 'Pick a project' },
  { step: '2', text: 'Start the timer' },
  { step: '3', text: 'Review your week' },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section id="how-it-works" className="py-20 border-t">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 md:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-4"
            >
              <motion.span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item.step}
              </motion.span>
              <span className="text-zinc-900 font-medium">{item.text}</span>

              {/* Arrow between steps (not after last) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  className="hidden sm:block w-8 md:w-16 h-px bg-zinc-300 ml-4"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
