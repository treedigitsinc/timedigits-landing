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
    <section id="pricing" className="section">
      <div className="container">
        {/* Section heading - centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            No per-seat tiers. No hidden costs. No enterprise pricing.
          </p>
        </div>

        {/* Pricing cards - centered */}
        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.primary
                  ? 'bg-teal text-white ring-2 ring-teal'
                  : 'card'
              }`}
            >
              {/* Popular badge - inside card */}
              {plan.primary && (
                <div className="inline-block self-start bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              {/* Plan name and description */}
              <h3 className={`font-semibold text-xl ${plan.primary ? 'text-white' : 'text-[hsl(var(--foreground))]'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.primary ? 'text-white/70' : 'text-[hsl(var(--muted-foreground))]'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline">
                <span className={`text-5xl font-bold ${plan.primary ? 'text-white' : 'text-[hsl(var(--foreground))]'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`ml-1 text-sm ${plan.primary ? 'text-white/70' : 'text-[hsl(var(--muted-foreground))]'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features list */}
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.primary ? 'text-white/70' : 'text-teal'}`} />
                    <span className={plan.primary ? 'text-white/90' : 'text-[hsl(var(--foreground))]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="#"
                className={`mt-8 btn h-12 w-full text-sm font-semibold ${
                  plan.primary
                    ? 'bg-white text-teal hover:bg-white/90'
                    : 'btn-primary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Competitor comparison - centered */}
        <div className="mt-20 max-w-md mx-auto">
          <p className="text-center text-sm font-semibold text-[hsl(var(--foreground))] mb-6">
            Compare to competitors
          </p>
          <div className="card overflow-hidden">
            {comparison.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-5 py-4 text-sm ${
                  index < comparison.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''
                }`}
              >
                <span className="text-[hsl(var(--muted-foreground))]">{item.name}</span>
                <span className="text-[hsl(var(--muted-foreground))] line-through">{item.price}</span>
                <span className="font-semibold text-teal">Save {item.savings}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <p className="text-center text-sm text-[hsl(var(--muted-foreground))] mt-8">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
