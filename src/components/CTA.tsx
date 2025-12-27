import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-stone-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to start?
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Join thousands who track their time the simple way.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-white px-10 text-base font-semibold text-stone-900 btn-transition hover:bg-stone-100"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
