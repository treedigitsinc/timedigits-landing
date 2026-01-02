import { ArrowLeft, ArrowRight, Check, Trophy, Code, GitBranch, Terminal, Clock, Export, Bug } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const devFeatures = [
  {
    icon: Clock,
    title: "One-click timer",
    description: "Start tracking when you begin coding. Stop when you're done. Zero friction.",
  },
  {
    icon: Code,
    title: "Project-based tracking",
    description: "Organize time by project, client, or sprint. Track exactly where your hours go.",
  },
  {
    icon: GitBranch,
    title: "Works with your flow",
    description: "No browser extensions required. Just a timer that stays out of your way.",
  },
  {
    icon: Terminal,
    title: "Offline mode",
    description: "Track time when you're coding on a plane, at a coffee shop, or offline.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Freelance devs: export hours to CSV for client billing. Built-in invoicing coming soon.",
  },
  {
    icon: Bug,
    title: "Free forever",
    description: "Individual developers pay nothing. Track unlimited projects at zero cost.",
  },
];

const devWorkflows = [
  {
    title: "Freelance development",
    description: "Track billable hours across client projects.",
    steps: ["Create project per client", "Start timer when you code", "Stop when done", "Export for invoicing"],
  },
  {
    title: "Sprint tracking",
    description: "Measure how long features and bugs actually take.",
    steps: ["Create project per sprint", "Track time on each task", "Review sprint hours", "Improve estimates"],
  },
  {
    title: "Consulting work",
    description: "Bill clients accurately for development time.",
    steps: ["Track coding, meetings, reviews", "Log debugging time", "Export detailed hours", "Invoice confidently"],
  },
];

const developerTypes = [
  { type: "Full-stack developers", description: "Track frontend, backend, and everything in between." },
  { type: "Frontend developers", description: "Log time on React, Vue, UI/UX work, and client reviews." },
  { type: "Backend developers", description: "Track API development, database work, and system design." },
  { type: "Mobile developers", description: "Log iOS, Android, or cross-platform development hours." },
  { type: "DevOps engineers", description: "Track infrastructure, CI/CD, and deployment time." },
  { type: "Game developers", description: "Log development sprints, testing, and bug fixes." },
];

export function DeveloperTimeTracker() {
  useSEO(seoData.developer);

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
              Free for Developers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Developers
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track coding hours without breaking your flow. Simple timer, project tracking, CSV export.
              Free forever for individual developers.
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
              Quick Answer: Best Time Tracker for Developers?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for developers because
              it's simple, fast, and stays out of your way:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free forever</strong> — no limits for individual developers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Zero friction</strong> — one click to start, one click to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Offline mode</strong> — track time when coding without internet</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No surveillance</strong> — no screenshots or activity monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — perfect for freelance invoicing</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for the Dev Workflow
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Simple time tracking that doesn't interrupt your coding.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {devFeatures.map((feature) => (
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
              How Developers Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for tracking development time.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {devWorkflows.map((workflow) => (
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

          {/* Developer Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Developers
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever stack you work with, timedigits helps track your hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {developerTypes.map((item) => (
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
              Developer FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for developers?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for developers because it's fast, simple, and doesn't interrupt your flow.
                  One-click timer, project tracking, and offline mode. Free for individual developers.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is there a CLI or API?</h3>
                <p className="text-zinc-400">
                  API is coming soon. For now, use the web app or mobile apps. We're building developer-focused
                  features including CLI and integrations with GitHub, GitLab, and Jira.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track time for freelance clients?</h3>
                <p className="text-zinc-400">
                  Yes. Create projects for each client, track your coding hours, and export to CSV for invoicing.
                  Freelance developers get unlimited projects and exports free forever.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does it integrate with my IDE?</h3>
                <p className="text-zinc-400">
                  IDE integrations (VS Code, JetBrains, etc.) are on the roadmap. For now, the timer runs in a browser
                  tab or mobile app alongside your development environment.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits free for dev teams?</h3>
                <p className="text-zinc-400">
                  Individual developers are free forever. Teams pay $5/month for up to 5 developers, then $1/dev after.
                  A 10-person dev team costs $10/month — 90% cheaper than competitors.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Code size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Dev Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever. No credit card. No interruptions to your flow.
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
