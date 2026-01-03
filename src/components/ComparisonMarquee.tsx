"use client";
import { motion } from "framer-motion";

const comparisons = [
  { competitor: "vs Toggl", advantage: "90% cheaper" },
  { competitor: "vs Harvest", advantage: "Simpler" },
  { competitor: "vs Clockify", advantage: "Cleaner" },
  { competitor: "vs Monday", advantage: "Faster" },
  { competitor: "vs Hubstaff", advantage: "No spying" },
  { competitor: "vs Spreadsheets", advantage: "Automatic" },
  { competitor: "vs Time Doctor", advantage: "Trust-based" },
  { competitor: "vs Replicon", advantage: "Free tier" },
];

export function ComparisonMarquee() {
  // Double the items for seamless loop
  const items = [...comparisons, ...comparisons];

  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shrink-0"
            >
              <span className="text-slate-400 text-sm font-medium">
                {item.competitor}
              </span>
              <span className="px-3 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full">
                {item.advantage}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
