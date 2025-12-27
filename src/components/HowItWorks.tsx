import { motion } from 'framer-motion'

const steps = [
  { step: '1', text: 'Pick a project' },
  { step: '2', text: 'Start the timer' },
  { step: '3', text: 'Review your week' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 md:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
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
                <div className="hidden sm:block w-8 md:w-16 h-px bg-zinc-300 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
