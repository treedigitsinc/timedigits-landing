import { ArrowRight, Check, Trophy, Storefront, UsersThree, ChartLine, CurrencyDollar, Export, Clock } from "@phosphor-icons/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const smBusinessFeatures = [
  {
    icon: CurrencyDollar,
    title: "Predictable pricing",
    description: "$5/month for up to 5 users, then $1/user. Know exactly what you'll pay as you grow.",
  },
  {
    icon: UsersThree,
    title: "Team tracking",
    description: "See what your team is working on. Track hours across employees and contractors.",
  },
  {
    icon: Clock,
    title: "Simple timer",
    description: "One click to start. One click to stop. No training needed, no learning curve.",
  },
  {
    icon: ChartLine,
    title: "Easy reports",
    description: "View hours by person, project, or date. Export for payroll or client invoicing.",
  },
  {
    icon: Export,
    title: "CSV export",
    description: "Export all data anytime. Import into QuickBooks, payroll systems, or spreadsheets.",
  },
  {
    icon: Storefront,
    title: "No enterprise bloat",
    description: "Built for small teams, not enterprises. No features you'll never use.",
  },
];

const businessTypes = [
  { type: "Service businesses", description: "Track billable hours for client work and internal projects." },
  { type: "Retail & restaurants", description: "Log employee shifts and track hours for payroll." },
  { type: "Construction & trades", description: "Track time on job sites and bill clients accurately." },
  { type: "Professional services", description: "Accountants, lawyers, consultants — bill every hour." },
  { type: "Creative studios", description: "Track project time for accurate quotes and invoicing." },
  { type: "Startups", description: "Simple tracking that grows with your team without breaking the bank." },
];

const pricingTiers = [
  { size: "Solo (1 person)", price: "Free", description: "Perfect for solopreneurs and freelancers" },
  { size: "Small team (2-5)", price: "$5/mo", description: "Includes all 5 users in the base price" },
  { size: "Growing team (6-10)", price: "$10/mo", description: "$5 base + $5 for additional users" },
  { size: "Established (11-20)", price: "$20/mo", description: "Still just $1/user after first 5" },
];

export function SmallBusinessTimeTracker() {
  useSEO(seoData.smallBusiness);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Built for Small Business
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Time Tracker for Small Businesses
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Track employee hours without enterprise pricing. $5/month for up to 5 users,
              then $1/user after. Free for solo owners.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Answer: Best Time Tracker for Small Business?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is ideal for small businesses because
              it's simple, affordable, and doesn't have enterprise bloat:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Predictable pricing</strong> — $5/month for up to 5 users, $1/user after</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Free for solo</strong> — solopreneurs pay nothing, forever</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">No learning curve</strong> — employees can start tracking in 60 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Payroll-ready exports</strong> — CSV exports for QuickBooks, ADP, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">No surveillance</strong> — track time, not employee activity</span>
              </li>
            </ul>
          </div>

          {/* Pricing Tiers */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Simple Pricing for Small Teams
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              No per-feature charges. No enterprise tiers. No surprises.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div key={tier.size} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                  <h3 className="text-slate-900 font-semibold mb-2">{tier.size}</h3>
                  <div className="text-3xl font-bold text-teal-500 mb-2">{tier.price}</div>
                  <p className="text-slate-500 text-sm">{tier.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Features Small Businesses Actually Need
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Everything useful, nothing extra.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {smBusinessFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <feature.icon size={28} className="text-teal-500 mb-4" />
                  <h3 className="text-slate-900 font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Perfect For All Small Businesses
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Whatever your industry, timedigits helps track time.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {businessTypes.map((item) => (
                <div key={item.type} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="text-slate-900 font-medium mb-1">{item.type}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Cost Comparison for Small Teams
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              See how much you save with timedigits.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="grid grid-cols-4 p-4 bg-slate-50 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Team</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Toggl</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Harvest</div>
                </div>
                {[
                  { team: "5 employees", timedigits: "$5/mo", toggl: "$50/mo", harvest: "$55/mo" },
                  { team: "10 employees", timedigits: "$10/mo", toggl: "$100/mo", harvest: "$110/mo" },
                  { team: "15 employees", timedigits: "$15/mo", toggl: "$150/mo", harvest: "$165/mo" },
                  { team: "20 employees", timedigits: "$20/mo", toggl: "$200/mo", harvest: "$220/mo" },
                ].map((row, i) => (
                  <div key={row.team} className={`grid grid-cols-4 p-4 ${i !== 3 ? "border-b border-slate-100" : ""}`}>
                    <div className="text-slate-600 text-sm">{row.team}</div>
                    <div className="text-center text-teal-600 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-slate-500 text-sm">{row.toggl}</div>
                    <div className="text-center text-slate-500 text-sm">{row.harvest}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Small Business FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">What's the best time tracker for small business?</h3>
                <p className="text-slate-600">
                  timedigits is ideal because it combines team features with affordable pricing. $5/month
                  covers up to 5 employees. Compare to Toggl at $50/month or Harvest at $55/month for the same team.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">How much does employee time tracking cost?</h3>
                <p className="text-slate-600">
                  With timedigits: free for 1 person, $5/month for 2-5 employees, then add $1/month per
                  additional employee. A 10-person team costs $10/month.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can I use timedigits for payroll?</h3>
                <p className="text-slate-600">
                  Yes. Export employee hours to CSV and import into your payroll system (QuickBooks, ADP,
                  Gusto, etc.). All time data exports cleanly for payroll processing.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Is there employee monitoring?</h3>
                <p className="text-slate-600">
                  No. timedigits tracks time only — no screenshots, no keystroke logging, no GPS tracking.
                  We believe in trusting employees while tracking hours for billing and payroll.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can employees track time on mobile?</h3>
                <p className="text-slate-600">
                  Yes. timedigits has iOS and Android apps. Employees can track time from anywhere —
                  job sites, client meetings, or home. Everything syncs automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-teal-500/20 shadow-sm">
              <Storefront size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Tracking Your Team's Hours
              </h2>
              <p className="text-slate-600 mb-8">
                14-day free trial. $5/month for up to 5 employees. No credit card required.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
              <p className="text-slate-500 text-sm mt-4">
                Join thousands of small businesses tracking time with timedigits
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
