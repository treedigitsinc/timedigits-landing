import { useEffect, useRef, useState } from 'react'
import { Timer, BarChart3, Download, Smartphone, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Timer,
    title: 'One-click timer',
    description: 'Start and stop with a single click. No setup required.',
    wide: false,
  },
  {
    icon: BarChart3,
    title: 'Simple reports',
    description: 'See where your time goes with clean weekly summaries.',
    wide: false,
  },
  {
    icon: Smartphone,
    title: 'Works everywhere',
    description: 'Desktop, tablet, or phone. Your data syncs instantly across all your devices.',
    wide: true,
  },
  {
    icon: Download,
    title: 'Easy export',
    description: 'Export to CSV for invoicing or accounting.',
    wide: false,
  },
  {
    icon: Clock,
    title: 'Manual entry',
    description: 'Forgot to track? Add entries anytime.',
    wide: false,
  },
  {
    icon: Users,
    title: 'Team ready',
    description: 'Share workspaces and track together.',
    wide: false,
  },
]

// Hook for scroll-triggered animations
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

export function Features() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        {/* Section heading - centered */}
        <div className="text-center mb-16" ref={ref}>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Everything you need
          </h2>
          <p className={`mt-4 text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-lg mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            No bloat. No learning curve. Just the features that matter.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="bento-grid max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card group ${feature.wide ? 'bento-wide' : ''} transition-all duration-700`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${200 + index * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="bento-icon group-hover:scale-110 group-hover:bg-teal group-hover:text-white transition-all duration-200">
                <feature.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-[hsl(var(--foreground))] text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 text-[hsl(var(--muted-foreground))] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
