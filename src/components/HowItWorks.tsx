export function HowItWorks() {
  const steps = [
    { step: '1', text: 'Pick a project' },
    { step: '2', text: 'Start the timer' },
    { step: '3', text: 'Review your week' },
  ]

  return (
    <section id="how-it-works" className="py-20 border-t bg-zinc-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white">
                {item.step}
              </span>
              <span className="text-zinc-900 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
