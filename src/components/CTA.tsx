import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="section bg-teal">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to start?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Join thousands who track their time the simple way.
          </p>
          <a
            href="#pricing"
            className="mt-8 btn h-14 px-10 text-base font-semibold bg-white text-teal hover:bg-white/90"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
