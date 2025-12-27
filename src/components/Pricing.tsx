import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Solo',
    price: 'Free',
    description: 'For individuals',
    features: [
      'Unlimited time tracking',
      'Unlimited projects',
      'Full history',
      'Reports & export',
      'Works offline'
    ],
    cta: 'Start Free',
    primary: false
  },
  {
    name: 'Team',
    price: '$5',
    period: '/month',
    description: 'For teams up to 5',
    features: [
      'Everything in Solo',
      '5 team members',
      'Shared workspace',
      'Team reports',
      'Real-time sync'
    ],
    note: '+$1/month per extra member',
    cta: 'Start Trial',
    primary: true
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-zinc-600">
            No per-seat fees. No hidden costs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 ${
                plan.primary ? 'border-zinc-900 ring-1 ring-zinc-900' : 'border-zinc-200'
              }`}
            >
              <h3 className="font-semibold text-zinc-900">{plan.name}</h3>
              <p className="text-sm text-zinc-600 mt-1">{plan.description}</p>

              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                {plan.period && <span className="text-zinc-600 ml-1">{plan.period}</span>}
              </div>
              {plan.note && (
                <p className="text-xs text-zinc-500 mt-1">{plan.note}</p>
              )}

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-zinc-900 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-6 block w-full rounded-md py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.primary
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'border border-zinc-200 text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          No credit card required for free plan.
        </p>
      </div>
    </section>
  )
}
