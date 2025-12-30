import { ArrowLeft, ArrowRight, Check, Trophy, Kanban, Clock, Briefcase, Export, ChartLine, UsersThree } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const pmFeatures = [
  {
    icon: Kanban,
    title: "Project-based tracking",
    description: "Track time by project. See total hours per initiative for reporting and billing.",
  },
  {
    icon: UsersThree,
    title: "Team visibility",
    description: "See what your team is working on. Track hours across all project members.",
  },
  {
    icon: ChartLine,
    title: "Resource reporting",
    description: "Generate reports for resource planning and project budgeting.",
  },
  {
    icon: Clock,
    title: "Simple timer",
    description: "One-click timer for meetings, planning, and admin work.",
  },
  {
    icon: Export,
    title: "CSV export",
    description: "Export time data for project reports, client billing, or resource planning.",
  },
  {
    icon: Briefcase,
    title: "Affordable teams",
    description: "$1/user/month. Track the whole team without enterprise pricing.",
  },
];

const pmWorkflows = [
  {
    title: "Project budgeting",
    description: "Track hours against project budgets.",
    steps: ["Create project per initiative", "Team tracks all hours", "Review budget burn", "Forecast completion"],
  },
  {
    title: "Resource allocation",
    description: "See where team time is going.",
    steps: ["Track time across projects", "Run team reports", "Identify overallocation", "Rebalance resources"],
  },
  {
    title: "Client billing",
    description: "Bill clients for project work.",
    steps: ["Track billable hours", "Generate project reports", "Export for invoicing", "Bill accurately"],
  },
];

const pmTypes = [
  { type: "IT project managers", description: "Track development sprints, deployments, and support." },
  { type: "Construction PMs", description: "Log hours across job sites and phases." },
  { type: "Marketing PMs", description: "Track campaigns, launches, and creative work." },
  { type: "Agency PMs", description: "Manage client projects and track billable hours." },
  { type: "Product managers", description: "Log time on roadmap, research, and stakeholder work." },
  { type: "Operations PMs", description: "Track process improvement and operational initiatives." },
];

export function ProjectManagerTimeTracker() {
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
              Affordable Team Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Project Managers
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track project hours across your team. Monitor budgets and resources.
              $1/user/month — no enterprise pricing.
            </p>
            <a href="https://timedigits.vercel.app/login">
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
              Quick Answer: Best Time Tracker for Project Managers?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for PMs who need team time tracking
              without enterprise complexity:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">$1/user/month</strong> — 10-person team costs $10/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Project-based tracking</strong> — see hours per initiative</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Team reports</strong> — view time by person or project</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Real-time sync</strong> — see team activity instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No surveillance</strong> — track time, not keystrokes</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for Project Management
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Time tracking that fits how PMs work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pmFeatures.map((feature) => (
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
              How Project Managers Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for PM time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pmWorkflows.map((workflow) => (
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

          {/* PM Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Project Managers
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your industry, timedigits helps track project time.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {pmTypes.map((item) => (
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
              Project Manager FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for project managers?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for PMs who need team tracking without enterprise pricing. Project-based
                  organization, team reports, and $1/user/month make it perfect for managing project hours.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does team tracking cost?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 users, then $1/user after. A 10-person team costs $10/month.
                  A 20-person team costs $20/month. No per-project fees.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I see time by project and by person?</h3>
                <p className="text-zinc-400">
                  Yes. Run reports filtered by project to see total hours. Filter by person to see individual
                  allocation. Export data for resource planning spreadsheets.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does it integrate with Jira or Asana?</h3>
                <p className="text-zinc-400">
                  Integrations with project management tools are on the roadmap. For now, create matching
                  projects in timedigits and have team members track time there.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track against project budgets?</h3>
                <p className="text-zinc-400">
                  Yes. Track all hours on a project, then compare totals against your budget.
                  Export data to calculate burn rates and forecast completion.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Kanban size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Projects
              </h2>
              <p className="text-zinc-400 mb-8">
                14-day free trial. $1/user/month. No enterprise pricing.
              </p>
              <a href="https://timedigits.vercel.app/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
                >
                  <span>Start Free Trial</span>
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
