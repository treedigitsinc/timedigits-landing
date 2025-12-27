import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Zap } from 'lucide-react'

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

export function CTA() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section className="cta-section section" ref={ref}>
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.9)',
            }}
          >
            <Zap className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>

          {/* Headline */}
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '100ms'
            }}
          >
            Ready to start?
          </h2>

          {/* Subheadline */}
          <p
            className="mt-4 text-lg md:text-xl text-white/70 transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '200ms'
            }}
          >
            Join thousands who track their time the simple way.
          </p>

          {/* CTA Button */}
          <a
            href="#pricing"
            className="mt-10 btn h-14 px-10 text-base font-semibold bg-white text-teal hover:bg-white/90 inline-flex transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '300ms'
            }}
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          {/* Trust indicators */}
          <div
            className="mt-8 flex items-center justify-center gap-6 text-white/50 text-sm transition-all duration-700"
            style={{
              opacity: isInView ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            <span>No credit card</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Free forever for individuals</span>
          </div>
        </div>
      </div>
    </section>
  )
}
