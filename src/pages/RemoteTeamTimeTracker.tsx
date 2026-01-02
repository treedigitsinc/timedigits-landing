import { ArrowLeft, ArrowRight, Check, Trophy, Globe, UsersThree, WifiSlash, Clock, DeviceMobile, ChartLine } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

const remoteFeatures = [
  {
    icon: Globe,
    title: "Works across time zones",
    description: "Real-time sync keeps everyone on the same page, whether they're in New York, London, or Tokyo.",
  },
  {
    icon: WifiSlash,
    title: "Offline-first design",
    description: "Track time without internet. Perfect for travel, coffee shops, or unreliable connections.",
  },
  {
    icon: DeviceMobile,
    title: "Mobile apps",
    description: "iOS and Android apps let remote workers track time from anywhere on any device.",
  },
  {
    icon: UsersThree,
    title: "Team visibility",
    description: "See what your distributed team is working on without invasive monitoring.",
  },
  {
    icon: ChartLine,
    title: "Async-friendly reports",
    description: "Generate reports anytime. No need to wait for everyone to be online.",
  },
  {
    icon: Clock,
    title: "Simple timer",
    description: "One-click to start, one-click to stop. No training needed for new remote hires.",
  },
];

const remoteWorkflows = [
  {
    title: "Distributed teams",
    description: "Team members across multiple countries tracking to shared projects.",
    benefits: ["Real-time sync across time zones", "Shared project views", "Team reports for managers"],
  },
  {
    title: "Hybrid workplaces",
    description: "Some in-office, some remote. Same time tracking for everyone.",
    benefits: ["Works on desktop and mobile", "No location tracking", "Consistent experience everywhere"],
  },
  {
    title: "Remote contractors",
    description: "Freelancers and contractors tracking billable hours for clients.",
    benefits: ["Export hours for invoicing", "Project-based tracking", "Client-specific reports"],
  },
];

const noSurveillanceFeatures = [
  { feature: "Screenshots", hasIt: false },
  { feature: "Keystroke logging", hasIt: false },
  { feature: "Mouse movement tracking", hasIt: false },
  { feature: "Webcam monitoring", hasIt: false },
  { feature: "GPS location tracking", hasIt: false },
  { feature: "App usage monitoring", hasIt: false },
  { feature: "Idle time detection", hasIt: false },
  { feature: "Random screenshots", hasIt: false },
];

export function RemoteTeamTimeTracker() {
  useSEO(seoData.remoteTeam);

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
              Built for Remote Teams
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Remote Teams
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track time across distributed teams without surveillance. Real-time sync, offline mode,
              and mobile apps. $1/user/month — no per-seat enterprise pricing.
            </p>
            <a href="https://app.timedigits.ca/login">
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
              Quick Answer: Best Time Tracker for Remote Teams?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for remote teams because
              it prioritizes trust over surveillance:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">No surveillance</strong> — no screenshots, keystroke logging, or webcam monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Works offline</strong> — track time anywhere, syncs when you reconnect</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Real-time sync</strong> — see team activity across time zones instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Mobile apps</strong> — iOS and Android for on-the-go tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">$1/user/month</strong> — 90% cheaper than Time Doctor or Hubstaff</span>
              </li>
            </ul>
          </div>

          {/* No Surveillance */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Time Tracking, Not Surveillance
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              We believe remote work is built on trust. Here's what timedigits does NOT do:
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden border border-zinc-800/50">
                {noSurveillanceFeatures.map((item, i) => (
                  <div key={item.feature} className={`flex items-center justify-between p-4 ${i !== noSurveillanceFeatures.length - 1 ? "border-b border-zinc-800/30" : ""}`}>
                    <span className="text-zinc-300">{item.feature}</span>
                    <span className="text-red-400 font-medium">Never</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm text-center mt-4">
                We track time, not activity. Your remote team deserves trust.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for Distributed Work
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Features that make remote time tracking seamless.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {remoteFeatures.map((feature) => (
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
              How Remote Teams Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for distributed teams.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {remoteWorkflows.map((workflow) => (
                <div key={workflow.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <h3 className="text-white font-semibold mb-2">{workflow.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{workflow.description}</p>
                  <ul className="space-y-2">
                    {workflow.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                        <span className="text-zinc-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Remote Team FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for remote teams?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for remote teams that value trust over surveillance. It has real-time sync,
                  offline mode, and mobile apps — without screenshots or monitoring. At $1/user, it's 90% cheaper
                  than surveillance tools like Time Doctor.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits monitor remote employees?</h3>
                <p className="text-zinc-400">
                  No. timedigits tracks time only. No screenshots, no keystroke logging, no webcam monitoring,
                  no GPS tracking. We believe remote work is built on trust, not surveillance.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How does real-time sync work across time zones?</h3>
                <p className="text-zinc-400">
                  When any team member starts, stops, or logs time, it syncs instantly to everyone's view.
                  Managers can see what the team is working on in real-time, regardless of time zone.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can remote workers track time offline?</h3>
                <p className="text-zinc-400">
                  Yes. timedigits is built offline-first. Track time without internet — on planes, in coffee shops,
                  anywhere. Everything syncs automatically when you reconnect.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much does remote team time tracking cost?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 users, then $1/user after. A 20-person remote team costs $20/month.
                  Compare to Time Doctor at $140/month or Hubstaff at $100/month.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Globe size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Track Time Across Your Remote Team
              </h2>
              <p className="text-zinc-400 mb-8">
                14-day free trial. No surveillance. No credit card required.
              </p>
              <a href="https://app.timedigits.ca/login">
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
