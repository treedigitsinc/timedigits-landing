"use client";
import { motion } from "framer-motion";

// Brand colors researched from official sources
const comparisons = [
  { competitor: "vs Toggl", advantage: "90% cheaper", color: "#E57CD8" }, // Toggl pink/purple
  { competitor: "vs Harvest", advantage: "Simpler", color: "#FA5D00" }, // Harvest orange
  { competitor: "vs Clockify", advantage: "Cleaner", color: "#03A9F4" }, // Clockify blue
  { competitor: "vs Monday", advantage: "Faster", color: "#6161FF" }, // Monday.com purple-blue
  { competitor: "vs Hubstaff", advantage: "No spying", color: "#4698F1" }, // Hubstaff blue
  { competitor: "vs Spreadsheets", advantage: "Automatic", color: "#34A853" }, // Google Sheets green
  { competitor: "vs Time Doctor", advantage: "Trust-based", color: "#2E7D32" }, // Time Doctor green
  { competitor: "vs Replicon", advantage: "Free tier", color: "#1565C0" }, // Replicon blue
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
              <span
                className="px-3 py-1 text-white text-sm font-semibold rounded-full"
                style={{ backgroundColor: item.color }}
              >
                {item.advantage}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
