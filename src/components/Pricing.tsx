import { motion } from 'framer-motion'
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
    <section id="pricing" className="py-24 border-t">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-zinc-600">
            No per-seat tiers. No hidden costs. No enterprise pricing.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-xl p-8 ${
                plan.primary
                  ? 'bg-zinc-900 text-white ring-1 ring-zinc-900'
                  : 'bg-white border border-zinc-200 shadow-sm'
              }`}
            >
              {plan.primary && (
                <div className="inline-block bg-zinc-700 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <h3 className={`font-semibold text-lg ${plan.primary ? 'text-white' : 'text-zinc-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mt-1 ${plan.primary ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline">
                <span className={`text-4xl font-bold ${plan.primary ? 'text-white' : 'text-zinc-900'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={plan.primary ? 'text-zinc-400 ml-1' : 'text-zinc-500 ml-1'}>
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.primary ? 'text-zinc-400' : 'text-zinc-900'}`} />
                    <span className={plan.primary ? 'text-zinc-300' : 'text-zinc-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-medium transition-colors ${
                  plan.primary
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-16 max-w-md mx-auto">
          <p className="text-center text-sm font-medium text-zinc-900 mb-4">
            Compare to competitors
          </p>
          <div className="rounded-lg border border-zinc-200 overflow-hidden">
            {comparison.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  index < comparison.length - 1 ? 'border-b border-zinc-100' : ''
                }`}
              >
                <span className="text-zinc-600">{item.name}</span>
                <span className="text-zinc-400 line-through">{item.price}</span>
                <span className="font-medium text-zinc-900">Save {item.savings}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
