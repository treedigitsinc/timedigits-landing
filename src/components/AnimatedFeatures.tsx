"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../lib/utils";
import {
  Timer,
  ChartBar,
  Export,
  Invoice,
  Users,
  Lightning
} from "@phosphor-icons/react";

const features = [
  {
    id: "timer",
    title: "One-click tracking",
    description: "Start with a click. Stop when done. No forms, no friction.",
    icon: Timer,
    color: "bg-sage-100 text-sage-700",
    accent: "bg-sage-500",
  },
  {
    id: "reports",
    title: "Clear reports",
    description: "See where your time goes with weekly summaries.",
    icon: ChartBar,
    color: "bg-stone-100 text-stone-700",
    accent: "bg-stone-500",
  },
  {
    id: "export",
    title: "Export anywhere",
    description: "CSV exports for invoicing or your spreadsheet.",
    icon: Export,
    color: "bg-amber-50 text-amber-700",
    accent: "bg-amber-500",
  },
  {
    id: "invoices",
    title: "Create invoices",
    description: "Turn tracked time into professional invoices.",
    icon: Invoice,
    color: "bg-rose-50 text-rose-700",
    accent: "bg-rose-400",
  },
  {
    id: "team",
    title: "Team workspaces",
    description: "Share projects and track together in real-time.",
    icon: Users,
    color: "bg-indigo-50 text-indigo-700",
    accent: "bg-indigo-500",
  },
  {
    id: "api",
    title: "API & integrations",
    description: "Connect with Jira, Linear, Asana, or build your own.",
    icon: Lightning,
    color: "bg-purple-50 text-purple-700",
    accent: "bg-purple-500",
  },
];

export function AnimatedFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="features" ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-stone-900 mb-4">
            Everything you need
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Simple tools that work together. No bloat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-lg hover:shadow-stone-100 transition-all duration-300"
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  feature.color
                )}>
                  <Icon size={24} weight="duotone" />
                </div>

                <h3 className="text-lg font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
