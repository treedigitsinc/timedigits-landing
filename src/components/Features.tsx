import { motion } from 'framer-motion'
import { Timer, BarChart3, Download, Smartphone, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'One-click timer',
    description: 'Start and stop with a single click. No setup required.',
  },
  {
    icon: BarChart3,
    title: 'Simple reports',
    description: 'See where your time goes with clean weekly summaries.',
  },
  {
    icon: Download,
    title: 'Easy export',
    description: 'Export to CSV for invoicing or accounting.',
  },
  {
    icon: Smartphone,
    title: 'Works everywhere',
    description: 'Desktop, tablet, or phone. Your data syncs.',
  },
  {
    icon: Clock,
    title: 'Manual entry',
    description: 'Forgot to track? Add entries anytime.',
  },
  {
    icon: Users,
    title: 'Team ready',
    description: 'Share workspaces and track together.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 border-t bg-zinc-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="mt-4 text-zinc-600 max-w-lg mx-auto">
            No bloat. No learning curve. Just the features that matter.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group p-6 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 group-hover:bg-zinc-900 transition-colors">
                <feature.icon className="h-5 w-5 text-zinc-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-4 font-medium text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
