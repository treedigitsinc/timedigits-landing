import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Individual',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for freelancers and solo professionals',
    features: [
      'Unlimited time tracking',
      'Unlimited projects',
      'Weekly reports & dashboards',
      'Export to CSV',
      'Local data storage',
      'Works offline'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Team',
    price: '$1',
    period: 'per user / month',
    description: 'For teams that want to track time together',
    features: [
      'Everything in Individual',
      'Team member management',
      'Shared projects',
      'Cloud sync across devices',
      'Team reports & analytics',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Stupidly simple
            <br />
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No per-feature charges. No enterprise sales calls.
            <br />
            Just two plans that make sense.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-500/10'
                  : 'border border-gray-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Free' && (
                    <span className="text-gray-500 text-lg">/ {plan.period}</span>
                  )}
                </div>
                {plan.price === 'Free' && (
                  <span className="text-gray-500">{plan.period}</span>
                )}
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ / Trust */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">No credit card required.</span> Start free, upgrade when you're ready.
          </p>
        </div>
      </div>
    </section>
  )
}
