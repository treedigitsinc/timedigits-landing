import { Timer, BarChart3, Download, Smartphone, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'One-click timer',
    description: 'Start and stop with a single click. No setup required.'
  },
  {
    icon: BarChart3,
    title: 'Simple reports',
    description: 'See where your time goes with clean weekly summaries.'
  },
  {
    icon: Download,
    title: 'Easy export',
    description: 'Export to CSV for invoicing or accounting.'
  },
  {
    icon: Smartphone,
    title: 'Works everywhere',
    description: 'Desktop, tablet, or phone. Your data syncs.'
  },
  {
    icon: Clock,
    title: 'Manual entry',
    description: 'Forgot to track? Add entries anytime.'
  },
  {
    icon: Users,
    title: 'Team ready',
    description: 'Share workspaces and track together.'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 border-t">
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
            <div key={index} className="group">
              <feature.icon className="h-5 w-5 text-zinc-900 mb-3" />
              <h3 className="font-medium text-zinc-900">{feature.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
