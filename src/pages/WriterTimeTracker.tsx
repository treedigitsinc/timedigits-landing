import { ArrowRight, Check, Trophy, PencilSimple, Clock, Briefcase, Export, Article, BookOpen } from "@phosphor-icons/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const writerFeatures = [
  {
    icon: Clock,
    title: "Track writing sessions",
    description: "Start timer when you write. Stop when you're done. Track research, drafting, and editing separately.",
  },
  {
    icon: Article,
    title: "Per-project tracking",
    description: "Create projects for each client, article, or book. See total hours per piece.",
  },
  {
    icon: BookOpen,
    title: "Track revisions",
    description: "Log time on revision rounds. Know exactly how long edits take.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export hours to CSV for client billing. Works with any invoicing tool.",
  },
  {
    icon: Briefcase,
    title: "Client workspaces",
    description: "Organize work by client. Run reports per client for billing.",
  },
  {
    icon: PencilSimple,
    title: "Free forever",
    description: "Freelance writers pay nothing. Track unlimited articles and clients at zero cost.",
  },
];

const writerWorkflows = [
  {
    title: "Hourly billing",
    description: "Track time for hourly client work.",
    steps: ["Create project per client", "Track writing time", "Log research separately", "Export for invoicing"],
  },
  {
    title: "Per-word/article rates",
    description: "Track time to price future work.",
    steps: ["Track all time on each piece", "Note word count", "Calculate hourly rate", "Adjust pricing"],
  },
  {
    title: "Revision tracking",
    description: "Document time on client revisions.",
    steps: ["Create entry per round", "Track editing time", "Note scope changes", "Justify additional billing"],
  },
];

const writerTypes = [
  { type: "Freelance writers", description: "Track billable hours across client articles and projects." },
  { type: "Content writers", description: "Log time on blog posts, web copy, and content marketing." },
  { type: "Copywriters", description: "Track ad copy, sales pages, and email sequences." },
  { type: "Technical writers", description: "Document time on manuals, docs, and specifications." },
  { type: "Editors", description: "Track editing, proofreading, and revision time." },
  { type: "Authors", description: "Log writing sessions for books, chapters, and manuscripts." },
];

export function WriterTimeTracker() {
  useSEO(seoData.writer);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Free for Writers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Time Tracker for Writers
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Track writing, research, and editing time. Bill clients accurately.
              Free forever for freelance writers — no limits, no credit card.
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
              Quick Answer: Best Time Tracker for Writers?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is ideal for writers who need
              simple, distraction-free time tracking:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Free forever</strong> — unlimited clients and articles</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Simple timer</strong> — one click to start, one click to stop</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Track phases</strong> — research, drafting, editing separately</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">CSV export</strong> — for client invoicing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-600 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Works offline</strong> — write anywhere, track everywhere</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Built for the Writing Life
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Time tracking that doesn't interrupt your writing flow.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {writerFeatures.map((feature) => (
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
              How Writers Use timedigits
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Common workflows for tracking writing time.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {writerWorkflows.map((workflow) => (
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

          {/* Writer Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Perfect For All Writers
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Whatever you write, timedigits helps track your hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {writerTypes.map((item) => (
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
              Writer FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">What's the best time tracker for writers?</h3>
                <p className="text-slate-600">
                  timedigits is ideal for writers because it's simple, free, and doesn't distract from writing.
                  Track articles, clients, and revisions without breaking your creative flow.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Is timedigits free for freelance writers?</h3>
                <p className="text-slate-600">
                  Yes, 100% free forever. Track unlimited clients, articles, and hours at no cost.
                  Export to CSV for invoicing anytime.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">How do I track different writing phases?</h3>
                <p className="text-slate-600">
                  Add notes to each time entry describing the phase (research, draft, edit, revise).
                  Or create separate entries for each phase. Filter reports to see time per phase.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can I calculate my effective hourly rate?</h3>
                <p className="text-slate-600">
                  Yes. Track all time on an article, divide your fee by total hours.
                  This helps you price future work more accurately and identify unprofitable clients.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Does it work offline for writing retreats?</h3>
                <p className="text-slate-600">
                  Yes. timedigits works fully offline. Track time in cabins, coffee shops, or anywhere
                  without internet. Everything syncs when you reconnect.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 border border-teal-200">
              <PencilSimple size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Tracking Your Writing Hours
              </h2>
              <p className="text-slate-600 mb-8">
                Free forever for writers. Know exactly where your time goes.
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
