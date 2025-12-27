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
      'Works offline',
    ],
    cta: 'Start Free',
    primary: false,
  },
  {
    name: 'Team',
    price: '$1',
    period: '/user/month',
    description: 'For teams of any size',
    features: [
      'Everything in Solo',
      'Unlimited team members',
      'Shared workspace',
      'Team reports',
      'Real-time sync',
    ],
    cta: 'Start Trial',
    primary: true,
  },
]

const comparison = [
  { name: 'Toggl', price: '$9/user', savings: '89%' },
  { name: 'Harvest', price: '$12/user', savings: '92%' },
  { name: 'Clockify Pro', price: '$5/user', savings: '80%' },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-stone-200">
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            No per-seat tiers. No hidden costs. No enterprise pricing.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 card-hover ${
                plan.primary
                  ? 'bg-stone-900 text-white ring-2 ring-stone-900'
                  : 'bg-white border border-stone-200'
              }`}
            >
              {/* Popular badge - inside card */}
              {plan.primary && (
                <div className="inline-block self-start bg-stone-700 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              {/* Plan name and description */}
              <h3 className={`font-semibold text-xl ${plan.primary ? 'text-white' : 'text-stone-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.primary ? 'text-stone-400' : 'text-stone-600'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline">
                <span className={`text-5xl font-bold ${plan.primary ? 'text-white' : 'text-stone-900'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`ml-1 text-sm ${plan.primary ? 'text-stone-400' : 'text-stone-500'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features list */}
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.primary ? 'text-stone-400' : 'text-stone-900'}`} />
                    <span className={plan.primary ? 'text-stone-300' : 'text-stone-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="#"
                className={`mt-8 block w-full rounded-lg py-3.5 text-center text-sm font-semibold btn-transition ${
                  plan.primary
                    ? 'bg-white text-stone-900 hover:bg-stone-100'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Competitor comparison */}
        <div className="mt-20 max-w-md mx-auto">
          <p className="text-center text-sm font-semibold text-stone-900 mb-6">
            Compare to competitors
          </p>
          <div className="rounded-xl border border-stone-200 overflow-hidden bg-white">
            {comparison.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-5 py-4 text-sm ${
                  index < comparison.length - 1 ? 'border-b border-stone-100' : ''
                }`}
              >
                <span className="text-stone-600">{item.name}</span>
                <span className="text-stone-400 line-through">{item.price}</span>
                <span className="font-semibold text-stone-900">Save {item.savings}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center text-sm text-stone-500 mt-8">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
