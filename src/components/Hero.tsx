import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Typewriter effect component
function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  onComplete
}: {
  text: string
  delay?: number
  speed?: number
  onComplete?: () => void
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
      onComplete?.()
    }
  }, [displayedText, text, speed, hasStarted, onComplete])

  return (
    <span>
      {displayedText}
      {!isComplete && hasStarted && <span className="typewriter-cursor" />}
    </span>
  )
}

// Live timer component
function LiveTimer() {
  const [seconds, setSeconds] = useState(9257) // Start at 02:34:17
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="timer-card w-full max-w-md animate-slide-up delay-1600">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[hsl(var(--slate-700))]">
        <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--slate-600))]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--slate-600))]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--slate-600))]" />
      </div>

      {/* Timer content */}
      <div className="p-8 md:p-10 text-center">
        {/* Recording indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
          </span>
          <p className="text-xs uppercase tracking-widest text-[hsl(var(--slate-400))] font-mono">
            Currently tracking
          </p>
        </div>

        {/* Time display */}
        <p className="timer-display text-5xl md:text-6xl">
          {formatTime(seconds)}
        </p>

        {/* Project name */}
        <p className="text-sm text-[hsl(var(--slate-400))] mt-4 font-display">
          Project Alpha
        </p>

        {/* Stop button */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="timer-stop-btn mt-8 h-14 w-14 rounded-full flex items-center justify-center mx-auto"
        >
          {isRunning ? (
            <div className="h-4 w-4 bg-white rounded-sm" />
          ) : (
            <div className="h-0 w-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1" />
          )}
        </button>
      </div>
    </div>
  )
}

export function Hero() {
  const [line1Complete, setLine1Complete] = useState(false)

  return (
    <section className="section-dark min-h-screen flex flex-col justify-center pt-24 pb-16 relative">
      <div className="container relative z-10">
        {/* Centered content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-scale-in inline-flex items-center gap-2 rounded-full bg-[hsl(var(--slate-800))] border border-[hsl(var(--slate-700))] px-4 py-1.5 text-sm text-[hsl(var(--slate-300))] mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
            Free for individuals
          </div>

          {/* Headline with typewriter effect */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="block">
              <TypewriterText
                text="Track time."
                delay={400}
                speed={80}
                onComplete={() => setLine1Complete(true)}
              />
            </span>
            <span className="block text-teal-light mt-2">
              {line1Complete && (
                <TypewriterText
                  text="That's it."
                  delay={200}
                  speed={80}
                />
              )}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-1200 mt-8 text-lg md:text-xl text-[hsl(var(--slate-400))] max-w-xl mx-auto leading-relaxed font-display">
            Free forever for you. <span className="font-semibold text-white">$1/user</span> for your team.
            <br />
            No tiers. No tricks. No enterprise pricing.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-1400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="btn btn-primary h-12 px-8 text-base w-full sm:w-auto"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="btn h-12 px-8 text-base w-full sm:w-auto bg-transparent border border-[hsl(var(--slate-700))] text-white hover:bg-[hsl(var(--slate-800))]"
            >
              See how it works
            </a>
          </div>

          {/* Trust line */}
          <p className="animate-fade-in delay-1600 mt-6 text-sm text-[hsl(var(--slate-500))]">
            No credit card required
          </p>
        </div>

        {/* Timer Preview */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <LiveTimer />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <a href="#features" className="flex flex-col items-center gap-2 text-[hsl(var(--slate-500))] hover:text-[hsl(var(--slate-300))] transition-colors">
            <span className="text-xs uppercase tracking-widest font-mono">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
