import { ArrowRight, Check, X, Trophy, Wallet, Users, Sparkle, ChartLine, Receipt } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { cn } from "../lib/utils";

// Helper function to format price display
function formatPrice(price: number): string {
  if (Number.isInteger(price)) {
    return `$${price}`;
  }
  return `$${price.toFixed(2)}`;
}

// Helper function to format team cost
function formatTeamCost(cost: number): string {
  if (Number.isInteger(cost)) {
    return `$${cost}`;
  }
  return `$${Math.round(cost)}`;
}

// Comprehensive competitor data based on research of 100+ tools
const competitors = [
  { name: "Toggl Track", price: 10, hasFree: true, freeUsers: 5, invoicing: false, billable: true, clients: true, integrations: 100, gps: false, screenshots: false, tier: "mid" },
  { name: "Clockify", price: 5.49, hasFree: true, freeUsers: "unlimited", invoicing: true, billable: true, clients: true, integrations: 80, gps: true, screenshots: true, tier: "budget" },
  { name: "Harvest", price: 11, hasFree: true, freeUsers: 1, invoicing: true, billable: true, clients: true, integrations: 50, gps: false, screenshots: false, tier: "mid" },
  { name: "My Hours", price: 9, hasFree: true, freeUsers: 5, invoicing: false, billable: true, clients: true, integrations: 20, gps: false, screenshots: false, tier: "mid" },
  { name: "Hubstaff", price: 5, hasFree: false, freeUsers: 0, invoicing: true, billable: true, clients: true, integrations: 30, gps: true, screenshots: true, tier: "mid" },
  { name: "Time Doctor", price: 7, hasFree: false, freeUsers: 0, invoicing: false, billable: true, clients: false, integrations: 60, gps: false, screenshots: true, tier: "mid" },
  { name: "Paymo", price: 4, hasFree: true, freeUsers: 1, invoicing: true, billable: true, clients: true, integrations: 20, gps: false, screenshots: false, tier: "budget" },
  { name: "Everhour", price: 8.50, hasFree: true, freeUsers: 5, invoicing: true, billable: true, clients: true, integrations: 40, gps: false, screenshots: false, tier: "mid" },
  { name: "TimeCamp", price: 4, hasFree: true, freeUsers: "unlimited", invoicing: true, billable: true, clients: true, integrations: 100, gps: false, screenshots: false, tier: "budget" },
  { name: "TMetric", price: 5, hasFree: true, freeUsers: 5, invoicing: true, billable: true, clients: true, integrations: 50, gps: false, screenshots: false, tier: "budget" },
];

const featureCategories = [
  {
    name: "Core Time Tracking",
    features: [
      { name: "Timer (start/stop)", timedigits: true, common: 100 },
      { name: "Manual time entry", timedigits: true, common: 100 },
      { name: "Projects & tasks", timedigits: true, common: 100 },
      { name: "Basic reports", timedigits: true, common: 100 },
      { name: "CSV export", timedigits: true, common: 95 },
      { name: "Offline support", timedigits: true, common: 60 },
    ],
  },
  {
    name: "Billing & Invoicing",
    features: [
      { name: "Billable hours tracking", timedigits: "soon", common: 90 },
      { name: "Hourly rates", timedigits: "soon", common: 85 },
      { name: "Client management", timedigits: "soon", common: 80 },
      { name: "Invoice generation", timedigits: "soon", common: 60 },
    ],
  },
  {
    name: "Team Features",
    features: [
      { name: "Shared workspace", timedigits: true, common: 85 },
      { name: "Team reports", timedigits: true, common: 80 },
      { name: "Real-time sync", timedigits: true, common: 75 },
      { name: "Timesheet approvals", timedigits: "soon", common: 60 },
    ],
  },
  {
    name: "Monitoring (We Skip This)",
    features: [
      { name: "Activity tracking", timedigits: false, common: 30 },
      { name: "Screenshots", timedigits: false, common: 25 },
      { name: "GPS tracking", timedigits: false, common: 20 },
    ],
  },
];

