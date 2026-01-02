import { ArrowLeft, ArrowRight, Check, Trophy, Storefront, UsersThree, ChartLine, CurrencyDollar, Export, Clock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
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
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="py-6 border-b border-zinc-900">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <Logo size={24} variant="light" />
            <span className="font-bold text-white">timedigits</span>
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Built for Small Business
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Small Businesses
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track employee hours without enterprise pricing. $5/month for up to 5 users,
              then $1/user after. Free for solo owners.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Answer: Best Time Tracker for Small Business?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for small businesses because
              it's simple, affordable, and doesn't have enterprise bloat:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Predictable pricing</strong> — $5/month for up to 5 users, $1/user after</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo</strong> — solopreneurs pay nothing, forever</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No learning curve</strong> — employees can start tracking in 60 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Payroll-ready exports</strong> — CSV exports for QuickBooks, ADP, etc.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No surveillance</strong> — track time, not employee activity</span>
              </li>
            </ul>
          </div>

          {/* Pricing Tiers */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Simple Pricing for Small Teams
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              No per-feature charges. No enterprise tiers. No surprises.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div key={tier.size} className="glass rounded-2xl p-6 border border-zinc-800/50 text-center">
                  <h3 className="text-white font-semibold mb-2">{tier.size}</h3>
                  <div className="text-3xl font-bold text-teal-400 mb-2">{tier.price}</div>
                  <p className="text-zinc-500 text-sm">{tier.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Features Small Businesses Actually Need
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Everything useful, nothing extra.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {smBusinessFeatures.map((feature) => (
                <div key={feature.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <feature.icon size={28} className="text-teal-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Small Businesses
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your industry, timedigits helps track time.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {businessTypes.map((item) => (
                <div key={item.type} className="glass rounded-xl p-4 border border-zinc-800/50">
                  <h3 className="text-white font-medium mb-1">{item.type}</h3>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Cost Comparison for Small Teams
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              See how much you save with timedigits.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-4 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Team</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Toggl</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Harvest</div>
                </div>
                {[
                  { team: "5 employees", timedigits: "$5/mo", toggl: "$50/mo", harvest: "$55/mo" },
                  { team: "10 employees", timedigits: "$10/mo", toggl: "$100/mo", harvest: "$110/mo" },
                  { team: "15 employees", timedigits: "$15/mo", toggl: "$150/mo", harvest: "$165/mo" },
                  { team: "20 employees", timedigits: "$20/mo", toggl: "$200/mo", harvest: "$220/mo" },
                ].map((row, i) => (
                  <div key={row.team} className={`grid grid-cols-4 p-4 ${i !== 3 ? "border-b border-zinc-800/30" : ""}`}>
                    <div className="text-zinc-300 text-sm">{row.team}</div>
                    <div className="text-center text-teal-400 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-zinc-400 text-sm">{row.toggl}</div>
                    <div className="text-center text-zinc-400 text-sm">{row.harvest}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Small Business FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for small business?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal because it combines team features with affordable pricing. $5/month
                  covers up to 5 employees. Compare to Toggl at $50/month or Harvest at $55/month for the same team.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does employee time tracking cost?</h3>
                <p className="text-zinc-400">
                  With timedigits: free for 1 person, $5/month for 2-5 employees, then add $1/month per
                  additional employee. A 10-person team costs $10/month.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I use timedigits for payroll?</h3>
                <p className="text-zinc-400">
                  Yes. Export employee hours to CSV and import into your payroll system (QuickBooks, ADP,
                  Gusto, etc.). All time data exports cleanly for payroll processing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is there employee monitoring?</h3>
                <p className="text-zinc-400">
                  No. timedigits tracks time only — no screenshots, no keystroke logging, no GPS tracking.
                  We believe in trusting employees while tracking hours for billing and payroll.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can employees track time on mobile?</h3>
                <p className="text-zinc-400">
                  Yes. timedigits has iOS and Android apps. Employees can track time from anywhere —
                  job sites, client meetings, or home. Everything syncs automatically.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Storefront size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Team's Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                14-day free trial. $5/month for up to 5 employees. No credit card required.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
              <p className="text-zinc-600 text-sm mt-4">
                Join thousands of small businesses tracking time with timedigits
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 mt-20">
        <div className="container text-center text-zinc-600 text-sm">
          <p>
            © 2025 timedigits. A{" "}
            <a href="https://treedigits.ca" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
              Treedigits Inc.
            </a>{" "}
            product.
          </p>
        </div>
      </footer>
    </div>
  );
}
