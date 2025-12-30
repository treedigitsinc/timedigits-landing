import { ArrowLeft, ArrowRight, Check, Trophy, Scales, Clock, Briefcase, Export, FileText, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const lawyerFeatures = [
  {
    icon: Clock,
    title: "Bill every 6 minutes",
    description: "Track time in increments as small as you need. Never miss billable time again.",
  },
  {
    icon: Briefcase,
    title: "Matter-based tracking",
    description: "Organize time by client and matter. Generate per-matter reports for billing.",
  },
  {
    icon: FileText,
    title: "Activity descriptions",
    description: "Add notes to each entry. Document what you worked on for detailed invoices.",
  },
  {
    icon: Export,
    title: "Export for billing",
    description: "Export to CSV for your billing system. Compatible with most legal practice management tools.",
  },
  {
    icon: Phone,
    title: "Mobile time capture",
    description: "Track calls, court appearances, and client meetings from your phone.",
  },
  {
    icon: Scales,
    title: "Free for solo practice",
    description: "Solo attorneys pay nothing. Track unlimited matters and clients at zero cost.",
  },
];

const legalWorkflows = [
  {
    title: "Hourly billing",
    description: "Track every minute for accurate client billing.",
    steps: ["Start timer for each task", "Add matter/client reference", "Note activity description", "Export for invoicing"],
  },
  {
    title: "Matter management",
    description: "Organize time by client and case.",
    steps: ["Create project per matter", "Track all work to matter", "Review time per matter", "Bill clients accurately"],
  },
  {
    title: "Court appearances",
    description: "Track time during hearings and trials.",
    steps: ["Use mobile app in court", "Log prep time separately", "Track travel time", "Document all activities"],
  },
];

const legalProfessionals = [
  { type: "Solo attorneys", description: "Track billable hours across all cases at no cost." },
  { type: "Small law firms", description: "Team tracking at $1/attorney. Affordable for boutique firms." },
  { type: "Paralegals", description: "Track research, drafting, and administrative work." },
  { type: "Legal consultants", description: "Bill for advisory work, document review, and expert testimony." },
  { type: "In-house counsel", description: "Track time spent on internal matters and departments." },
  { type: "Contract attorneys", description: "Document hours for staffing agencies and direct clients." },
];

export function LawyerTimeTracker() {
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
              Free for Solo Attorneys
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Lawyers
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track billable hours across matters and clients. Export for legal billing.
              Free forever for solo practitioners — no limits, no credit card.
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
              Quick Answer: Best Time Tracker for Lawyers?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is an excellent choice for legal professionals
              who want simple, affordable time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo attorneys</strong> — unlimited matters and clients</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Matter-based organization</strong> — track time by client and case</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Activity descriptions</strong> — document what you worked on</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — compatible with legal billing systems</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Mobile apps</strong> — track court time and client meetings</span>
              </li>
            </ul>
            <p className="text-zinc-400 mt-6 text-sm">
              <strong>Note:</strong> For full legal practice management (conflicts, calendaring, trust accounting),
              consider dedicated legal software. timedigits focuses on simple, accurate time tracking.
            </p>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Features for Legal Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Simple time tracking that captures every billable minute.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {lawyerFeatures.map((feature) => (
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
              How Lawyers Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for legal time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {legalWorkflows.map((workflow) => (
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

          {/* Legal Professionals */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Legal Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your legal practice, timedigits helps track billable time.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {legalProfessionals.map((item) => (
                <div key={item.type} className="glass rounded-xl p-4 border border-zinc-800/50">
                  <h3 className="text-white font-medium mb-1">{item.type}</h3>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Simple Pricing for Legal Teams
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              No per-feature charges. No enterprise pricing games.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="grid grid-cols-3 p-4 bg-zinc-900/80 border-b border-zinc-800/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Firm Size</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-400">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400">Clio</div>
                </div>
                {[
                  { size: "Solo practitioner", timedigits: "Free", clio: "$49+/mo" },
                  { size: "2-5 attorneys", timedigits: "$5/mo", clio: "$245+/mo" },
                  { size: "10 attorneys", timedigits: "$10/mo", clio: "$490+/mo" },
                  { size: "20 attorneys", timedigits: "$20/mo", clio: "$980+/mo" },
                ].map((row, i) => (
                  <div key={row.size} className={`grid grid-cols-3 p-4 ${i !== 3 ? "border-b border-zinc-800/30" : ""}`}>
                    <div className="text-zinc-300 text-sm">{row.size}</div>
                    <div className="text-center text-teal-400 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-zinc-400 text-sm">{row.clio}</div>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm text-center mt-4">
                Note: Clio is full practice management. timedigits is focused time tracking at a fraction of the cost.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Lawyer FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for lawyers?</h3>
                <p className="text-zinc-400">
                  For pure time tracking, timedigits is excellent: free for solo attorneys, $1/user for firms,
                  with matter-based organization and CSV export. For full practice management (billing, conflicts,
                  calendaring), consider dedicated legal software alongside timedigits.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits free for solo attorneys?</h3>
                <p className="text-zinc-400">
                  Yes, 100% free for individual users. Solo practitioners can track unlimited matters and clients,
                  export to CSV, use mobile apps, and work offline — all at no cost, forever.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I track time in 6-minute increments?</h3>
                <p className="text-zinc-400">
                  Yes. timedigits tracks time precisely. You can log entries in any increment you need.
                  The timer captures exact time, and you can round as needed for billing.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits integrate with legal billing software?</h3>
                <p className="text-zinc-400">
                  We export to CSV, which imports into most legal billing and practice management systems.
                  Direct integrations with Clio, MyCase, and others are on the roadmap.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does firm-wide time tracking cost?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 users, then $1/user after. A 10-attorney firm pays $10/month.
                  Compare to traditional legal software that can cost hundreds per user.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Scales size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Billable Hours
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for solo attorneys. Bill every minute accurately.
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
