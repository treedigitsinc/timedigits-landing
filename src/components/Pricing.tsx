"use client";
import { Check, ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
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
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Team",
    price: "$5",
    period: "/month",
    description: "For teams. Extra members $1/mo each.",
    features: [
      "Everything in Solo",
      "Up to 5 team members",
      "Shared workspace",
      "Team reports",
      "Real-time sync",
    ],
    cta: "Start Trial",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-stone-900 mb-4">
            Simple pricing
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            No hidden fees. No enterprise tiers. Just honest pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl transition-all duration-300",
                plan.popular
                  ? "bg-white border-2 border-sage-300 shadow-xl shadow-sage-100/50"
                  : "bg-white border border-stone-200 hover:border-stone-300"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sage-500 text-white text-xs font-bold rounded-full">
                  POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-1">{plan.name}</h3>
                <p className="text-stone-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-stone-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-stone-400 font-medium">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-stone-600">
                    <Check size={18} className="text-sage-500 mt-0.5 flex-shrink-0" weight="bold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.timedigits.ca/login"
                className={cn(
                  "w-full py-3 rounded-xl font-semibold text-center transition-colors",
                  plan.popular
                    ? "bg-stone-900 text-white hover:bg-stone-800"
                    : "bg-stone-100 text-stone-900 hover:bg-stone-200"
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-600 mb-4">
              <span className="font-semibold text-stone-900">Save 90%</span> compared to Toggl & Harvest
            </p>
            <p className="text-stone-400 text-sm mb-4">
              10-person team: $10/mo vs $100+/mo with competitors
            </p>
            <a
              href="/compare"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium text-sm transition-colors"
            >
              See full comparison
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
