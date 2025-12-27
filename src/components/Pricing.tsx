import { Check, Sparkles, Users } from 'lucide-react'

const plans = [
  {
    name: 'Solo',
    price: 'Free',
    period: 'forever',
    description: 'Everything you need to track your time, no strings attached',
    features: [
      'Unlimited time tracking',
      'Unlimited projects',
      'Full history forever',
      'All reports & dashboards',
      'Export to CSV & PDF',
      'Cloud backup',
      'Works offline'
    ],
    cta: 'Start Free Forever',
    popular: false
  },
  {
    name: 'Team',
    price: '$5',
    period: 'month',
    description: 'For teams that want to track time together',
    features: [
      'Everything in Solo',
      '5 team members included',
      'Shared team workspace',
      'Team dashboard & analytics',
      'Combined team reports',
      'Real-time sync across devices',
      'Priority support'
    ],
    additionalInfo: '+$1/month per extra member',
    cta: 'Start Team Trial',
    popular: true
  }
]

const comparison = [
  { competitor: 'Toggl', price: '$45/mo', savings: '89%' },
  { competitor: 'Harvest', price: '$54/mo', savings: '91%' },
  { competitor: 'Clockify Pro', price: '$40/mo', savings: '88%' },
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
            Free for individuals. <span className="font-semibold text-emerald-600">$5/month</span> for your whole team.
            <br />
            Not per seat. Not per feature. Just $5.
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
                    Best Value
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
                {plan.additionalInfo && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">
                    <Users className="w-4 h-4" />
                    {plan.additionalInfo}
                  </div>
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

        {/* Competitor Comparison */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
            See how much you save (5-person team)
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
              <div>Tool</div>
              <div>Their Price</div>
              <div>TimeDigits</div>
              <div>You Save</div>
            </div>
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 last:border-0">
                <div className="font-medium text-gray-900">{item.competitor}</div>
                <div className="text-gray-600">{item.price}</div>
                <div className="text-emerald-600 font-semibold">$5/mo</div>
                <div className="text-emerald-600 font-bold">{item.savings}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">No credit card required.</span> Free means free. Teams can trial for 14 days.
          </p>
        </div>
      </div>
    </section>
  )
}
