import { ArrowLeft, ArrowRight, Check, X, ShieldCheck, Eye, EyeSlash, Camera, Keyboard, MouseSimple, MapPin, Lock, Heart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useSEO } from "../hooks/useSEO";
import { seoData } from "../data/seoData";

// Surveillance features comparison
const surveillanceComparison = [
  { tool: "timedigits", screenshots: false, keystroke: false, mouse: false, webcam: false, gps: false, category: "privacy" },
  { tool: "Toggl Track", screenshots: false, keystroke: false, mouse: false, webcam: false, gps: false, category: "privacy" },
  { tool: "Harvest", screenshots: false, keystroke: false, mouse: false, webcam: false, gps: false, category: "privacy" },
  { tool: "Clockify", screenshots: true, keystroke: false, mouse: false, webcam: false, gps: true, category: "optional" },
  { tool: "Hubstaff", screenshots: true, keystroke: true, mouse: true, webcam: false, gps: true, category: "surveillance" },
  { tool: "Time Doctor", screenshots: true, keystroke: true, mouse: true, webcam: true, gps: false, category: "surveillance" },
  { tool: "ActivTrak", screenshots: true, keystroke: true, mouse: true, webcam: false, gps: false, category: "surveillance" },
  { tool: "Teramind", screenshots: true, keystroke: true, mouse: true, webcam: true, gps: false, category: "surveillance" },
];

const privacyFeatures = [
  {
    icon: EyeSlash,
    title: "No screenshots",
    description: "We never capture your screen. What you're working on is your business.",
  },
  {
    icon: Keyboard,
    title: "No keystroke logging",
    description: "We don't record what you type. Your messages and passwords stay private.",
  },
  {
    icon: MouseSimple,
    title: "No mouse tracking",
    description: "We don't monitor mouse movements or 'activity levels'. Presence isn't productivity.",
  },
  {
    icon: Camera,
    title: "No webcam access",
    description: "We never access your camera. Period. No 'verification selfies' or random captures.",
  },
  {
    icon: MapPin,
    title: "No GPS tracking",
    description: "We don't track your location. Where you work from is irrelevant to time tracking.",
  },
  {
    icon: Lock,
    title: "Your data, your control",
    description: "Export your data anytime. Delete your account and all data is gone. No data selling.",
  },
];

const whyNoSurveillance = [
  {
    title: "Surveillance doesn't improve productivity",
    description: "Studies show monitored employees are more stressed, less creative, and more likely to quit. Trust works better than surveillance.",
  },
  {
    title: "It's a privacy violation",
    description: "Random screenshots can capture personal messages, banking info, health records. That's not acceptable.",
  },
  {
    title: "It measures presence, not output",
    description: "Moving a mouse doesn't mean working. A programmer thinking is working. Surveillance misses this entirely.",
  },
  {
    title: "It damages team culture",
    description: "When you spy on employees, you signal distrust. Good people leave. What's left is compliance, not engagement.",
  },
];

