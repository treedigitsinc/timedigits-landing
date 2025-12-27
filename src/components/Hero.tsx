import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="section">
      <div className="container">
        {/* Centered content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-white px-4 py-1.5 text-sm text-[hsl(var(--muted-foreground))] mb-8">
            <span className="w-2 h-2 rounded-full bg-teal" />
            Free for individuals
          </div>

          {/* Headline - treedigits style */}
          <h1 className="animate-fade-in animate-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[hsl(var(--foreground))] leading-tight">
            timedigits tracks time
            <br />
            <span className="text-teal border-b-2 border-teal">simple and fast</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in animate-delay-200 mt-8 text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-xl mx-auto leading-relaxed">
            Free forever for you. <span className="font-semibold text-[hsl(var(--foreground))]">$1/user</span> for your team.
            <br />
            No tiers. No tricks. No enterprise pricing.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in animate-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="btn btn-primary h-12 px-8 text-base w-full sm:w-auto"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="btn btn-outline h-12 px-8 text-base w-full sm:w-auto"
            >
              See how it works
            </a>
          </div>

          {/* Trust line */}
          <p className="animate-fade-in animate-delay-400 mt-6 text-sm text-[hsl(var(--muted-foreground))]">
            No credit card required
          </p>
        </div>

        {/* Timer Preview - properly centered */}
        <div className="animate-fade-in animate-delay-500 mt-16 md:mt-24 flex justify-center">
          <div className="card p-1 shadow-xl w-full max-w-md">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[hsl(var(--border))]">
              <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--border))]" />
            </div>

            {/* Timer content */}
            <div className="p-8 md:p-10 text-center">
              <p className="text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-4">
                Currently tracking
              </p>
              <p className="text-5xl md:text-6xl font-light text-[hsl(var(--foreground))] tracking-wide font-mono">
                02:34:17
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
                Project Alpha
              </p>

              {/* Stop button */}
              <button className="mt-8 h-14 w-14 rounded-full bg-teal flex items-center justify-center mx-auto hover:opacity-90 transition-opacity">
                <div className="h-4 w-4 bg-white rounded-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
