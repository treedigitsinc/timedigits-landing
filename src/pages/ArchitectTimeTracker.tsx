import { ArrowLeft, ArrowRight, Check, Trophy, Blueprint, Clock, Briefcase, Export, Buildings, PencilRuler } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const architectFeatures = [
  {
    icon: Clock,
    title: "Project phase tracking",
    description: "Track time across schematic design, DD, CD, and CA phases separately.",
  },
  {
    icon: Briefcase,
    title: "Client-based organization",
    description: "Create projects per client or building. Track multiple projects simultaneously.",
  },
  {
    icon: Blueprint,
    title: "Billable hour accuracy",
    description: "Track every hour for accurate client billing. Never underestimate project time again.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export hours to CSV for client billing. Compatible with accounting software.",
  },
  {
    icon: Buildings,
    title: "Team tracking",
    description: "Track hours across your firm. See time by project, person, or phase.",
  },
  {
    icon: PencilRuler,
    title: "Free for solo architects",
    description: "Individual architects pay nothing. Track unlimited projects at zero cost.",
  },
];

const architectWorkflows = [
  {
    title: "Hourly billing",
    description: "Track time for hourly client agreements.",
    steps: ["Start timer for each task", "Note project phase", "Log meetings and calls", "Export for invoicing"],
  },
  {
    title: "Fixed-fee tracking",
    description: "Monitor hours against fixed-fee budgets.",
    steps: ["Set project budget", "Track all hours", "Compare actual vs budget", "Manage scope creep"],
  },
  {
    title: "Phase management",
    description: "Track time across design phases.",
    steps: ["Create sub-projects per phase", "Track SD, DD, CD, CA separately", "Review phase summaries", "Bill by phase"],
  },
];

const architectTypes = [
  { type: "Solo architects", description: "Track billable hours across all client projects for free." },
  { type: "Small firms", description: "Team tracking at $1/person. Perfect for boutique practices." },
  { type: "Landscape architects", description: "Track design, planning, and site work hours." },
  { type: "Interior designers", description: "Log programming, design, and project management time." },
  { type: "Urban planners", description: "Track research, analysis, and client meetings." },
  { type: "Architectural technicians", description: "Document drafting, BIM, and documentation hours." },
];

export function ArchitectTimeTracker() {
  useSEO(seoData.architect);

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
              Free for Solo Architects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Architects
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track billable hours across projects and phases. Export for client billing.
              Free forever for solo architects — $1/user for firms.
            </p>
            <a href="https://timedigits.vercel.app/login">
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
              Quick Answer: Best Time Tracker for Architects?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for architects who need
              simple, affordable time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo architects</strong> — unlimited projects and clients</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Phase tracking</strong> — organize time by SD, DD, CD, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Project-based organization</strong> — track multiple buildings/clients</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">$1/user for firms</strong> — affordable team tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — for client invoicing and reporting</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for Architecture Practice
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Time tracking that fits how architects work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {architectFeatures.map((feature) => (
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
              How Architects Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for architectural time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {architectWorkflows.map((workflow) => (
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

          {/* Architect Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Design Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your specialty, timedigits helps track billable hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {architectTypes.map((item) => (
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
              Architect FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for architects?</h3>
                <p className="text-zinc-400">
                  timedigits is great for architects who need simple time tracking. Free for solo architects,
                  $1/user for firms, with project/phase organization and CSV export for invoicing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits free for solo architects?</h3>
                <p className="text-zinc-400">
                  Yes, 100% free forever. Track unlimited projects, clients, and phases at no cost.
                  Export to CSV for invoicing anytime.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track time by project phase?</h3>
                <p className="text-zinc-400">
                  Yes. Create sub-projects for each phase (SD, DD, CD, CA) or use tags in your time entries.
                  Filter reports by phase to see time spent in each stage.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does it cost for an architecture firm?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 people, then $1/person after. A 10-person firm costs $10/month.
                  Much more affordable than architecture-specific software.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does it integrate with Revit or AutoCAD?</h3>
                <p className="text-zinc-400">
                  Direct integrations are on the roadmap. For now, run the timer in a browser tab
                  alongside your CAD software. It's lightweight and stays out of your way.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Blueprint size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Project Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for solo architects. Bill every hour accurately.
              </p>
              <a href="https://timedigits.vercel.app/login">
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