const pricingTiers = [
  {
    tier: "Budget",
    range: "$1-5/user",
    tools: ["timedigits", "Paymo", "TimeCamp", "WebWork", "Apploye"],
    highlight: true,
  },
  {
    tier: "Mid-Market",
    range: "$5-15/user",
    tools: ["Toggl", "Clockify Pro", "Harvest", "Hubstaff", "Everhour"],
    highlight: false,
  },
  {
    tier: "Professional",
    range: "$15-30/user",
    tools: ["QuickBooks Time", "BigTime", "ClickTime", "Replicon"],
    highlight: false,
  },
  {
    tier: "Enterprise",
    range: "$30-50+/user",
    tools: ["BQE Core", "Scoro", "Kantata", "SAP"],
    highlight: false,
  },
];

const stats = [
  { number: "100+", label: "Tools analyzed", icon: ChartLine },
  { number: "90%", label: "Average savings", icon: Wallet },
  { number: "$1", label: "Per team member", icon: Users },
  { number: "Free", label: "For individuals", icon: Trophy },
];

export function Compare() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium mb-6">
              <Trophy size={14} weight="fill" />
              Comprehensive Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              How timedigits compares to{" "}
              <span className="text-teal-500">100+ alternatives</span>
            </h1>
            <p className="text-xl text-slate-600">
              We analyzed every major time tracking tool on the market.
              Here's what we found — and why we're different.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
                <stat.icon size={32} className="text-teal-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Differentiator */}
          <div className="rounded-3xl p-8 md:p-12 mb-20 border-2 border-teal-200 bg-teal-50/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  The honest truth about time trackers
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Most time tracking tools start cheap, then hit you with per-user fees that balloon as your team grows.
                  A 10-person team on Toggl costs $100/month. On Harvest, $110/month. On enterprise tools? $300+/month.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="text-slate-900 font-semibold">timedigits costs $10/month for that same team.</span>{" "}
                  That's not a typo. We believe tracking your time shouldn't cost more than your coffee budget.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center min-w-[200px] border border-slate-200 shadow-lg">
                <div className="text-5xl font-bold text-teal-500 mb-2">$10</div>
                <div className="text-slate-600 text-sm mb-4">10-person team/mo</div>
                <div className="text-slate-400 text-xs">vs. $90-300 elsewhere</div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison by Tier */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Where timedigits fits
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Time tracking tools range from free to $50+/user. Here's the landscape.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className={cn(
                    "rounded-2xl p-6 border transition-all duration-300",
                    tier.highlight
                      ? "border-teal-300 bg-teal-50 shadow-lg"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  )}
                >
                  {tier.highlight && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500 text-white text-xs font-bold mb-3">
                      <Sparkle size={12} weight="fill" />
                      Best Value
                    </div>
                  )}
                  <h3 className={cn(
                    "text-lg font-bold mb-1",
                    tier.highlight ? "text-teal-700" : "text-slate-900"
                  )}>
                    {tier.tier}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">{tier.range}</p>
                  <ul className="space-y-2">
                    {tier.tools.map((tool) => (
                      <li
                        key={tool}
                        className={cn(
                          "text-sm",
                          tool === "timedigits" ? "text-teal-600 font-semibold" : "text-slate-500"
                        )}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Direct Price Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              10-person team: monthly cost
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Real pricing based on public monthly pro plans as of December 2025.
            </p>

            <div className="max-w-4xl mx-auto">
              {/* Table header */}
              <div className="bg-white rounded-t-2xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-12 p-5 bg-slate-50 border-b border-slate-200">
                  <div className="col-span-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Tool
                  </div>
                  <div className="col-span-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Per User
                  </div>
                  <div className="col-span-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Team Cost
                  </div>
                  <div className="col-span-2 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Savings
                  </div>
                </div>

                {/* Table rows */}
                {competitors.slice(0, 10).map((comp, i) => {
                  const teamCost = comp.price * 10;
                  const savings = Math.round(((teamCost - 10) / teamCost) * 100);
                  return (
                    <div
                      key={comp.name}
                      className={cn(
                        "grid grid-cols-12 p-5 items-center transition-colors hover:bg-slate-50",
                        i !== 9 && "border-b border-slate-100"
                      )}
                    >
                      <div className="col-span-4 font-medium text-slate-900">
                        {comp.name}
                      </div>
                      <div className="col-span-3 text-center">
                        <span className="text-slate-600">{formatPrice(comp.price)}</span>
                        <span className="text-slate-400 text-sm">/user</span>
                      </div>
                      <div className="col-span-3 text-center">
                        <span className="text-slate-400 line-through">{formatTeamCost(teamCost)}/mo</span>
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-semibold">
                          {savings}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* timedigits row - highlighted */}
              <div className="bg-teal-50 rounded-b-2xl border border-t-0 border-teal-200 overflow-hidden">
                <div className="grid grid-cols-12 p-5 items-center">
                  <div className="col-span-4 font-bold text-teal-700 flex items-center gap-2">
                    timedigits
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="text-teal-600 font-semibold">$1</span>
                    <span className="text-teal-500/70 text-sm">/user</span>
                  </div>
                  <div className="col-span-3 text-center">
                    <span className="text-teal-600 font-bold text-lg">$10/mo</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-500 text-white text-sm font-bold">
                      <Trophy size={14} weight="fill" />
                      Best
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Feature comparison
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              What you get with timedigits vs. what competitors offer at 10x the price.
            </p>

            <div className="space-y-8 max-w-4xl mx-auto">
              {featureCategories.map((category) => (
                <div key={category.name} className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                  <div className="p-5 border-b border-slate-200 bg-slate-50">
                    <h3 className="font-bold text-slate-900">{category.name}</h3>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {category.features.map((feature) => (
                      <div key={feature.name} className="grid grid-cols-12 p-4 items-center hover:bg-slate-50 transition-colors">
                        <div className="col-span-5 text-slate-700 text-sm">{feature.name}</div>
                        <div className="col-span-3 text-center">
                          {feature.timedigits === true ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-100">
                              <Check size={16} className="text-teal-600" weight="bold" />
                            </span>
                          ) : feature.timedigits === "soon" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                              Soon
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100">
                              <X size={16} className="text-slate-400" />
                            </span>
                          )}
                        </div>
                        <div className="col-span-4 text-right">
                          <span className="text-slate-400 text-sm">{feature.common}% of competitors</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="mb-20">
            <div className="rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-slate-200 bg-slate-50">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                What we intentionally skip
              </h2>
              <p className="text-slate-600 mb-8">
                Some features exist to help managers spy on employees, not track time.
                We believe in trust over surveillance.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { feature: "Random screenshots", reason: "Invasive and demoralizing" },
                  { feature: "Keystroke logging", reason: "Privacy violation" },
                  { feature: "Mouse movement tracking", reason: "Measures presence, not productivity" },
                  { feature: "Webcam monitoring", reason: "Crosses the line" },
                ].map((item) => (
                  <div key={item.feature} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 flex-shrink-0 mt-0.5">
                      <X size={14} className="text-red-500" weight="bold" />
                    </span>
                    <div>
                      <span className="text-slate-900 font-medium">{item.feature}</span>
                      <p className="text-slate-500 text-sm mt-0.5">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="rounded-3xl p-8 md:p-12 border-2 border-teal-200 bg-teal-50">
              <Receipt size={48} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to save 90%?
              </h2>
              <p className="text-slate-600 mb-8">
                Free forever for individuals. $1/user for teams. No credit card required.
              </p>
              <a
                href="https://app.timedigits.ca/login"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/25"
              >
                <span>Start Free</span>
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
