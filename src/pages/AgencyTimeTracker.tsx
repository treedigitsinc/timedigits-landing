import { ArrowRight, Check, Trophy, Buildings, UsersThree, ChartLine, CurrencyDollar, Export, Clock } from "@phosphor-icons/react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const agencyFeatures = [
  {
    icon: UsersThree,
    title: "Team tracking",
    description: "See what everyone's working on. Track hours across your entire team with real-time sync.",
  },
  {
    icon: Buildings,
    title: "Client workspaces",
    description: "Organize time by client. Separate projects, separate reports, zero confusion.",
  },
  {
    icon: ChartLine,
    title: "Team reports",
    description: "View hours by person, project, or client. Export reports for invoicing or internal review.",
  },
  {
    icon: CurrencyDollar,
    title: "$1/user pricing",
    description: "A 10-person agency pays $10/month. A 20-person agency pays $20/month. No enterprise pricing.",
  },
  {
    icon: Export,
    title: "Bulk export",
    description: "Export all team time data to CSV. Import into accounting, invoicing, or payroll systems.",
  },
  {
    icon: Clock,
    title: "Billable tracking",
    description: "Mark entries as billable or non-billable. Know exactly what to invoice clients.",
  },
];

const agencyUseCases = [
  {
    title: "Creative agencies",
    description: "Track designer, developer, and copywriter hours across campaigns and retainers.",
  },
  {
    title: "Marketing agencies",
    description: "Log time on client accounts, campaigns, reporting, and strategy work.",
  },
  {
    title: "Development shops",
    description: "Track sprints, support hours, and project milestones for accurate billing.",
  },
  {
    title: "Consulting firms",
    description: "Bill by the hour with confidence. Track every meeting, call, and deliverable.",
  },
  {
    title: "Design studios",
    description: "Log creative work, revisions, client meetings, and project management time.",
  },
  {
    title: "PR agencies",
    description: "Track media outreach, client calls, event planning, and crisis management hours.",
  },
];

const pricingComparison = [
  { teamSize: "5 users", timedigits: "$5/mo", toggl: "$50/mo", harvest: "$55/mo", clockify: "$27/mo" },
  { teamSize: "10 users", timedigits: "$10/mo", toggl: "$100/mo", harvest: "$110/mo", clockify: "$55/mo" },
  { teamSize: "20 users", timedigits: "$20/mo", toggl: "$200/mo", harvest: "$220/mo", clockify: "$110/mo" },
  { teamSize: "50 users", timedigits: "$50/mo", toggl: "$500/mo", harvest: "$550/mo", clockify: "$275/mo" },
];

export function AgencyTimeTracker() {
  useSEO(seoData.agency);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Built for Agency Teams
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Time Tracker for Agencies
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Track billable hours across clients and team members. Simple pricing that scales with your agency.
              $5/month for up to 5 users, then $1/user after.
            </p>
            <a href="https://app.timedigits.ca/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Answer: Best Time Tracker for Agencies?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              <strong className="text-slate-900">timedigits</strong> is the best time tracker for agencies because
              it combines team features with genuinely affordable pricing:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">$1/user/month</strong> — a 20-person agency pays $20/month, not $200</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Client workspaces</strong> — organize projects by client for clean billing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Team reports</strong> — see hours by person, project, or client</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">Real-time sync</strong> — everyone sees the same data, updated instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-slate-900">No surveillance</strong> — track time, not keystrokes or screenshots</span>
              </li>
            </ul>
          </div>

          {/* Pricing Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Agency Pricing Comparison
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              See how much you save with timedigits at any team size.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <div className="grid grid-cols-5 p-4 bg-slate-50 border-b border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Team Size</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-teal-600">timedigits</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Toggl</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Harvest</div>
                  <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">Clockify</div>
                </div>
                {pricingComparison.map((row, i) => (
                  <div key={row.teamSize} className={`grid grid-cols-5 p-4 ${i !== pricingComparison.length - 1 ? "border-b border-slate-100" : ""}`}>
                    <div className="text-slate-600 text-sm font-medium">{row.teamSize}</div>
                    <div className="text-center text-teal-600 text-sm font-bold">{row.timedigits}</div>
                    <div className="text-center text-slate-500 text-sm">{row.toggl}</div>
                    <div className="text-center text-slate-500 text-sm">{row.harvest}</div>
                    <div className="text-center text-slate-500 text-sm">{row.clockify}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm text-center mt-4">
                Prices based on standard paid tiers. timedigits: $5 base + $1/user. Toggl: $10/user. Harvest: $11/user. Clockify Pro: $5.49/user.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Everything Agencies Need
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Team features without enterprise pricing.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {agencyFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <feature.icon size={28} className="text-teal-500 mb-4" />
                  <h3 className="text-slate-900 font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Perfect For All Agency Types
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Whatever services you offer, timedigits helps track billable time.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {agencyUseCases.map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <h3 className="text-slate-900 font-medium mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
              Agency FAQ
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">What's the best time tracker for agencies?</h3>
                <p className="text-slate-600">
                  timedigits is ideal for agencies because it combines team tracking, client organization,
                  and reports at $1/user/month. Most agencies save 80-90% compared to Toggl or Harvest.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">How much does timedigits cost for a 10-person agency?</h3>
                <p className="text-slate-600">
                  $10/month total. The first 5 users are included in the $5 base, then it's $1/user after.
                  Compare to Toggl at $100/month or Harvest at $110/month.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can I track time for different clients separately?</h3>
                <p className="text-slate-600">
                  Yes. Create projects for each client. Team members log time to specific projects.
                  Run reports filtered by client for invoicing. Keep everything organized.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Can managers see team reports?</h3>
                <p className="text-slate-600">
                  Yes. Admins and managers can view team reports showing hours by person, project, or date range.
                  Perfect for resource planning, invoicing, and productivity reviews.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-2">Is there a free trial for agency teams?</h3>
                <p className="text-slate-600">
                  Yes. Teams get a 14-day free trial with full access to all features.
                  No credit card required. Cancel anytime if it's not for you.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-teal-500/20 shadow-sm">
              <Buildings size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Start Tracking Your Agency's Time
              </h2>
              <p className="text-slate-600 mb-8">
                14-day free trial. No credit card required. Team pricing that actually makes sense.
              </p>
              <a href="https://app.timedigits.ca/login">
                <HoverBorderGradient
                  containerClassName="rounded-full mx-auto"
                  className="bg-white text-slate-900 flex items-center gap-2 px-8 py-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
              <p className="text-slate-500 text-sm mt-4">
                Join hundreds of agencies tracking time with timedigits
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