export function TimeTrackerNoSurveillance() {
  useSEO(seoData.noSurveillance);

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
              <ShieldCheck size={14} weight="fill" />
              Privacy-First Time Tracking
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker Without Screenshots or Monitoring
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track time without surveillance. No screenshots, no keystroke logging, no mouse tracking.
              Just simple, honest time tracking that respects your privacy.
            </p>
            <a href="https://timedigits.vercel.app/login">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
              >
                <span>Start Free — No Surveillance Ever</span>
                <ArrowRight size={18} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          {/* Quick Answer Box */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-20 border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-transparent max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quick Answer: Time Tracker Without Surveillance?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is a time tracker that intentionally excludes
              all surveillance features. We believe in tracking time, not monitoring employees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Camera, label: "No screenshots", active: true },
                { icon: Keyboard, label: "No keylogging", active: true },
                { icon: MouseSimple, label: "No mouse tracking", active: true },
                { icon: Eye, label: "No webcam", active: true },
                { icon: MapPin, label: "No GPS", active: true },
                { icon: Lock, label: "Data encryption", active: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20">
                    <Check size={14} className="text-teal-400" weight="bold" />
                  </span>
                  <span className="text-zinc-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Don't Do */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              What timedigits Will Never Do
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              These features exist in other tools. We intentionally exclude them.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {privacyFeatures.map((feature) => (
                <div key={feature.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10">
                      <feature.icon size={22} className="text-red-400" />
                    </span>
                    <X size={16} className="text-red-400" weight="bold" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Surveillance Features by Tool
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              See which time trackers include invasive monitoring.
            </p>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left p-4 text-zinc-400 font-medium text-sm">Tool</th>
                    <th className="text-center p-4 text-zinc-400 font-medium text-sm">Screenshots</th>
                    <th className="text-center p-4 text-zinc-400 font-medium text-sm">Keystrokes</th>
                    <th className="text-center p-4 text-zinc-400 font-medium text-sm">Mouse</th>
                    <th className="text-center p-4 text-zinc-400 font-medium text-sm">Webcam</th>
                    <th className="text-center p-4 text-zinc-400 font-medium text-sm">GPS</th>
                  </tr>
                </thead>
                <tbody>
                  {surveillanceComparison.map((tool) => (
                    <tr
                      key={tool.tool}
                      className={`border-b border-zinc-800/50 ${
                        tool.tool === "timedigits" ? "bg-teal-500/5" : ""
                      }`}
                    >
                      <td className="p-4">
                        <span className={`font-medium ${tool.tool === "timedigits" ? "text-teal-400" : "text-white"}`}>
                          {tool.tool}
                        </span>
                        {tool.category === "privacy" && (
                          <span className="ml-2 text-xs bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">
                            Privacy-first
                          </span>
                        )}
                        {tool.category === "surveillance" && (
                          <span className="ml-2 text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                            Surveillance
                          </span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {tool.screenshots ? (
                          <Eye size={18} className="text-red-400 mx-auto" />
                        ) : (
                          <EyeSlash size={18} className="text-teal-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-4">
                        {tool.keystroke ? (
                          <Eye size={18} className="text-red-400 mx-auto" />
                        ) : (
                          <EyeSlash size={18} className="text-teal-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-4">
                        {tool.mouse ? (
                          <Eye size={18} className="text-red-400 mx-auto" />
                        ) : (
                          <EyeSlash size={18} className="text-teal-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-4">
                        {tool.webcam ? (
                          <Eye size={18} className="text-red-400 mx-auto" />
                        ) : (
                          <EyeSlash size={18} className="text-teal-400 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-4">
                        {tool.gps ? (
                          <Eye size={18} className="text-red-400 mx-auto" />
                        ) : (
                          <EyeSlash size={18} className="text-teal-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-zinc-600 text-xs mt-4">
              <EyeSlash size={14} className="inline text-teal-400" /> = No surveillance | <Eye size={14} className="inline text-red-400" /> = Has surveillance feature
            </p>
          </section>

          {/* Why No Surveillance */}
          <section className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why We Reject Surveillance
            </h2>

            <div className="space-y-6">
              {whyNoSurveillance.map((item) => (
                <div key={item.title} className="glass rounded-2xl p-6 border border-zinc-800/50">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Privacy FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Does timedigits take any screenshots?</h3>
                <p className="text-zinc-400">
                  No. Never. We don't have screenshot functionality in our product at all.
                  We won't add it in the future. It's a philosophical choice, not a missing feature.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What data does timedigits collect?</h3>
                <p className="text-zinc-400">
                  Only what's needed for time tracking: when you start/stop timers, project names, and time entries.
                  We don't collect browsing history, app usage, location, or any behavioral data.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can my manager see what I'm working on?</h3>
                <p className="text-zinc-400">
                  Managers can see your time entries and project allocations — what you choose to log.
                  They cannot see your screen, apps, websites, or anything else. You control what you report.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is there an "activity level" or "productivity score"?</h3>
                <p className="text-zinc-400">
                  No. We don't measure mouse movements or keyboard activity. These metrics are meaningless
                  for knowledge work and create anxiety without improving anything.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What if my company requires surveillance software?</h3>
                <p className="text-zinc-400">
                  That's between you and your employer. timedigits isn't the right tool for that use case.
                  We recommend having a conversation about trust and productivity with your leadership.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Heart size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Time Tracking Without the Creep Factor
              </h2>
              <p className="text-zinc-400 mb-8">
                Track your time with a tool that respects your privacy. Free for individuals.
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
