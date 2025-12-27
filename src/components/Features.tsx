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
    <section id="features" className="py-20 md:py-28 border-t border-stone-200 bg-stone-50/50">
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-lg mx-auto">
            No bloat. No learning curve. Just the features that matter.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white border border-stone-200 card-hover"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 group-hover:bg-stone-900 transition-colors duration-200">
                <feature.icon className="h-5 w-5 text-stone-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
