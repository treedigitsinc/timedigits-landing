import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Free for individuals
          </div>

          {/* Headline - single consistent color */}
          <h1 className="animate-fade-in animate-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900">
            Track time.
            <br />
            That's it.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in animate-delay-200 mt-6 text-lg md:text-xl text-stone-600 max-w-xl mx-auto">
            Free forever for you. <span className="font-semibold text-stone-900">$1/user</span> for your team.
            <br className="hidden sm:block" />
            No tiers. No tricks. No enterprise pricing.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in animate-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-stone-900 px-8 text-sm font-medium text-white w-full sm:w-auto hover:bg-stone-800 btn-transition"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-stone-300 bg-white px-8 text-sm font-medium text-stone-900 w-full sm:w-auto hover:border-stone-400 hover:bg-stone-50 btn-transition"
            >
              See how it works
            </a>
          </div>

          {/* Trust line */}
          <p className="animate-fade-in animate-delay-400 mt-6 text-sm text-stone-500">
            No credit card required
          </p>
        </div>

        {/* Timer Preview */}
        <div className="animate-fade-in animate-delay-500 mt-16 md:mt-24 mx-auto max-w-lg">
          <div className="rounded-2xl border border-stone-200 bg-stone-950 p-1 shadow-2xl shadow-stone-900/20">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-stone-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-stone-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-stone-700" />
            </div>

            {/* Timer content */}
            <div className="rounded-xl bg-stone-900 p-8 md:p-10">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">
                  Currently tracking
                </p>
                <p className="text-5xl md:text-6xl font-light text-white tracking-wide font-mono">
                  02:34:17
                </p>
                <p className="text-sm text-stone-400 mt-4">
                  Project Alpha
                </p>

                {/* Stop button */}
                <button className="mt-8 h-14 w-14 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center mx-auto hover:bg-stone-700 transition-colors">
                  <div className="h-4 w-4 bg-white rounded-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
