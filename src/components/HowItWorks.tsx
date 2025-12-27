const steps = [
  { step: '1', text: 'Pick a project' },
  { step: '2', text: 'Start the timer' },
  { step: '3', text: 'Review your week' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-stone-200">
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 md:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6">
              {/* Step circle */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white font-semibold text-sm shrink-0 btn-transition hover:bg-stone-800">
                {item.step}
              </div>

              {/* Step text */}
              <span className="text-stone-900 font-medium text-lg">{item.text}</span>

              {/* Connector line (not after last) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-12 md:w-20 h-px bg-stone-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
