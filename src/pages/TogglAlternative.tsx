import { ArrowRight, Check, X, Trophy, Wallet, Clock, Sparkle, ShieldCheck } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

// Feature comparison: timedigits vs Toggl
const featureComparison = [
  { feature: "One-click timer", timedigits: true, toggl: true },
  { feature: "Manual time entry", timedigits: true, toggl: true },
  { feature: "Unlimited projects", timedigits: true, toggl: false, note: "Toggl free: 5 projects" },
  { feature: "Basic reports", timedigits: true, toggl: true },
  { feature: "CSV export", timedigits: true, toggl: true },
  { feature: "Offline mode", timedigits: true, toggl: true },
  { feature: "Mobile apps", timedigits: true, toggl: true },
  { feature: "Team workspace", timedigits: true, toggl: true },
  { feature: "100+ integrations", timedigits: false, toggl: true, note: "Coming soon" },
  { feature: "Billable rates", timedigits: false, toggl: true, note: "Coming soon" },
  { feature: "Screenshots/monitoring", timedigits: false, toggl: false },
];

const pricingComparison = [
  { users: 1, toggl: "$0 (limited)", timedigits: "$0", savings: "Same" },
  { users: 5, toggl: "$50/mo", timedigits: "$5/mo", savings: "90%" },
  { users: 10, toggl: "$100/mo", timedigits: "$10/mo", savings: "90%" },
  { users: 25, toggl: "$250/mo", timedigits: "$25/mo", savings: "90%" },
  { users: 50, toggl: "$500/mo", timedigits: "$50/mo", savings: "90%" },
  { users: 100, toggl: "$1,000/mo", timedigits: "$100/mo", savings: "90%" },
];

const switchReasons = [
  {
    icon: Wallet,
    title: "Save 90% on costs",
    description: "A 10-person team on Toggl pays $100/month. On timedigits, that same team pays $10/month. That's $1,080/year back in your pocket.",
  },
  {
    icon: Sparkle,
    title: "Simpler interface",
    description: "Toggl has grown complex over the years. timedigits focuses on what matters: start timer, stop timer, see reports. No feature bloat.",
  },
  {
    icon: ShieldCheck,
    title: "No surveillance pressure",
    description: "Toggl doesn't have invasive monitoring, which is good. Neither does timedigits. We both respect worker privacy.",
  },
  {
    icon: Clock,
    title: "Same core features",
    description: "Timer, projects, reports, exports, mobile apps, offline mode. The features you actually use daily are the same.",
  },
];

export function TogglAlternative() {
  useSEO(seoData.togglAlternative);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              90% Cheaper Than Toggl
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Toggl Alternative That Costs 90% Less
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Love Toggl's simplicity but not the price? timedigits offers the same core time tracking features
              at a fraction of the cost. A 10-person team saves $1,080/year.
            </p>
            <a
              href="https://app.timedigits.ca/login"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/25"
            >
              <span>Try Free — No Credit Card</span>
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="rounded-3xl p-8 md:p-12 mb-20 border-2 border-teal-200 bg-teal-50/50 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Answer: Best Toggl Alternative?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is the best Toggl alternative for teams that want to save money
              without sacrificing core features. Here's the comparison:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-slate-900 font-semibold">Toggl Track</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>$10/user/month for teams</li>
                  <li>100+ integrations</li>
                  <li>Billable rates included</li>
                  <li>Free tier limited to 5 users</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-teal-600 font-semibold">timedigits</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li className="text-teal-600">$1/user/month for teams (90% less)</li>
                  <li>Integrations coming soon</li>
                  <li>Billable rates coming soon</li>
                  <li className="text-teal-600">Free tier unlimited for individuals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Toggl vs timedigits: Pricing
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              See how much you save at every team size.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                <div className="grid grid-cols-4 p-4 bg-slate-50 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Team Size</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Toggl</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">timedigits</div>
                  <div className="text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Savings</div>
                </div>
                {pricingComparison.map((row, i) => (
                  <div
                    key={row.users}
                    className={`grid grid-cols-4 p-4 items-center hover:bg-slate-50 transition-colors ${
                      i !== pricingComparison.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <div className="text-slate-900 font-medium">
                      {row.users} {row.users === 1 ? "user" : "users"}
                    </div>
                    <div className="text-center text-slate-500">{row.toggl}</div>
                    <div className="text-center text-teal-600 font-semibold">{row.timedigits}</div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold">
                        {row.savings}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Switch */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Why Switch from Toggl?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {switchReasons.map((reason) => (
                <div key={reason.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-colors">
                  <reason.icon size={28} className="text-teal-500 mb-4" />
                  <h3 className="text-slate-900 font-semibold mb-2">{reason.title}</h3>
                  <p className="text-slate-500 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              What you get with each tool.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                <div className="grid grid-cols-3 p-4 bg-slate-50 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Feature</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Toggl</div>
                </div>
                {featureComparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 p-4 items-center hover:bg-slate-50 transition-colors ${
                      i !== featureComparison.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <div className="text-slate-700 text-sm">
                      {row.feature}
                      {row.note && <span className="block text-xs text-slate-400">{row.note}</span>}
                    </div>
                    <div className="text-center">
                      {row.timedigits ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-100 mx-auto">
                          <Check size={16} className="text-teal-600" weight="bold" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 mx-auto">
                          <X size={16} className="text-slate-400" />
                        </span>
                      )}
                    </div>
                    <div className="text-center">
                      {row.toggl ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 mx-auto">
                          <Check size={16} className="text-slate-500" weight="bold" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 mx-auto">
                          <X size={16} className="text-slate-400" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Toggl Alternative FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Is timedigits really 90% cheaper than Toggl?</h3>
                <p className="text-slate-500">
                  Yes. Toggl charges $10/user/month for their Starter plan. timedigits charges $1/user/month
                  (after the first 5 users at $5/month flat). A 10-person team pays $100/month on Toggl vs $10/month on timedigits.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">What features does Toggl have that timedigits doesn't?</h3>
                <p className="text-slate-500">
                  Toggl has more integrations (100+) and billable rates built in. timedigits is adding both features soon.
                  For core time tracking (timer, projects, reports, exports), both tools are comparable.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Can I import my Toggl data?</h3>
                <p className="text-slate-500">
                  We're building a Toggl import tool. For now, you can export from Toggl as CSV and contact us for help
                  migrating historical data. Most users start fresh since active time tracking is what matters.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Is timedigits as reliable as Toggl?</h3>
                <p className="text-slate-500">
                  timedigits is built offline-first, so your timers keep running even without internet.
                  Data syncs automatically when you reconnect. We target 99.9% uptime like any modern SaaS.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-slate-900 font-semibold mb-2">Why is timedigits so much cheaper?</h3>
                <p className="text-slate-500">
                  We focus on core time tracking without building expensive enterprise sales teams or
                  bloated features. Lower overhead means lower prices. We make money at scale, not by overcharging.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="rounded-3xl p-8 md:p-12 border-2 border-teal-200 bg-teal-50">
              <Wallet size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Save 90% vs Toggl
              </h2>
              <p className="text-slate-600 mb-8">
                Same core features, 90% lower price. Try timedigits free — no credit card required.
              </p>
              <a
                href="https://app.timedigits.ca/login"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/25"
              >
                <span>Switch to timedigits Free</span>
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
