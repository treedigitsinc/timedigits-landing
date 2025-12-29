"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

// Feature icons as inline SVGs for consistency with brand
const TeamIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="26" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 26C8 21.5817 11.5817 18 16 18C20.4183 18 24 21.5817 24 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 25C2 22.2386 4.23858 20 7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 25C30 22.2386 27.7614 20 25 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ReportIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 20L13 14L17 17L23 10" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="20" r="1.5" fill="#14B8A6"/>
    <circle cx="13" cy="14" r="1.5" fill="#14B8A6"/>
    <circle cx="17" cy="17" r="1.5" fill="#14B8A6"/>
    <circle cx="23" cy="10" r="1.5" fill="#14B8A6"/>
  </svg>
);

const CsvIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <path d="M6 4H20L26 10V28H6V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 4V10H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 18H22" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 22H18" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 14H14" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const InvoiceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="5" y="3" width="22" height="26" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 10H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 15H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="21" cy="22" r="4" fill="#14B8A6"/>
    <path d="M21 20V24M19 22H23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ApiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <circle cx="8" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 14L20 10" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 18L20 22" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="16" r="1.5" fill="#14B8A6"/>
  </svg>
);

const McpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="10" cy="16" r="2" fill="#14B8A6"/>
    <circle cx="16" cy="16" r="2" fill="#14B8A6"/>
    <circle cx="22" cy="16" r="2" fill="#14B8A6"/>
    <path d="M10 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 24V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const features = [
  {
    id: "team",
    title: "Team Management",
    description: "Invite team members, assign roles, and track everyone's time in one unified workspace. Real-time visibility into who's working on what.",
    icon: TeamIcon,
    gradient: "from-purple-500 to-purple-900",
    delay: 0,
    teamOnly: true,
  },
  {
    id: "reports",
    title: "Live Reports",
    description: "Watch your productivity metrics update in real-time as you work. Beautiful visualizations that make sense of your time data instantly.",
    icon: ReportIcon,
    gradient: "from-teal-500 to-teal-900",
    delay: 0.1,
    teamOnly: false,
  },
  {
    id: "csv",
    title: "Export to CSV",
    description: "One-click export to CSV for any date range. Perfect for expense reports, client billing, or importing into your favorite spreadsheet.",
    icon: CsvIcon,
    gradient: "from-blue-500 to-blue-900",
    delay: 0.2,
    teamOnly: false,
  },
  {
    id: "invoices",
    title: "Create Invoices",
    description: "Turn tracked time into professional invoices automatically. Set hourly rates per project and generate PDF invoices ready to send.",
    icon: InvoiceIcon,
    gradient: "from-emerald-500 to-emerald-900",
    delay: 0.3,
    teamOnly: true,
  },
  {
    id: "api",
    title: "External API",
    description: "Connect to any external service for project creation. Sync with Jira, Asana, Linear, or build your own integration with our REST API.",
    icon: ApiIcon,
    gradient: "from-orange-500 to-orange-900",
    delay: 0.4,
    teamOnly: true,
  },
  {
    id: "mcp",
    title: "MCP Server",
    description: "Model Context Protocol support for AI-powered workflows. Let Claude or other AI assistants manage your time tracking automatically.",
    icon: McpIcon,
    gradient: "from-pink-500 to-pink-900",
    delay: 0.5,
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
        "relative p-6 rounded-2xl text-left transition-all duration-500 group overflow-hidden",
        isActive
          ? "glass border-teal-500/50"
          : "bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50"
      )}
    >
      {/* Active glow */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Team Only Badge */}
      {feature.teamOnly && (
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
            Team
          </span>
        </div>
      )}

      <div className="relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
          isActive
            ? `bg-gradient-to-br ${feature.gradient}`
            : "bg-zinc-800/50 group-hover:bg-zinc-800"
        )}>
          <Icon className={cn(
            "w-6 h-6 transition-colors duration-300",
            isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"
          )} />
        </div>

        <h3 className={cn(
          "font-semibold text-lg mb-2 transition-colors duration-300",
          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
        )}>
          {feature.title}
        </h3>

        <p className={cn(
          "text-sm leading-relaxed transition-colors duration-300",
          isActive ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-400"
        )}>
          {feature.description}
        </p>
      </div>

      {/* Active indicator line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400 origin-left"
      />
    </motion.button>
  );
}

function LiveFeatureDemo({ activeFeature }: { activeFeature: string }) {
  const [demoData, setDemoData] = useState({
    teamMembers: 5,
    hoursToday: 6.4,
    progressPercent: 75,
  });

  // Animate demo data
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoData(prev => ({
        teamMembers: prev.teamMembers,
        hoursToday: prev.hoursToday + 0.01,
        progressPercent: Math.min(prev.progressPercent + 0.1, 100),
      }));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const demos: Record<string, React.ReactNode> = {
    team: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "w-8 h-8 rounded-full border-2 border-zinc-900 flex items-center justify-center text-xs font-bold",
                  ["bg-purple-500", "bg-blue-500", "bg-teal-500", "bg-orange-500", "bg-pink-500"][i]
                )}
              >
                {["JZ", "MK", "AL", "SR", "TD"][i]}
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-zinc-400">{demoData.teamMembers} members online</span>
        </div>
        {["Design System", "Marketing Site", "API Docs"].map((project, i) => (
          <motion.div
            key={project}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50"
          >
            <div className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", ["bg-purple-500", "bg-blue-500", "bg-teal-500"][i])} />
              <span className="text-sm text-zinc-300">{project}</span>
            </div>
            <span className="text-xs text-zinc-500">{[3, 1, 1][i]} tracking</span>
          </motion.div>
        ))}
      </div>
    ),
    reports: (
      <div className="space-y-4">
        <div className="flex items-end gap-1 h-32">
          {[30, 45, 65, 40, 75, 55, demoData.progressPercent].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={cn(
                "flex-1 rounded-t-sm",
                i === 6 ? "bg-teal-500" : "bg-zinc-700"
              )}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-zinc-500">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span className="text-teal-400">Today</span>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
          <div>
            <div className="text-2xl font-bold text-white">{demoData.hoursToday.toFixed(1)}h</div>
            <div className="text-xs text-zinc-500">Today</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">38.2h</div>
            <div className="text-xs text-zinc-500">This week</div>
          </div>
        </div>
      </div>
    ),
    csv: (
      <div className="space-y-3">
        <div className="font-mono text-xs text-zinc-400 bg-zinc-900 rounded-lg p-4 overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-zinc-600">date,project,hours,notes</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-teal-400">2025-12-27</span>,Design System,<span className="text-purple-400">4.5</span>,"Component library"
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="text-teal-400">2025-12-27</span>,Marketing,<span className="text-purple-400">2.0</span>,"Landing page"
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <span className="text-teal-400">2025-12-26</span>,API Docs,<span className="text-purple-400">6.0</span>,"Endpoints"
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 rounded-lg bg-teal-500 text-white font-medium text-sm flex items-center justify-center gap-2"
        >
          <CsvIcon className="w-4 h-4" />
          Download CSV
        </motion.button>
      </div>
    ),
    invoices: (
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 text-zinc-900">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="font-bold text-lg">INVOICE</div>
              <div className="text-xs text-zinc-500">#INV-2024-0042</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-zinc-500">Due: Jan 15, 2025</div>
            </div>
          </div>
          <div className="border-t border-zinc-200 pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Design System (45h)</span>
              <span>$4,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Marketing Site (20h)</span>
              <span>$2,000</span>
            </div>
          </div>
          <div className="border-t border-zinc-200 mt-3 pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span className="text-teal-600">$6,500</span>
          </div>
        </div>
      </div>
    ),
    api: (
      <div className="space-y-3">
        <div className="font-mono text-xs bg-zinc-900 rounded-lg p-4 overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500">
            // Create project via API
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-purple-400">POST</span> <span className="text-teal-400">/api/projects</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-2">
            {`{`}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {"  "}<span className="text-blue-400">"name"</span>: <span className="text-orange-400">"New Feature"</span>,
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            {"  "}<span className="text-blue-400">"client"</span>: <span className="text-orange-400">"Acme Inc"</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {`}`}
          </motion.div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Connected to Linear, Jira, Asana
        </div>
      </div>
    ),
    mcp: (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <McpIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">MCP Server Active</div>
            <div className="text-xs text-zinc-500">timedigits-mcp v1.0.0</div>
          </div>
        </div>
        <div className="font-mono text-xs bg-zinc-900 rounded-lg p-4 space-y-1">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500">
            {">"} Claude: Start timer for "Bug fixes"
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-teal-400">
            Timer started on Bug fixes
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-zinc-500">
            {">"} Claude: How much time today?
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-teal-400">
            6h 24m tracked today
          </motion.div>
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
        className="glass rounded-2xl p-6 h-full"
      >
        {demos[activeFeature]}
      </motion.div>
    </AnimatePresence>
  );
}

export function AnimatedFeatures() {
  const [activeFeature, setActiveFeature] = useState("team");
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
    <section id="features" ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Track. Report. Invoice. Integrate.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            One platform. Zero friction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              {/* Connection line to timer (visual indicator) */}
              <div className="hidden xl:block absolute -top-12 left-1/2 w-px h-12 bg-gradient-to-b from-transparent via-teal-500/50 to-teal-500/20" />

              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
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
                      "w-2 h-2 rounded-full transition-all duration-300",
                      activeFeature === feature.id
                        ? "bg-teal-500 w-6"
                        : "bg-zinc-700 hover:bg-zinc-600"
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
