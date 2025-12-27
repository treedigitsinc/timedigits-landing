import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Time tracking that
            <br />
            <span className="text-zinc-500">stays out of your way</span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600 max-w-xl mx-auto">
            Start a timer. Stop when done. That's it.
            <br />
            Free for individuals. $5/month for teams.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Simple app preview */}
        <div className="mt-16 md:mt-24 mx-auto max-w-2xl">
          <div className="rounded-lg border bg-zinc-950 p-1">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="rounded-md bg-zinc-900 p-8">
              <div className="text-center">
                <p className="text-xs text-zinc-500 mb-3">Currently tracking</p>
                <p className="text-5xl md:text-6xl font-mono text-white tracking-wider">
                  02:34:17
                </p>
                <p className="text-sm text-zinc-400 mt-3">Project Alpha</p>
                <button className="mt-6 h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto hover:bg-zinc-700 transition-colors">
                  <div className="h-3 w-3 bg-white rounded-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
