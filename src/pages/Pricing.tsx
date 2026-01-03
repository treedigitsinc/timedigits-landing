import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const plans = [
  {
    name: "Solo",
    price: "Free",
    period: "forever",
    description: "Perfect for freelancers and individuals tracking their own time.",
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Team",
    price: "$5",
    period: "/month",
    description: "Everything in Solo, plus powerful team and business features.",
    cta: "Start Free Trial",
    highlight: true,
  },
];

const featureCategories = [
  {
    name: "Time Tracking",
    features: [
      { name: "Unlimited time entries", solo: true, team: true },
      { name: "One-click timer", solo: true, team: true },
      { name: "Manual time entry", solo: true, team: true },
      { name: "Project-based tracking", solo: true, team: true },
      { name: "Task descriptions & notes", solo: true, team: true },
      { name: "Tags & categorization", solo: true, team: true },
      { name: "Offline tracking", solo: true, team: true },
    ],
  },
  {
    name: "Projects & Organization",
    features: [
      { name: "Unlimited projects", solo: true, team: true },
      { name: "Project budgets", solo: true, team: true },
      { name: "Project categories", solo: true, team: true },
      { name: "Archive & organize projects", solo: true, team: true },
      { name: "Color coding", solo: true, team: true },
      { name: "Project templates", solo: false, team: true },
      { name: "Client management", solo: false, team: true },
    ],
  },
  {
    name: "Reports & Analytics",
    features: [
      { name: "Personal time reports", solo: true, team: true },
      { name: "Weekly summaries", solo: true, team: true },
      { name: "Project breakdowns", solo: true, team: true },
      { name: "Team reports & dashboards", solo: false, team: true },
      { name: "Billable vs non-billable analysis", solo: false, team: true },
      { name: "Team productivity insights", solo: false, team: true },
      { name: "Custom date ranges", solo: false, team: true },
    ],
  },
  {
    name: "Export & Invoicing",
    features: [
      { name: "Basic CSV export", solo: true, team: true },
      { name: "Advanced export options", solo: false, team: true },
      { name: "PDF exports", solo: false, team: true },
      { name: "Invoice generation", solo: false, team: true },
      { name: "Custom invoice templates", solo: false, team: true },
      { name: "Hourly rate management", solo: false, team: true },
      { name: "Multi-currency support", solo: false, team: true },
    ],
  },
  {
    name: "Team & Collaboration",
    features: [
      { name: "Single user", solo: true, team: false },
      { name: "Up to 5 team members included", solo: false, team: true },
      { name: "Additional members (+$1/each)", solo: false, team: true },
      { name: "Team workspaces", solo: false, team: true },
      { name: "Real-time collaboration", solo: false, team: true },
      { name: "Permission controls", solo: false, team: true },
      { name: "Activity feed", solo: false, team: true },
    ],
  },
  {
    name: "API, MCP & Integrations",
    features: [
      { name: "REST API access", solo: false, team: true },
      { name: "MCP server for AI agents", solo: false, team: true },
      { name: "Claude, ChatGPT & AI assistant integration", solo: false, team: true },
      { name: "Jira integration", solo: false, team: true },
      { name: "Linear integration", solo: false, team: true },
      { name: "Asana integration", solo: false, team: true },
      { name: "Webhooks", solo: false, team: true },
      { name: "Zapier & Make automation", solo: false, team: true },
    ],
  },
  {
    name: "Support & Security",
    features: [
      { name: "Email support", solo: true, team: true },
      { name: "Priority support", solo: false, team: true },
      { name: "Data encryption (AES-256)", solo: true, team: true },
      { name: "Two-factor authentication", solo: true, team: true },
      { name: "SSO / SAML", solo: false, team: true },
      { name: "Audit logs", solo: false, team: true },
      { name: "Data export & portability", solo: true, team: true },
    ],
  },
];

export function Pricing() {
  useEffect(() => {
    document.title = "Pricing | timedigits";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        {/* Hero */}
        <div className="container max-w-5xl text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Free forever for individuals. $5/month for teams with enterprise-grade features.
            No hidden fees. No per-seat pricing games.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="container max-w-4xl mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all ${
                  plan.highlight
                    ? "bg-teal-50 border-2 border-teal-200"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h2 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <p className="text-slate-500 mb-6">{plan.description}</p>

                <a
                  href="https://app.timedigits.ca/login"
                  className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </a>

                {plan.name === "Team" && (
                  <p className="text-xs text-slate-400 text-center mt-3">
                    Includes 5 team members. +$1/month per additional member.
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8">
            No credit card required to start. Cancel anytime.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Compare all features
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 w-32">Solo</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 w-32 bg-teal-50 rounded-t-xl">Team</th>
                </tr>
              </thead>
              <tbody>
                {featureCategories.map((category, categoryIndex) => (
                  <Fragment key={`cat-${categoryIndex}`}>
                    <tr className="bg-slate-50">
                      <td colSpan={3} className="py-3 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wider">
                        {category.name}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={`feat-${categoryIndex}-${featureIndex}`}
                        className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-3 px-4 text-slate-600">{feature.name}</td>
                        <td className="py-3 px-4 text-center">
                          {feature.solo ? (
                            <Check size={20} weight="bold" className="text-teal-500 mx-auto" />
                          ) : (
                            <X size={20} weight="bold" className="text-slate-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-teal-50/50">
                          {feature.team ? (
                            <Check size={20} weight="bold" className="text-teal-500 mx-auto" />
                          ) : (
                            <X size={20} weight="bold" className="text-slate-300 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container max-w-3xl mt-20">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Pricing FAQ
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Is Solo really free forever?</h3>
              <p className="text-slate-500">
                Yes. Solo is 100% free with no time limits, no trial periods, and no credit card required.
                We believe individuals deserve great tools without paying enterprise prices.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How does Team pricing work?</h3>
              <p className="text-slate-500">
                Team is $5/month flat, which includes 5 team members. Need more? Each additional member
                is just $1/month. No per-seat pricing traps—a team of 20 costs just $20/month.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Can I upgrade or downgrade anytime?</h3>
              <p className="text-slate-500">
                Absolutely. Upgrade to Team when you need collaboration features, or downgrade back to Solo
                if your needs change. Your data is always yours.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What's an MCP server?</h3>
              <p className="text-slate-500">
                MCP (Model Context Protocol) lets AI assistants like Claude and ChatGPT interact directly
                with timedigits. Your AI can start timers, log time, generate reports, and more—all through
                natural conversation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Do you offer annual billing?</h3>
              <p className="text-slate-500">
                We keep it simple with monthly billing only. At $5/month, we don't think you need the
                commitment of annual plans. Cancel anytime with no penalties.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How do you compare to Toggl or Harvest?</h3>
              <p className="text-slate-500">
                Toggl charges $10-20 per user per month. Harvest charges $12 per user. A 10-person team
                on Toggl costs $100-200/month. On timedigits? $10/month. Same features, 90% cheaper.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center gap-1"
            >
              View all FAQs
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="container max-w-3xl mt-20">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to track time the simple way?
            </h2>
            <p className="text-slate-400 mb-8">
              Join thousands who switched from overpriced tools.
            </p>
            <a
              href="https://app.timedigits.ca/login"
              className="group inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-400 transition-all"
            >
              Start Free Now
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
