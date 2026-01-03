import { ArrowRight, Check, Trophy, Headset, Clock, Briefcase, Export, CalendarBlank, UsersThree } from "@phosphor-icons/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const vaFeatures = [
  {
    icon: UsersThree,
    title: "Multi-client tracking",
    description: "Track hours for multiple clients. Switch between clients with one click.",
  },
  {
    icon: Clock,
    title: "Accurate hour logging",
    description: "Track every task for accurate billing. Never underestimate time again.",
  },
  {
    icon: Briefcase,
    title: "Client workspaces",
    description: "Organize time by client. Generate per-client reports for invoicing.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export hours to CSV for billing. Works with any invoicing tool.",
  },
  {
    icon: CalendarBlank,
    title: "Weekly summaries",
    description: "Review your week at a glance. See hours per client for scheduling.",
  },
  {
    icon: Headset,
    title: "Free forever",
    description: "Solo VAs pay nothing. Track unlimited clients at zero cost.",
  },
];

const vaWorkflows = [
  {
    title: "Hourly billing",
    description: "Track time for hourly client retainers.",
    steps: ["Create project per client", "Start timer for each task", "Stop when done", "Export weekly/monthly"],
  },
  {
    title: "Retainer tracking",
    description: "Monitor hours against monthly packages.",
    steps: ["Set monthly hours budget", "Track all work", "Review remaining hours", "Notify client of overages"],
  },
  {
    title: "Task-based tracking",
    description: "Log time per task type.",
    steps: ["Note task in each entry", "Track emails, calls, admin", "Review time by task type", "Optimize workflow"],
  },
];

const vaTaskTypes = [
  { type: "Administrative VAs", description: "Track email management, scheduling, and data entry." },
  { type: "Social media VAs", description: "Log posting, engagement, and content creation time." },
  { type: "Executive assistants", description: "Track calendar management, travel, and meeting prep." },
  { type: "Bookkeeping VAs", description: "Log invoicing, reconciliation, and financial admin." },
  { type: "Customer service VAs", description: "Track support tickets, calls, and client communication." },
  { type: "Research VAs", description: "Log research, data collection, and report creation." },
];

export function VirtualAssistantTimeTracker() {
  useSEO(seoData.virtualAssistant);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Free for Virtual Assistants
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Time Tracker for Virtual Assistants
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Track hours across all your clients. Bill accurately with per-client reports.
              Free forever for solo VAs — no limits, no credit card.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
              >
                <span>Start Tracking Free</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 mb-20 border border-teal-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Answer: Best Time Tracker for Virtual Assistants?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is ideal for VAs who juggle multiple clients:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Free forever</strong> — unlimited clients and hours</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Multi-client tracking</strong> — switch clients with one click</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Per-client reports</strong> — generate invoices for each client</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">CSV export</strong> — works with any invoicing tool</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">No surveillance</strong> — track time, not screenshots</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Built for the VA Workflow
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Time tracking that fits how virtual assistants work.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {vaFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <feature.icon size={28} className="text-teal-500 mb-4" />
                  <h3 className="text-slate-900 font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Workflows */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              How VAs Use timedigits
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Common workflows for virtual assistant time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {vaWorkflows.map((workflow) => (
                <div key={workflow.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="text-slate-900 font-semibold mb-2">{workflow.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{workflow.description}</p>
                  <ol className="space-y-2">
                    {workflow.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-600 text-xs font-medium flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-slate-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* VA Task Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Perfect For All VA Specialties
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Whatever you specialize in, timedigits helps track your hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {vaTaskTypes.map((item) => (
                <div key={item.type} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="text-slate-900 font-medium mb-1">{item.type}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Virtual Assistant FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">What's the best time tracker for virtual assistants?</h3>
                <p className="text-slate-600">
                  timedigits is ideal for VAs because it's free, handles multiple clients easily, and generates
                  per-client reports for invoicing. No surveillance features — just time tracking.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Is timedigits free for VAs?</h3>
                <p className="text-slate-600">
                  Yes, 100% free forever. Track unlimited clients, tasks, and hours at no cost.
                  Export to CSV for invoicing anytime.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">How do I track time for different clients?</h3>
                <p className="text-slate-600">
                  Create a project for each client. Switch between projects with one click.
                  Run reports filtered by client to see hours and create invoices.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can I track against retainer hours?</h3>
                <p className="text-slate-600">
                  Yes. Create a project for each client's retainer. Track time against it.
                  Review total hours to know when you're approaching the limit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Does timedigits work on mobile?</h3>
                <p className="text-slate-600">
                  Yes. iOS and Android apps let you track time from anywhere.
                  Perfect for tracking calls and meetings on the go.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 border border-teal-200">
              <Headset size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Tracking Your VA Hours
              </h2>
              <p className="text-slate-600 mb-8">
                Free forever. Bill every client accurately.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
                >
                  <span>Get Started Free</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
