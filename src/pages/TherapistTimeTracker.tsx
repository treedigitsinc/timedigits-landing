import { ArrowLeft, ArrowRight, Check, Trophy, Heart, Clock, Briefcase, Export, CalendarBlank, ShieldCheck } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const therapistFeatures = [
  {
    icon: Clock,
    title: "Session tracking",
    description: "Track billable session hours. Log therapy sessions, consultations, and admin time.",
  },
  {
    icon: Briefcase,
    title: "Client organization",
    description: "Organize time by client for billing and insurance documentation.",
  },
  {
    icon: CalendarBlank,
    title: "Weekly summaries",
    description: "Review your week at a glance. See session counts and total hours.",
  },
  {
    icon: Export,
    title: "Export for billing",
    description: "Export hours for invoicing or insurance claims. CSV format works everywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-focused",
    description: "No surveillance. No screenshots. Your clients' privacy is protected.",
  },
  {
    icon: Heart,
    title: "Free for solo practice",
    description: "Individual therapists pay nothing. Track unlimited clients at zero cost.",
  },
];

const therapistWorkflows = [
  {
    title: "Session billing",
    description: "Track sessions for client invoicing.",
    steps: ["Log session time", "Note session type", "Track documentation time", "Export for billing"],
  },
  {
    title: "Insurance claims",
    description: "Document time for insurance submissions.",
    steps: ["Track session hours", "Note CPT codes", "Log admin time", "Generate reports"],
  },
  {
    title: "Practice management",
    description: "Understand where your time goes.",
    steps: ["Track all activities", "Review weekly summaries", "Identify time drains", "Optimize schedule"],
  },
];

const therapistTypes = [
  { type: "Psychologists", description: "Track therapy sessions, assessments, and report writing." },
  { type: "Counselors", description: "Log individual and group session hours." },
  { type: "Social workers", description: "Track client sessions, case management, and documentation." },
  { type: "Marriage & family therapists", description: "Log couples and family session hours." },
  { type: "Psychiatrists", description: "Track consultations, med management, and therapy sessions." },
  { type: "Life coaches", description: "Log coaching sessions and client communication." },
];

export function TherapistTimeTracker() {
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
              Free for Solo Practice
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Time Tracker for Therapists
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Track session hours for billing and insurance. Privacy-focused, no surveillance.
              Free forever for solo therapists — no limits, no credit card.
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
              Quick Answer: Best Time Tracker for Therapists?
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-white">timedigits</strong> is ideal for mental health professionals
              who need simple, privacy-focused time tracking:
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Free for solo practice</strong> — unlimited clients and sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Privacy-focused</strong> — no screenshots, no surveillance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Session tracking</strong> — log therapy, consultation, and admin time</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">CSV export</strong> — for billing and insurance claims</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-teal-400 mt-0.5 flex-shrink-0" weight="bold" />
                <span><strong className="text-white">Simple interface</strong> — focus on clients, not software</span>
              </li>
            </ul>
            <p className="text-zinc-400 mt-6 text-sm">
              <strong>Note:</strong> timedigits is for time tracking only. For full practice management (scheduling,
              notes, billing), use dedicated therapy practice software.
            </p>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Built for Therapy Practice
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Simple time tracking that respects client privacy.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {therapistFeatures.map((feature) => (
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
              How Therapists Use timedigits
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Common workflows for therapy practice time tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {therapistWorkflows.map((workflow) => (
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

          {/* Therapist Types */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Perfect For All Mental Health Professionals
            </h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
              Whatever your specialty, timedigits helps track session hours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {therapistTypes.map((item) => (
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
              Therapist FAQ
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">What's the best time tracker for therapists?</h3>
                <p className="text-zinc-400">
                  timedigits is ideal for therapists who need simple session tracking. Free for solo practice,
                  privacy-focused (no surveillance), and exports for billing and insurance.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is timedigits HIPAA compliant?</h3>
                <p className="text-zinc-400">
                  timedigits tracks time only — not client names or clinical data. For HIPAA compliance,
                  use client IDs instead of names. The tool has no access to protected health information.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Can I use this for insurance documentation?</h3>
                <p className="text-zinc-400">
                  Yes. Track session hours and export to CSV. Add notes for session types.
                  Use the export data to support insurance claims.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Is it free for solo therapists?</h3>
                <p className="text-zinc-400">
                  Yes, 100% free forever. Individual therapists can track unlimited clients and sessions
                  at no cost. We only charge for team features.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">How much for a group practice?</h3>
                <p className="text-zinc-400">
                  $5/month for up to 5 therapists, then $1/therapist after.
                  A 10-person practice costs $10/month.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 border border-teal-500/20">
              <Heart size={48} className="text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Start Tracking Your Sessions
              </h2>
              <p className="text-zinc-400 mb-8">
                Free forever for solo practice. Privacy-focused. Bill accurately.
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
