import { ArrowLeft, ArrowRight, Check, Trophy, Calculator, Clock, Briefcase, Export, ChartLine, CalendarBlank } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const accountantFeatures = [
  {
    icon: Clock,
    title: "Billable hour tracking",
    description: "Track every minute spent on client work. Never miss billable time during tax season.",
  },
  {
    icon: Briefcase,
    title: "Client-based organization",
    description: "Create projects per client or engagement. Generate per-client reports for billing.",
  },
  {
    icon: Export,
    title: "Export for billing",
    description: "Export to CSV for invoicing. Compatible with QuickBooks and most accounting software.",
  },
  {
    icon: ChartLine,
    title: "Engagement tracking",
    description: "See how long audits, tax returns, and advisory work actually take.",
  },
  {
    icon: CalendarBlank,
    title: "Seasonal flexibility",
    description: "Scale up during busy season, scale down after. Pay only for users you need.",
  },
  {
    icon: Calculator,
    title: "Free for solo CPAs",
    description: "Individual accountants pay nothing. Track unlimited clients at zero cost.",
  },
];

const accountingWorkflows = [
  {
    title: "Tax preparation",
    description: "Track time on individual and business returns.",
    steps: ["Create project per client", "Track prep, review, filing", "Log client calls", "Export for billing"],
  },
  {
    title: "Audit engagements",
    description: "Document hours across audit phases.",
    steps: ["Track planning time", "Log fieldwork hours", "Document review time", "Generate engagement reports"],
  },
  {
    title: "Advisory services",
    description: "Bill for consulting and strategic work.",
    steps: ["Track meeting time", "Log research hours", "Document deliverables", "Invoice accurately"],
  },
];

const accountingTypes = [
  { type: "CPAs", description: "Track billable hours across tax, audit, and advisory engagements." },
  { type: "Tax preparers", description: "Log time on individual and business returns during busy season." },
  { type: "Bookkeepers", description: "Track hours spent on client books and reconciliations." },
  { type: "Auditors", description: "Document hours across planning, fieldwork, and review phases." },
  { type: "CFO services", description: "Bill for fractional CFO and financial advisory work." },
  { type: "Accounting firms", description: "Team tracking at $1/user for staff accountants and partners." },
];

export function AccountantTimeTracker() {
  useSEO(seoData.accountant);

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
              Free for Solo Accountants
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Accountants
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track billable hours across clients and engagements. Export for billing.
              Free forever for solo practitioners — no limits during tax season.
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
              Quick Answer: Best Time Tracker for Accountants?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is excellent for accountants who need
              simple, affordable time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo CPAs</strong> — unlimited clients and engagements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Client-based tracking</strong> — organize time by client and project</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — import into QuickBooks or billing software</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">$1/user for firms</strong> — affordable team tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No busy-season surcharges</strong> — flat pricing year-round</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Features for Accounting Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Simple time tracking built for billable work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {accountantFeatures.map((feature) => (
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
              How Accountants Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for accounting time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {accountingWorkflows.map((workflow) => (
                <div key={workflow.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <h3 className="text-white font-semibold mb-2">{workflow.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{workflow.description}</p>
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

          {/* Accounting Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Accounting Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your specialty, timedigits helps track billable hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {accountingTypes.map((item) => (
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
              Accountant FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for accountants?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for accountants who need simple billable hour tracking. Free for solo CPAs,
                  $1/user for firms, with client-based organization and CSV export for billing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits free during tax season?</h3>
                <p className="text-zinc-400">
                  Yes. Solo accountants are always free — no busy-season surcharges or limits. Track as many
                  clients and hours as you need during tax season at zero cost.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I export time to QuickBooks?</h3>
                <p className="text-zinc-400">
                  Yes. Export to CSV and import into QuickBooks or any accounting/billing software.
                  Direct integrations are on the roadmap.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does it cost for an accounting firm?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 users, then $1/user after. A 10-person firm costs $10/month.
                  No per-engagement fees or busy-season pricing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track different engagement types?</h3>
                <p className="text-zinc-400">
                  Yes. Create separate projects for tax prep, audit, advisory, or any service type.
                  Run reports by project to see time across engagement types.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Calculator size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Billable Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for solo accountants. Bill every hour accurately.
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
