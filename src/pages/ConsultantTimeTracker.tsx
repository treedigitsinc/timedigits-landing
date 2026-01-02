import { ArrowLeft, ArrowRight, Check, Trophy, Briefcase, CurrencyDollar, Clock, Export, ChartLine, CalendarBlank } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const consultantFeatures = [
  {
    icon: CurrencyDollar,
    title: "Free forever",
    description: "Individual consultants pay nothing. Track unlimited clients and projects at zero cost.",
  },
  {
    icon: Clock,
    title: "Billable hour tracking",
    description: "Track every meeting, call, research hour, and deliverable. Never miss billable time.",
  },
  {
    icon: Briefcase,
    title: "Client workspaces",
    description: "Organize time by client. Run reports per client for accurate invoicing.",
  },
  {
    icon: Export,
    title: "Invoice-ready exports",
    description: "Export hours to CSV. Import into any invoicing tool or send directly to clients.",
  },
  {
    icon: ChartLine,
    title: "Project insights",
    description: "See how long engagements actually take. Price future projects accurately.",
  },
  {
    icon: CalendarBlank,
    title: "Weekly summaries",
    description: "Review your week at a glance. See billable vs non-billable time breakdown.",
  },
];

const consultingTypes = [
  { type: "Management consultants", description: "Track strategy sessions, stakeholder meetings, and deliverable prep." },
  { type: "IT consultants", description: "Log implementation time, troubleshooting, and client training." },
  { type: "HR consultants", description: "Track policy reviews, interviews, and organizational development work." },
  { type: "Financial advisors", description: "Bill for client meetings, research, and portfolio reviews." },
  { type: "Marketing consultants", description: "Track campaign planning, analytics reviews, and strategy work." },
  { type: "Legal consultants", description: "Log research, drafting, client calls, and court appearances." },
];

const workflows = [
  {
    title: "Retainer clients",
    steps: ["Create project for each retainer", "Track all time to that project", "Export monthly hours", "Invoice based on tracked time"],
  },
  {
    title: "Project-based work",
    steps: ["Create project per engagement", "Track phases separately", "Review total hours", "Use for future quotes"],
  },
  {
    title: "Multiple clients",
    steps: ["Create workspace per client", "Switch between clients easily", "Generate client-specific reports", "Bill each client accurately"],
  },
];

export function ConsultantTimeTracker() {
  useSEO(seoData.consultant);

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
              Free for Consultants
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Consultants
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track billable hours across all your clients. Export for invoicing.
              Free forever for individual consultants — no limits, no credit card.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
              >
                <span>Start Tracking Free</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Answer: Best Time Tracker for Consultants?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is the best free time tracker for consultants
              because it's built for billable hour tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">100% free</strong> — unlimited clients, projects, and time entries</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Client workspaces</strong> — organize time by client for clean billing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — invoice-ready reports for any billing system</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Works offline</strong> — track time during client meetings, on planes, anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Mobile apps</strong> — track from your phone during site visits</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Everything Consultants Need
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Built for professionals who bill by the hour.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {consultantFeatures.map((feature) => (
                <div key={feature.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <feature.icon size={28} className="text-teal-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Workflows */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              How Consultants Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for consulting professionals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {workflows.map((workflow) => (
                <div key={workflow.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <h3 className="text-white font-semibold mb-4">{workflow.title}</h3>
                  <ol className="space-y-2">
                    {workflow.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 text-xs font-medium flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-zinc-400">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Consulting Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Consultants
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your specialty, timedigits helps track billable hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {consultingTypes.map((item) => (
                <div key={item.type} className="glass rounded-xl p-4 border border-zinc-800/50">
                  <h3 className="text-white font-medium mb-1">{item.type}</h3>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Consultant FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for consultants?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for consultants because it's free forever, tracks unlimited clients and projects,
                  and exports data for invoicing. No credit card, no limits on the free plan.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits really free for consultants?</h3>
                <p className="text-zinc-400">
                  Yes, 100% free for individual consultants. Unlimited projects, unlimited time entries,
                  full exports, offline mode, and mobile apps. We only charge for team features.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How do I invoice clients with timedigits?</h3>
                <p className="text-zinc-400">
                  Export your hours to CSV, then import into your invoicing tool (FreshBooks, QuickBooks, Wave, etc.)
                  or use the data to create manual invoices. Built-in invoicing is coming soon.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track different hourly rates per client?</h3>
                <p className="text-zinc-400">
                  Hourly rates per project are coming soon. For now, track hours and apply rates when invoicing.
                  The CSV export includes all project and time data you need.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What if I grow into a consulting firm?</h3>
                <p className="text-zinc-400">
                  When you add team members, upgrade to teams at $5/month for up to 5 people, then $1/user after.
                  Your individual data stays intact. A 10-person firm costs just $10/month.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Briefcase size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Consulting Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever. No credit card. Bill every hour accurately.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
                >
                  <span>Get Started Free</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
              <p className="text-zinc-600 text-sm mt-4">
                Join thousands of consultants tracking time with timedigits
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
