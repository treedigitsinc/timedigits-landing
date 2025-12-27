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
    <section id="features" className="section">
      <div className="container">
        {/* Section heading - centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-lg mx-auto">
            No bloat. No learning curve. Just the features that matter.
          </p>
        </div>

        {/* Features grid - centered */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 group-hover:bg-teal transition-colors duration-200">
                <feature.icon className="h-5 w-5 text-teal group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="mt-5 font-semibold text-[hsl(var(--foreground))] text-lg">{feature.title}</h3>
              <p className="mt-2 text-[hsl(var(--muted-foreground))] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
