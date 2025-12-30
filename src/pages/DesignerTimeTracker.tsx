import { ArrowLeft, ArrowRight, Check, Trophy, PaintBrush, Clock, Briefcase, Export, Palette, Sparkle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const designerFeatures = [
  {
    icon: Clock,
    title: "Creative time tracking",
    description: "Track design work without breaking your creative flow. One-click timer, zero friction.",
  },
  {
    icon: Briefcase,
    title: "Project-based tracking",
    description: "Organize time by client or project. Track branding, web design, and more separately.",
  },
  {
    icon: Palette,
    title: "Track revisions",
    description: "Log time on revision rounds. Know exactly how much time each round takes.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export hours to CSV for client billing. Works with any invoicing tool.",
  },
  {
    icon: Sparkle,
    title: "Works offline",
    description: "Track time anywhere — coffee shops, client meetings, on the go. Syncs when you reconnect.",
  },
  {
    icon: PaintBrush,
    title: "Free for freelancers",
    description: "Solo designers pay nothing. Track unlimited clients and projects at zero cost.",
  },
];

const designWorkflows = [
  {
    title: "Hourly billing",
    description: "Track every design hour for accurate client invoicing.",
    steps: ["Start timer for each task", "Note project phase", "Stop when done", "Export for invoicing"],
  },
  {
    title: "Project estimates",
    description: "Learn how long projects actually take.",
    steps: ["Track time on similar projects", "Review historical data", "Create accurate quotes", "Price future work confidently"],
  },
  {
    title: "Revision tracking",
    description: "Document time spent on client revisions.",
    steps: ["Create project per client", "Tag revision rounds", "Track each iteration", "Justify scope creep"],
  },
];

const designerTypes = [
  { type: "Graphic designers", description: "Track time on logos, branding, print materials, and assets." },
  { type: "UI/UX designers", description: "Log wireframing, prototyping, user research, and handoff time." },
  { type: "Web designers", description: "Track website design, mockups, revisions, and client feedback." },
  { type: "Product designers", description: "Document design sprints, user testing, and iteration cycles." },
  { type: "Illustrators", description: "Track illustration projects, sketches, and final artwork." },
  { type: "Motion designers", description: "Log animation work, storyboarding, and rendering time." },
];

export function DesignerTimeTracker() {
  useSEO(seoData.designer);

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
              Free for Designers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Designers
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track creative work without breaking your flow. Simple timer, project tracking, CSV export.
              Free forever for freelance designers.
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
              Quick Answer: Best Time Tracker for Designers?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for designers who need
              simple, distraction-free time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for freelancers</strong> — unlimited clients and projects</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Zero friction</strong> — one click to start, one click to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Track revisions</strong> — see how long each round takes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — invoice-ready time reports</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No surveillance</strong> — no screenshots or activity monitoring</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for Creative Work
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Time tracking that doesn't interrupt your design process.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {designerFeatures.map((feature) => (
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
              How Designers Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for creative time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {designWorkflows.map((workflow) => (
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

          {/* Designer Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Designers
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your creative specialty, timedigits helps track your hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {designerTypes.map((item) => (
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
              Designer FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for designers?</h3>
                <p className="text-zinc-400">
                  timedigits is great for designers because it's simple, fast, and doesn't interrupt creative work.
                  Free for freelancers, with project-based tracking and easy exports for invoicing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits free for freelance designers?</h3>
                <p className="text-zinc-400">
                  Yes, 100% free forever. Track unlimited clients, projects, and hours at no cost.
                  Export to CSV for invoicing anytime.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How do I track revision rounds?</h3>
                <p className="text-zinc-400">
                  Add notes to each time entry describing the revision round. Or create sub-projects
                  for each phase. Review time per phase to justify scope creep discussions.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits integrate with Figma or Adobe?</h3>
                <p className="text-zinc-400">
                  Integrations with design tools are on the roadmap. For now, run the timer in a browser
                  tab alongside your design software. It's lightweight and stays out of your way.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does it cost for a design studio?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 designers, then $1/user after. A 10-person studio costs $10/month.
                  That's 90% cheaper than most alternatives.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <PaintBrush size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Design Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for freelance designers. Invoice every hour accurately.
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
