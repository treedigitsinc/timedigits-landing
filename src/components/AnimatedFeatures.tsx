"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Timer,
  ChartBar,
  Export,
  FileText,
  Users,
  Lightning,
  Play,
  Pause,
} from "@phosphor-icons/react";

const features = [
  {
    id: "timer",
    title: "One-click tracking",
    description: "Start with a click. Stop when done. No setup, no forms, no friction.",
    icon: Timer,
  },
  {
    id: "reports",
    title: "Clear reports",
    description: "See where your time goes with beautiful weekly summaries and insights.",
    icon: ChartBar,
  },
  {
    id: "export",
    title: "Export anywhere",
    description: "One-click CSV exports for invoicing, accounting, or your spreadsheet.",
    icon: Export,
  },
  {
    id: "invoices",
    title: "Create invoices",
    description: "Turn tracked time into professional invoices. Set rates, generate PDFs.",
    icon: FileText,
    teamOnly: true,
  },
  {
    id: "team",
    title: "Team workspaces",
    description: "Share projects and track together. Real-time sync across your team.",
    icon: Users,
    teamOnly: true,
  },
  {
    id: "api",
    title: "API & integrations",
    description: "Connect with Jira, Linear, Asana, or build your own with our REST API.",
    icon: Lightning,
    teamOnly: true,
  },
];

function TimerDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(154 * 60 + 17); // 02:34:17

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-400">Project Alpha</span>
        <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-teal-500 animate-pulse' : 'bg-slate-300'}`} />
      </div>
      <div className="text-center">
        <div className="font-mono text-3xl font-medium text-slate-900 tabular-nums mb-3">
          {formatTime(seconds)}
        </div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isRunning ? 'bg-slate-200 text-slate-600' : 'bg-teal-500 text-white'
          }`}
        >
          {isRunning ? <Pause size={18} weight="fill" /> : <Play size={18} weight="fill" />}
        </button>
      </div>
    </div>
  );
}

function ReportsDemo() {
  const [data] = useState([35, 50, 70, 45, 80, 60, 75]);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-end gap-1.5 h-24 mb-2">
        {data.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`flex-1 rounded-t ${i === 6 ? 'bg-teal-500' : 'bg-slate-200'}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
        {days.map((d, i) => (
          <span key={d} className={i === 6 ? 'text-teal-600 font-medium' : ''}>{d}</span>
        ))}
      </div>
      <div className="flex justify-between mt-3 pt-3 border-t border-slate-100">
        <div>
          <div className="text-lg font-semibold text-slate-900">38.2h</div>
          <div className="text-[10px] text-slate-400">This week</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-teal-600">$3,820</div>
          <div className="text-[10px] text-slate-400">Billable</div>
        </div>
      </div>
    </div>
  );
}

function ExportDemo() {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="font-mono text-[10px] text-slate-600 bg-slate-50 rounded-lg p-3 mb-3 overflow-hidden">
        <div className="text-slate-400">date,project,hours</div>
        <div><span className="text-teal-600">2025-12-27</span>,Design,<span className="text-amber-600">4.5</span></div>
        <div><span className="text-teal-600">2025-12-27</span>,Marketing,<span className="text-amber-600">2.0</span></div>
        <div><span className="text-teal-600">2025-12-26</span>,API Docs,<span className="text-amber-600">6.0</span></div>
      </div>
      <button className="w-full py-2 rounded-lg bg-slate-900 text-white text-xs font-medium flex items-center justify-center gap-1.5">
        <Export size={14} weight="bold" />
        Download CSV
      </button>
    </div>
  );
}

function InvoiceDemo() {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-semibold text-slate-900 text-sm">INVOICE</div>
          <div className="text-[10px] text-slate-400">#INV-2024-0042</div>
        </div>
        <div className="text-[10px] text-slate-400">Due: Jan 15</div>
      </div>
      <div className="border-t border-slate-100 pt-2 space-y-1.5 text-xs">
        <div className="flex justify-between text-slate-600">
          <span>Design System (45h)</span>
          <span>$4,500</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Marketing (20h)</span>
          <span>$2,000</span>
        </div>
      </div>
      <div className="border-t border-slate-100 mt-2 pt-2 flex justify-between font-semibold text-sm">
        <span>Total</span>
        <span className="text-teal-600">$6,500</span>
      </div>
    </div>
  );
}

function TeamDemo() {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex -space-x-2">
          {['bg-teal-500', 'bg-blue-500', 'bg-amber-500', 'bg-rose-400'].map((bg, i) => (
            <div key={i} className={`w-6 h-6 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[8px] font-bold text-white`}>
              {['JZ', 'MK', 'AL', 'SR'][i]}
            </div>
          ))}
        </div>
        <span className="text-[10px] text-slate-400">4 online</span>
      </div>
      {['Design System', 'Marketing', 'API Docs'].map((project, i) => (
        <div key={project} className="flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${['bg-teal-500', 'bg-blue-500', 'bg-amber-500'][i]}`} />
            <span className="text-slate-700">{project}</span>
          </div>
          <span className="text-slate-400">{[3, 1, 1][i]} tracking</span>
        </div>
      ))}
    </div>
  );
}

function APIDemo() {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
      <div className="font-mono text-[10px] bg-slate-900 rounded-lg p-3 text-slate-300">
        <div className="text-slate-500">// Create project</div>
        <div><span className="text-purple-400">POST</span> <span className="text-teal-400">/api/projects</span></div>
        <div className="mt-1">{`{`}</div>
        <div>{"  "}<span className="text-blue-400">"name"</span>: <span className="text-amber-400">"New Feature"</span></div>
        <div>{`}`}</div>
      </div>
      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Connected to Linear, Jira
      </div>
    </div>
  );
}

const demos: Record<string, React.ReactNode> = {
  timer: <TimerDemo />,
  reports: <ReportsDemo />,
  export: <ExportDemo />,
  invoices: <InvoiceDemo />,
  team: <TeamDemo />,
  api: <APIDemo />,
};

export function AnimatedFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get to know timedigits
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Simple tools that work together. No bloat, no learning curve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <Icon size={20} className="text-teal-600" weight="duotone" />
                    </div>
                    {feature.teamOnly && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                        Team
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Demo under each card */}
                <div className="mt-4">
                  {demos[feature.id]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
