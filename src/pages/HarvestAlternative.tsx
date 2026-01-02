import { ArrowLeft, ArrowRight, Check, X, Trophy, Wallet, Clock, CurrencyDollar, Receipt, ShieldCheck } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const featureComparison = [
  { feature: "One-click timer", timedigits: true, harvest: true },
  { feature: "Manual time entry", timedigits: true, harvest: true },
  { feature: "Unlimited projects", timedigits: true, harvest: false },
  { feature: "Mobile apps", timedigits: true, harvest: true },
  { feature: "CSV export", timedigits: true, harvest: true },
  { feature: "Offline mode", timedigits: true, harvest: false },
  { feature: "Team reports", timedigits: true, harvest: true },
  { feature: "Free for individuals", timedigits: true, harvest: false },
  { feature: "Built-in invoicing", timedigits: false, harvest: true },
  { feature: "No surveillance", timedigits: true, harvest: true },
];

const pricingComparison = [
  { users: "1 user", timedigits: "Free", harvest: "$11/mo", savings: "$132/yr" },
  { users: "5 users", timedigits: "$5/mo", harvest: "$55/mo", savings: "$600/yr" },
  { users: "10 users", timedigits: "$10/mo", harvest: "$110/mo", savings: "$1,200/yr" },
  { users: "20 users", timedigits: "$20/mo", harvest: "$220/mo", savings: "$2,400/yr" },
  { users: "50 users", timedigits: "$50/mo", harvest: "$550/mo", savings: "$6,000/yr" },
];

const switchReasons = [
  {
    icon: CurrencyDollar,
    title: "91% cheaper",
    description: "Harvest costs $11/user. timedigits costs $1/user. Same core features, fraction of the price.",
  },
  {
    icon: Wallet,
    title: "Free for individuals",
    description: "Harvest has no free plan. timedigits is free forever for solo users. No limits.",
  },
  {
    icon: Clock,
    title: "Offline mode",
    description: "Harvest requires internet. timedigits works offline and syncs when you reconnect.",
  },
  {
    icon: ShieldCheck,
    title: "Unlimited projects",
    description: "Harvest limits free projects. timedigits has unlimited projects on all plans.",
  },
];

export function HarvestAlternative() {
  useSEO(seoData.harvestAlternative);

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
              Harvest Alternative
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Harvest Alternative That's 91% Cheaper
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Love Harvest but hate the price? timedigits offers the same core time tracking
              at $1/user instead of $11/user. Free for individuals.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
              >
                <span>Try timedigits Free</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Answer: Is timedigits a Good Harvest Alternative?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">Yes, if you want to save money on time tracking.</strong> Here's
              the honest comparison:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">91% cheaper</strong> — $1/user vs Harvest's $11/user</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for individuals</strong> — Harvest has no free plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Offline mode</strong> — track time without internet</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Same core features</strong> — timer, projects, reports, export</span>
              </li>
            </ul>
            <p className="text-zinc-400 mt-6 text-sm">
              <strong>Note:</strong> Choose Harvest if you need built-in invoicing. timedigits exports to CSV
              for use with external invoicing tools. Built-in invoicing coming soon.
            </p>
          </div>

          {/* Why Switch */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Why People Switch from Harvest
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common reasons users move to timedigits.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {switchReasons.map((reason) => (
                <div key={reason.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <reason.icon size={28} className="text-teal-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{reason.title}</h3>
                  <p className="text-zinc-400 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Pricing: timedigits vs Harvest
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              See how much you save at every team size.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-4 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Team Size</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Harvest</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-green-400">Yearly Savings</div>
                </div>
                {pricingComparison.map((row, i) => (
                  <div key={row.users} className={`grid grid-cols-4 p-4 ${i !== pricingComparison.length - 1 ? "border-b border-zinc-800/30" : ""}`}>
                    <div className="text-zinc-300 text-sm font-medium">{row.users}</div>
                    <div className="text-center text-teal-400 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-zinc-400 text-sm">{row.harvest}</div>
                    <div className="text-center text-green-400 text-sm font-medium">{row.savings}</div>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm text-center mt-4">
                Harvest pricing: $11/seat/month. timedigits: Free for individuals, $5 + $1/user for teams.
              </p>
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Feature Comparison
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Side-by-side comparison of timedigits vs Harvest.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-3 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Feature</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Harvest</div>
                </div>
                {featureComparison.map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-3 p-4 ${i !== featureComparison.length - 1 ? "border-b border-zinc-800/30" : ""}`}>
                    <div className="text-zinc-300 text-sm">{row.feature}</div>
                    <div className="flex justify-center">
                      {row.timedigits ? (
                        <Check size={20} className="text-teal-400" weight="bold" />
                      ) : (
                        <X size={20} className="text-zinc-600" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.harvest ? (
                        <Check size={20} className="text-zinc-400" weight="bold" />
                      ) : (
                        <X size={20} className="text-zinc-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Harvest vs timedigits FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits a good Harvest alternative?</h3>
                <p className="text-zinc-400">
                  Yes, for pure time tracking. timedigits costs 91% less ($1/user vs $11/user) and offers the same
                  core features: timer, projects, reports, and export. The main thing Harvest has that we don't
                  (yet) is built-in invoicing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does timedigits cost vs Harvest?</h3>
                <p className="text-zinc-400">
                  timedigits is free for individuals. Teams pay $5/month (includes 5 users) + $1/user after.
                  Harvest costs $11/user/month with no free tier. A 10-person team saves $1,200/year with timedigits.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What does Harvest have that timedigits doesn't?</h3>
                <p className="text-zinc-400">
                  Harvest has built-in invoicing, expense tracking, and more integrations. If you need these features,
                  Harvest might be worth the premium. If you just need time tracking, timedigits saves you 91%.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits have invoicing like Harvest?</h3>
                <p className="text-zinc-400">
                  Not yet, but it's coming soon. For now, export your hours to CSV and use any invoicing tool
                  (FreshBooks, Wave, QuickBooks). The CSV export is included free.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I import my Harvest data?</h3>
                <p className="text-zinc-400">
                  We're building import tools for Harvest. Currently, export from Harvest to CSV and
                  contact us for help migrating historical data.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Receipt size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Save 91% on Time Tracking?
              </h2>
              <p className="text-zinc-400 mb-8">
                Switch from Harvest and keep $1,200/year for a 10-person team. Free for individuals.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
                >
                  <span>Try timedigits Free</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
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
