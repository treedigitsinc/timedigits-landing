const steps = [
  { step: '1', text: 'Pick a project' },
  { step: '2', text: 'Start the timer' },
  { step: '3', text: 'Review your week' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container">
        {/* Section heading - centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            How it works
          </h2>
        </div>

        {/* Steps - centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-12 max-w-3xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-6">
              {/* Step circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white font-semibold text-lg shrink-0">
                {item.step}
              </div>

              {/* Step text */}
              <span className="text-[hsl(var(--foreground))] font-medium text-lg">{item.text}</span>

              {/* Connector line (not after last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 lg:w-24 h-px bg-teal/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
