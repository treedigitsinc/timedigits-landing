import { ArrowRight, Check, Trophy, Briefcase, CurrencyDollar, Clock, Export, WifiSlash, DeviceMobile } from "@phosphor-icons/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { RelatedPages } from "../components/RelatedPages";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const freelancerFeatures = [
  {
    icon: CurrencyDollar,
    title: "Free forever",
    description: "No cost for individual freelancers. Track unlimited projects and clients at zero cost.",
  },
  {
    icon: Clock,
    title: "One-click timer",
    description: "Start tracking instantly when you begin work. Stop when you're done. No complicated setup.",
  },
  {
    icon: Briefcase,
    title: "Unlimited projects",
    description: "Track time across all your clients and projects. No artificial limits on the free plan.",
  },
  {
    icon: Export,
    title: "Export for invoicing",
    description: "Export your hours to CSV anytime. Import into your invoicing tool or send directly to clients.",
  },
  {
    icon: WifiSlash,
    title: "Works offline",
    description: "Track time at coffee shops, on planes, anywhere. Syncs automatically when you reconnect.",
  },
  {
    icon: DeviceMobile,
    title: "Mobile apps",
    description: "Track time from your phone with iOS and Android apps. Perfect for meetings and on-site work.",
  },
];

const freelanceWorkflows = [
  {
    title: "Hourly billing",
    description: "Track every minute you work for clients. Export accurate hours for invoicing.",
    steps: ["Start timer when you begin work", "Add project/client name", "Stop when done", "Export hours at end of week/month"],
  },
  {
    title: "Project budgeting",
    description: "See how long projects actually take to price future work accurately.",
    steps: ["Create project for each client", "Track all work on that project", "Review total hours", "Use data for future quotes"],
  },
  {
    title: "Multiple clients",
    description: "Juggling several clients? Keep time organized and bill each correctly.",
    steps: ["Create project per client", "Switch projects as you work", "View per-client reports", "Export client-specific hours"],
  },
];

const freelanceTypes = [
  { type: "Web developers", description: "Track coding, meetings, debugging, and deployments across client projects." },
  { type: "Designers", description: "Log time on mockups, revisions, client calls, and asset creation." },
  { type: "Writers & editors", description: "Track writing, research, editing, and revision rounds per article or project." },
  { type: "Consultants", description: "Bill accurately for calls, research, deliverables, and travel time." },
  { type: "Virtual assistants", description: "Track hours across multiple clients with different hourly rates." },
  { type: "Photographers", description: "Log shooting time, editing, client meetings, and travel." },
];

export function FreelanceTimeTracker() {
  useSEO(seoData.freelance);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Free for Freelancers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Free Time Tracker for Freelancers
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Track billable hours across all your clients and projects. Export for invoicing.
              100% free forever for individual freelancers — no credit card, no limits.
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
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Answer: Best Time Tracker for Freelancers?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is the best free time tracker for freelancers because
              it's genuinely free with no limits:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Unlimited projects</strong> — track as many clients as you have</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Unlimited time entries</strong> — no monthly hour caps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Full CSV export</strong> — get your data for invoicing anytime</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Offline mode</strong> — track time anywhere, even without internet</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">No surveillance</strong> — no screenshots or monitoring</span>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Everything Freelancers Need
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              All features included free. No premium tiers for basic functionality.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {freelancerFeatures.map((feature) => (
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
              How Freelancers Use timedigits
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Common workflows for tracking freelance hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {freelanceWorkflows.map((workflow) => (
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

          {/* Types of Freelancers */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Perfect For All Freelancers
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Whatever your freelance specialty, timedigits helps you track hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {freelanceTypes.map((item) => (
                <div key={item.type} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="text-slate-900 font-medium mb-1">{item.type}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Why Freelancers Choose timedigits
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              How we compare to other options.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="grid grid-cols-4 p-4 bg-slate-50 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Feature</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Toggl Free</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Harvest Free</div>
                </div>
                {[
                  { feature: "Free for individuals", timedigits: "Yes", toggl: "Limited", harvest: "1 project" },
                  { feature: "Unlimited projects", timedigits: "Yes", toggl: "5 max", harvest: "2 max" },
                  { feature: "Unlimited history", timedigits: "Yes", toggl: "Limited", harvest: "Yes" },
                  { feature: "CSV export", timedigits: "Yes", toggl: "Yes", harvest: "Yes" },
                  { feature: "Offline mode", timedigits: "Yes", toggl: "Yes", harvest: "No" },
                  { feature: "Mobile apps", timedigits: "Yes", toggl: "Yes", harvest: "Yes" },
                  { feature: "No upselling", timedigits: "Yes", toggl: "No", harvest: "No" },
                ].map((row, i) => (
                  <div key={row.feature} className={`grid grid-cols-4 p-4 ${i !== 6 ? "border-b border-slate-100" : ""}`}>
                    <div className="text-slate-700 text-sm">{row.feature}</div>
                    <div className="text-center text-teal-600 text-sm font-medium">{row.timedigits}</div>
                    <div className="text-center text-slate-500 text-sm">{row.toggl}</div>
                    <div className="text-center text-slate-500 text-sm">{row.harvest}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Freelancer FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Is timedigits really free for freelancers?</h3>
                <p className="text-slate-600">
                  Yes, 100% free for individual users. Unlimited projects, unlimited time entries, full exports,
                  offline mode, mobile apps — all free forever. We only charge for team features.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can I track multiple clients?</h3>
                <p className="text-slate-600">
                  Yes. Create a project for each client. Track time to specific projects.
                  Filter reports by client/project when invoicing. No limits on number of projects.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">How do I invoice clients with timedigits?</h3>
                <p className="text-slate-600">
                  Export your hours to CSV, then import into your invoicing tool (FreshBooks, Wave, QuickBooks, etc.)
                  or use the data to create manual invoices. Built-in invoicing is coming soon.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Does timedigits have hourly rate tracking?</h3>
                <p className="text-slate-600">
                  Hourly rates and billable hours tracking are coming soon. For now, export your hours and apply
                  rates in your invoicing software or spreadsheet.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">What if I grow and need a team?</h3>
                <p className="text-slate-600">
                  When you're ready for team features, upgrade to our team plan at $5/month for up to 5 users,
                  then $1/user after. Your individual data stays intact.
                </p>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <RelatedPages currentPage="freelance" />

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-teal-500/20 shadow-sm">
              <Briefcase size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Tracking Your Freelance Hours
              </h2>
              <p className="text-slate-600 mb-8">
                Free forever. No credit card. No limits. Just accurate time tracking for your freelance work.
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
              <p className="text-slate-500 text-sm mt-4">
                Join thousands of freelancers tracking time with timedigits
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
