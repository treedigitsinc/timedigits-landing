import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 border-t bg-zinc-50">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start?
          </h2>
          <p className="mt-4 text-zinc-600">
            Join thousands who track their time the simple way.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
