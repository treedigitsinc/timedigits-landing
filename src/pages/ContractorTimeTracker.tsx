import { ArrowLeft, ArrowRight, Check, Trophy, Hammer, Clock, Briefcase, Export, HardHat, Truck } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const contractorFeatures = [
  {
    icon: Clock,
    title: "Job site tracking",
    description: "Track hours on each job site. Start timer when you arrive, stop when you leave.",
  },
  {
    icon: HardHat,
    title: "Track crew hours",
    description: "Team features let you track hours for your whole crew. $1/person/month.",
  },
  {
    icon: Briefcase,
    title: "Per-job organization",
    description: "Create projects for each job. See total hours and costs per project.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export hours to CSV for client billing or payroll processing.",
  },
  {
    icon: Truck,
    title: "Works offline",
    description: "Track time on remote job sites without internet. Syncs when you reconnect.",
  },
  {
    icon: Hammer,
    title: "Free for solo contractors",
    description: "Independent contractors pay nothing. Track unlimited jobs at zero cost.",
  },
];

const contractorWorkflows = [
  {
    title: "Hourly billing",
    description: "Track time for T&M (time and materials) jobs.",
    steps: ["Create project per job", "Start timer on arrival", "Log breaks separately", "Export for invoicing"],
  },
  {
    title: "Crew tracking",
    description: "Track hours for your team on each job.",
    steps: ["Add crew members", "Each tracks their hours", "Review daily/weekly", "Process payroll"],
  },
  {
    title: "Project budgeting",
    description: "See actual hours vs estimates.",
    steps: ["Track all job hours", "Compare to estimates", "Identify overruns", "Improve future bids"],
  },
];

const contractorTypes = [
  { type: "General contractors", description: "Track hours across multiple job sites and trades." },
  { type: "Electricians", description: "Log service calls, installations, and project work." },
  { type: "Plumbers", description: "Track repair calls, new construction, and travel time." },
  { type: "HVAC technicians", description: "Log installations, service calls, and maintenance." },
  { type: "Carpenters", description: "Track framing, finishing, and custom work hours." },
  { type: "Landscapers", description: "Log crew hours on maintenance and project work." },
];

export function ContractorTimeTracker() {
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
              Free for Solo Contractors
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Contractors
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track job site hours. Bill clients accurately. Works offline.
              Free forever for solo contractors — $1/user for crews.
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
              Quick Answer: Best Time Tracker for Contractors?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for contractors who need
              simple, job site-friendly time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo contractors</strong> — unlimited jobs and hours</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Works offline</strong> — track time on remote sites without cell service</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Mobile apps</strong> — track from your phone on the job site</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">$1/user for crews</strong> — affordable team tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — for invoicing and payroll</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for the Job Site
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Time tracking that works where you work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contractorFeatures.map((feature) => (
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
              How Contractors Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for construction time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contractorWorkflows.map((workflow) => (
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

          {/* Contractor Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Trades
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your trade, timedigits helps track job hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {contractorTypes.map((item) => (
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
              Contractor FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for contractors?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for contractors because it works offline, has mobile apps for job site
                  tracking, and costs just $1/user for crews. Free for solo contractors.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does it work without cell service?</h3>
                <p className="text-zinc-400">
                  Yes. timedigits is built offline-first. Track time on remote job sites without internet.
                  Everything syncs automatically when you get connectivity.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track my crew's hours?</h3>
                <p className="text-zinc-400">
                  Yes. Add crew members to your team. Each person tracks their own hours via the mobile app.
                  You can view everyone's time for payroll and invoicing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does it cost for a crew?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 people, then $1/person after. A 10-person crew costs $10/month.
                  Way cheaper than construction-specific software.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I export for payroll?</h3>
                <p className="text-zinc-400">
                  Yes. Export all time data to CSV. Import into QuickBooks, ADP, or your payroll system.
                  Export includes person, project, hours, and dates.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Hammer size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Job Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for solo contractors. $1/user for crews.
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
