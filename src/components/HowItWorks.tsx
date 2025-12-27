import { Play, MousePointer, FileText, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MousePointer,
    number: '01',
    title: 'Pick a project',
    description: 'Select from your list or create a new project in seconds.'
  },
  {
    icon: Play,
    number: '02',
    title: 'Start the timer',
    description: 'One click to start. One click to stop. That\'s it.'
  },
  {
    icon: FileText,
    number: '03',
    title: 'Review your week',
    description: 'See beautiful reports of where your time went.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Export & invoice',
    description: 'Send timesheets to clients or your accounting system.'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Start tracking in
            <br />
            <span className="gradient-text">under 10 seconds</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No tutorials needed. No training required. Just open the app and go.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -translate-x-1/2"></div>
              )}

              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
