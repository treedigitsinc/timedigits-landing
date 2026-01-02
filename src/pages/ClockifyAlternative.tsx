import { ArrowLeft, ArrowRight, Check, X, Trophy, Wallet, Clock, Sparkle, ShieldCheck, Lightning } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const featureComparison = [
  { feature: "One-click timer", timedigits: true, clockify: true },
  { feature: "Manual time entry", timedigits: true, clockify: true },
  { feature: "Unlimited projects (free)", timedigits: true, clockify: true },
  { feature: "Offline mode", timedigits: true, clockify: true },
  { feature: "Mobile apps", timedigits: true, clockify: true },
  { feature: "CSV export", timedigits: true, clockify: true },
  { feature: "No ads or upselling", timedigits: true, clockify: false },
  { feature: "Clean, minimal interface", timedigits: true, clockify: false },
  { feature: "Team features at $1/user", timedigits: true, clockify: false },
  { feature: "No feature paywalls", timedigits: true, clockify: false },
];

const pricingComparison = [
  { users: "1 user", timedigits: "Free", clockify: "Free", savings: "-" },
  { users: "5 users", timedigits: "$5/mo", clockify: "$27/mo", savings: "$264/yr" },
  { users: "10 users", timedigits: "$10/mo", clockify: "$55/mo", savings: "$540/yr" },
  { users: "20 users", timedigits: "$20/mo", clockify: "$110/mo", savings: "$1,080/yr" },
  { users: "50 users", timedigits: "$50/mo", clockify: "$275/mo", savings: "$2,700/yr" },
];

const switchReasons = [
  {
    icon: Sparkle,
    title: "Cleaner interface",
    description: "Clockify's free tier is cluttered with upgrade prompts. timedigits is clean and focused.",
  },
  {
    icon: Wallet,
    title: "82% cheaper teams",
    description: "Clockify Pro costs $5.49/user. timedigits team features cost $1/user after the first 5.",
  },
  {
    icon: ShieldCheck,
    title: "No surveillance",
    description: "Clockify offers screenshot monitoring. We don't believe in spying on workers.",
  },
  {
    icon: Lightning,
    title: "Faster experience",
    description: "No bloat, no unnecessary features. Start timer, stop timer, get back to work.",
  },
];

export function ClockifyAlternative() {
  useSEO(seoData.clockifyAlternative);

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
              Clockify Alternative
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Clockify Alternative That's Simpler & Cheaper
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Love Clockify's free tier but hate the upgrade nags? timedigits offers the same core features
              with a cleaner interface and 82% cheaper team pricing.
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
              Quick Answer: Is timedigits Better Than Clockify?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">It depends on what you need.</strong> Both Clockify and timedigits
              have excellent free tiers for individuals. Here's when to choose timedigits:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">You want a cleaner UI</strong> — timedigits has no ads, upgrade prompts, or feature clutter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">You need team features</strong> — $1/user vs Clockify's $5.49/user (82% savings)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">You dislike surveillance</strong> — no screenshot monitoring, ever</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">You value simplicity</strong> — fewer features, but the right ones</span>
              </li>
            </ul>
            <p className="text-zinc-400 mt-6 text-sm">
              Choose Clockify if you need specific integrations (Asana, Trello, etc.) that timedigits doesn't have yet.
            </p>
          </div>

          {/* Why Switch */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Why People Switch from Clockify
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

          {/* Feature Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Feature Comparison
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Side-by-side comparison of timedigits vs Clockify.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-3 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Feature</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Clockify</div>
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
                      {row.clockify ? (
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

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Pricing: timedigits vs Clockify Pro
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Compare team pricing at different sizes.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-4 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Team Size</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Clockify Pro</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-green-400">Yearly Savings</div>
                </div>
                {pricingComparison.map((row, i) => (
                  <div key={row.users} className={`grid grid-cols-4 p-4 ${i !== pricingComparison.length - 1 ? "border-b border-zinc-800/30" : ""}`}>
                    <div className="text-zinc-300 text-sm font-medium">{row.users}</div>
                    <div className="text-center text-teal-400 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-zinc-400 text-sm">{row.clockify}</div>
                    <div className="text-center text-green-400 text-sm font-medium">{row.savings}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Clockify vs timedigits FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits a good Clockify alternative?</h3>
                <p className="text-zinc-400">
                  Yes, if you want a simpler, cleaner experience and cheaper team pricing. timedigits has the core
                  features (timer, projects, reports, export) without Clockify's complexity and upselling.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much cheaper is timedigits than Clockify?</h3>
                <p className="text-zinc-400">
                  For individuals: both are free. For teams: timedigits costs $1/user (after first 5) vs Clockify Pro
                  at $5.49/user. That's 82% cheaper. A 10-person team saves $540/year.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What does Clockify have that timedigits doesn't?</h3>
                <p className="text-zinc-400">
                  Clockify has more integrations (Asana, Trello, Jira, etc.), a built-in Pomodoro timer, and scheduling
                  features. If you need these, Clockify might be better for you. timedigits focuses on core time tracking.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I import my Clockify data?</h3>
                <p className="text-zinc-400">
                  We're building import tools for Clockify data. For now, export from Clockify to CSV
                  and contact us for help with migration.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits have screenshot monitoring like Clockify?</h3>
                <p className="text-zinc-400">
                  No. timedigits does not and will never have surveillance features. We track time, not employee
                  activity. No screenshots, no keystroke logging, no GPS tracking.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Clock size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Switch from Clockify?
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for individuals. 82% cheaper for teams. No upgrade nags.
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
