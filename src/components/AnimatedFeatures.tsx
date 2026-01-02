"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import {
  Timer,
  ChartBar,
  Export,
  FileText,
  Users,
  Lightning
} from "@phosphor-icons/react";

const features = [
  {
    id: "timer",
    title: "One-click tracking",
    description: "Start with a click. Stop when done. No setup, no forms, no friction.",
    icon: Timer,
    color: "bg-sage-100",
    iconColor: "text-sage-600",
    activeGradient: "from-sage-500 to-sage-600",
  },
  {
    id: "reports",
    title: "Clear reports",
    description: "See where your time goes with beautiful weekly summaries and insights.",
    icon: ChartBar,
    color: "bg-stone-100",
    iconColor: "text-stone-600",
    activeGradient: "from-stone-500 to-stone-600",
  },
  {
    id: "export",
    title: "Export anywhere",
    description: "One-click CSV exports for invoicing, accounting, or your spreadsheet.",
    icon: Export,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    activeGradient: "from-amber-500 to-amber-600",
  },
  {
    id: "invoices",
    title: "Create invoices",
    description: "Turn tracked time into professional invoices. Set rates, generate PDFs.",
    icon: FileText,
    color: "bg-rose-50",
    iconColor: "text-rose-500",
    activeGradient: "from-rose-400 to-rose-500",
    teamOnly: true,
  },
  {
    id: "team",
    title: "Team workspaces",
    description: "Share projects and track together. Real-time sync across your team.",
    icon: Users,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    activeGradient: "from-indigo-500 to-indigo-600",
    teamOnly: true,
  },
  {
    id: "api",
    title: "API & integrations",
    description: "Connect with Jira, Linear, Asana, or build your own with our REST API.",
    icon: Lightning,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    activeGradient: "from-purple-500 to-purple-600",
    teamOnly: true,
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  isActive: boolean;
  onClick: () => void;
}

function FeatureCard({ feature, isActive, onClick }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative p-5 rounded-2xl text-left transition-all duration-300 group overflow-hidden",
        isActive
          ? "bg-white border-2 border-sage-300 shadow-lg shadow-sage-100/50"
          : "bg-stone-50 border border-stone-200 hover:border-stone-300 hover:shadow-md"
      )}
    >
      {/* Active glow */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Team Only Badge */}
      {feature.teamOnly && (
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-indigo-100 text-indigo-600 border border-indigo-200">
            Team
          </span>
        </div>
      )}

      <div className="relative z-10">
        <div className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
          isActive
            ? `bg-gradient-to-br ${feature.activeGradient} text-white`
            : `${feature.color} ${feature.iconColor}`
        )}>
          <Icon size={22} weight="duotone" />
        </div>

        <h3 className={cn(
          "font-semibold text-base mb-1.5 transition-colors duration-300",
          isActive ? "text-stone-900" : "text-stone-700 group-hover:text-stone-900"
        )}>
          {feature.title}
        </h3>

        <p className={cn(
          "text-sm leading-relaxed transition-colors duration-300",
          isActive ? "text-stone-600" : "text-stone-500 group-hover:text-stone-600"
        )}>
          {feature.description}
        </p>
      </div>

      {/* Active indicator line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-500 to-sage-400 origin-left"
      />
    </motion.button>
  );
}

function LiveFeatureDemo({ activeFeature }: { activeFeature: string }) {
  const [demoData, setDemoData] = useState({
    hoursToday: 6.4,
    progressPercent: 75,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoData(prev => ({
        hoursToday: prev.hoursToday + 0.01,
        progressPercent: Math.min(prev.progressPercent + 0.1, 100),
      }));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos: Record<string, React.ReactNode> = {
    timer: (
      <div className="space-y-4">
        <div className="text-center py-6">
          <div className="font-mono text-5xl font-light text-stone-900 tabular-nums mb-2">
            02:34:17
          </div>
          <div className="text-sm text-stone-500">Project Alpha</div>
        </div>
        <div className="flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-sage-500 flex items-center justify-center text-white shadow-lg shadow-sage-200"
          >
            <Timer size={28} weight="fill" />
          </motion.div>
        </div>
      </div>
    ),
    reports: (
      <div className="space-y-4">
        <div className="flex items-end gap-1 h-28">
          {[30, 45, 65, 40, 75, 55, demoData.progressPercent].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={cn(
                "flex-1 rounded-t",
                i === 6 ? "bg-sage-500" : "bg-stone-200"
              )}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-stone-400">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-sage-600 font-medium">Today</span>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
          <div>
            <div className="text-2xl font-semibold text-stone-900">{demoData.hoursToday.toFixed(1)}h</div>
            <div className="text-xs text-stone-500">Today</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-stone-900">38.2h</div>
            <div className="text-xs text-stone-500">This week</div>
          </div>
        </div>
      </div>
    ),
    export: (
      <div className="space-y-3">
        <div className="font-mono text-xs text-stone-600 bg-stone-100 rounded-lg p-4 overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-stone-400">date,project,hours,notes</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-sage-600">2025-12-27</span>,Design System,<span className="text-amber-600">4.5</span>,"Components"
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="text-sage-600">2025-12-27</span>,Marketing,<span className="text-amber-600">2.0</span>,"Landing"
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <span className="text-sage-600">2025-12-26</span>,API Docs,<span className="text-amber-600">6.0</span>,"Endpoints"
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 rounded-xl bg-stone-900 text-white font-medium text-sm flex items-center justify-center gap-2"
        >
          <Export size={16} weight="bold" />
          Download CSV
        </motion.button>
      </div>
    ),
    invoices: (
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="font-semibold text-stone-900">INVOICE</div>
              <div className="text-xs text-stone-400">#INV-2024-0042</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-stone-400">Due: Jan 15, 2025</div>
            </div>
          </div>
          <div className="border-t border-stone-100 pt-3 space-y-2">
            <div className="flex justify-between text-sm text-stone-600">
              <span>Design System (45h)</span>
              <span>$4,500</span>
            </div>
            <div className="flex justify-between text-sm text-stone-600">
              <span>Marketing Site (20h)</span>
              <span>$2,000</span>
            </div>
          </div>
          <div className="border-t border-stone-100 mt-3 pt-3 flex justify-between font-semibold">
            <span className="text-stone-900">Total</span>
            <span className="text-sage-600">$6,500</span>
          </div>
        </div>
      </div>
    ),
    team: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm",
                  ["bg-indigo-500", "bg-blue-500", "bg-sage-500", "bg-amber-500", "bg-rose-400"][i]
                )}
              >
                {["JZ", "MK", "AL", "SR", "TD"][i]}
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-stone-500">5 members online</span>
        </div>
        {["Design System", "Marketing Site", "API Docs"].map((project, i) => (
          <motion.div
            key={project}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-stone-100"
          >
            <div className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", ["bg-indigo-500", "bg-blue-500", "bg-sage-500"][i])} />
              <span className="text-sm text-stone-700">{project}</span>
            </div>
            <span className="text-xs text-stone-400">{[3, 1, 1][i]} tracking</span>
          </motion.div>
        ))}
      </div>
    ),
    api: (
      <div className="space-y-3">
        <div className="font-mono text-xs bg-stone-900 rounded-lg p-4 overflow-hidden text-stone-300">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-stone-500">
            // Create project via API
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-purple-400">POST</span> <span className="text-sage-400">/api/projects</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-2">
            {`{`}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {"  "}<span className="text-blue-400">"name"</span>: <span className="text-amber-400">"New Feature"</span>,
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {"  "}<span className="text-blue-400">"client"</span>: <span className="text-amber-400">"Acme Inc"</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {`}`}
          </motion.div>
        </div>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Connected to Linear, Jira, Asana
        </div>
      </div>
    ),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFeature}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 border border-stone-200 shadow-lg shadow-stone-100/50 h-full"
      >
        {demos[activeFeature]}
      </motion.div>
    </AnimatePresence>
  );
}

export function AnimatedFeatures() {
  const [activeFeature, setActiveFeature] = useState("timer");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => {
        const currentIndex = features.findIndex(f => f.id === prev);
        return features[(currentIndex + 1) % features.length].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-700 text-xs font-medium mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-3">
            Everything you need to track time
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Simple tools that work together. No bloat, no learning curve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </motion.div>

          {/* Live Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
                <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">
                  Live Preview
                </span>
              </div>

              <LiveFeatureDemo activeFeature={activeFeature} />

              {/* Feature navigation dots */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      activeFeature === feature.id
                        ? "bg-sage-500 w-6"
                        : "bg-stone-200 w-2 hover:bg-stone-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
