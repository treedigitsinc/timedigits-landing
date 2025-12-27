import { useEffect, useRef, useState } from 'react'
import { FolderOpen, Play, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FolderOpen,
    title: 'Pick a project',
    description: 'Select from your project list or create a new one in seconds.',
  },
  {
    number: 2,
    icon: Play,
    title: 'Start the timer',
    description: "Click once to begin tracking. That's it. No complex setup.",
  },
  {
    number: 3,
    icon: BarChart3,
    title: 'Review your week',
    description: 'Get clear insights with automated weekly reports delivered to you.',
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function HowItWorks() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        {/* Section heading - centered */}
        <div className="text-center mb-20" ref={ref}>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How it works
          </h2>
          <p className={`mt-4 text-lg text-[hsl(var(--muted-foreground))] transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Three simple steps to take control of your time
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline max-w-4xl mx-auto">
          {/* Connecting line */}
          <div
            className="timeline-line transition-all duration-1000"
            style={{
              transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transitionDelay: '400ms'
            }}
          />

          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="timeline-step transition-all duration-700"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${300 + index * 200}ms`
                }}
              >
                {/* Number circle */}
                <div className="timeline-number">
                  <span className="font-mono">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] group-hover:bg-teal group-hover:text-white transition-colors">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-[hsl(var(--foreground))] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
