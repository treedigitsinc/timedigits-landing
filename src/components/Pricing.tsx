"use client";
import { Check, Sparkle } from "@phosphor-icons/react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { cn } from "../lib/utils";

const plans = [
  {
    name: "Solo",
    price: "Free",
    description: "For individuals tracking their own time.",
    features: [
      "Unlimited time tracking",
      "Unlimited projects",
      "Full history forever",
      "Reports & CSV export",
      "Works offline",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Team",
    price: "$5",
    period: "/month",
    description: "For teams of up to 5 members.",
    features: [
      "Everything in Solo",
      "Up to 5 team members",
      "Shared workspace",
      "Team reports & analytics",
      "Real-time sync",
      "Extra members $1/mo",
    ],
    cta: "Start Trial",
    popular: true,
  },
];

const competitors = [
  { name: "Toggl", price: "$9/user", total: "$90/mo", savings: "89%" },
  { name: "Harvest", price: "$12/user", total: "$120/mo", savings: "92%" },
  { name: "Clockify Pro", price: "$5/user", total: "$50/mo", savings: "80%" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            No per-seat tiers. No hidden costs. No enterprise pricing.
            Just one flat fee for teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500",
                plan.popular
                  ? "bg-zinc-900/50 border-teal-500/30 shadow-[0_0_40px_-15px_rgba(20,184,166,0.3)]"
                  : "bg-zinc-900/20 border-zinc-800 hover:border-zinc-700"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkle size={14} weight="fill" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-zinc-500 font-medium">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check size={18} className="text-teal-500 mt-0.5 flex-shrink-0" weight="bold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://timedigits.vercel.app/signup" className="block">
                {plan.popular ? (
                  <HoverBorderGradient
                    containerClassName="w-full rounded-xl"
                    className="w-full bg-teal-500 text-white py-3 font-bold"
                  >
                    {plan.cta}
                  </HoverBorderGradient>
                ) : (
                  <button className="w-full py-3 rounded-xl bg-zinc-800 text-white font-bold hover:bg-zinc-700 transition-colors">
                    {plan.cta}
                  </button>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Competitor Comparison */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white">Compare to competitors</h3>
            <p className="text-zinc-500 text-sm mt-2">Based on a 10-person team</p>
          </div>

          <div className="glass rounded-3xl overflow-hidden border-zinc-800/50">
            <div className="grid grid-cols-4 p-6 border-b border-zinc-800/50 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <div className="col-span-1">Tool</div>
              <div className="text-center">Price/User</div>
              <div className="text-center">10-Person Team</div>
              <div className="text-right">Savings</div>
            </div>
            
            {competitors.map((comp, i) => (
              <div 
                key={comp.name} 
                className={cn(
                  "grid grid-cols-4 p-6 text-sm items-center",
                  i !== competitors.length - 1 && "border-b border-zinc-800/50"
                )}
              >
                <div className="font-bold text-white">{comp.name}</div>
                <div className="text-center text-zinc-400">{comp.price}</div>
                <div className="text-center text-zinc-400 line-through">{comp.total}</div>
                <div className="text-right text-teal-400 font-mono font-bold">Save {comp.savings}</div>
              </div>
            ))}
            
            <div className="grid grid-cols-4 p-6 bg-teal-500/10 items-center">
              <div className="font-bold text-teal-400">timedigits</div>
              <div className="text-center text-teal-400">$1/user</div>
              <div className="text-center text-teal-400 font-bold">$10/mo</div>
              <div className="text-right text-teal-400 font-mono font-bold">—</div>
            </div>
          </div>
          
          <p className="text-center text-zinc-600 text-xs mt-8">
            * Competitor pricing based on public monthly pro plans as of Dec 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
