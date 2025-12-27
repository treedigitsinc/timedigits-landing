import {
  Timer,
  BarChart3,
  Users,
  Zap,
  Shield,
  Download,
  Smartphone,
  Clock,
  FileSpreadsheet
} from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'One-Click Timer',
    description: 'Start tracking with a single click. No setup, no configuration, just press play.'
  },
  {
    icon: BarChart3,
    title: 'Visual Reports',
    description: 'Beautiful charts and dashboards show exactly where your time goes each week.'
  },
  {
    icon: Users,
    title: 'Team Ready',
    description: 'Add your team members and track time across projects together.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed. No loading screens, no waiting. Just instant time tracking.'
  },
  {
    icon: Shield,
    title: 'Your Data, Your Control',
    description: 'All data stored locally by default. Optional cloud sync for teams.'
  },
  {
    icon: Download,
    title: 'Easy Export',
    description: 'Export to CSV or copy to clipboard. Works with any invoicing tool.'
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    description: 'Use on desktop, tablet, or phone. Your time syncs across all devices.'
  },
  {
    icon: Clock,
    title: 'Manual Entry',
    description: 'Forgot to start the timer? No problem. Add time entries manually anytime.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Weekly Timesheets',
    description: 'Professional timesheets ready for clients or your accounting software.'
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We stripped away the complexity. What's left is pure, simple time tracking that just works.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
