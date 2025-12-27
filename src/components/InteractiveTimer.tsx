"use client";
import { useState, useEffect } from "react";
import { Play, Square, Timer, ChartLineUp, Pulse } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

export function InteractiveTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative group flex items-center justify-center">
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute -inset-4 bg-teal-500/20 rounded-[2.5rem] blur-2xl transition-opacity duration-1000",
          isRunning ? "opacity-100 animate-pulse-teal" : "opacity-0"
        )}
      />

      {/* Main Timer Card */}
      <div className="relative z-20 glass rounded-[2rem] p-8 md:p-12 border-zinc-800/50 shadow-2xl w-full max-w-md mx-auto overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-2 h-2 rounded-full",
                isRunning ? "bg-teal-500 animate-pulse" : "bg-zinc-600"
              )} />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                {isRunning ? "Live Tracking" : "Ready to track"}
              </span>
            </div>
            <Timer size={20} className="text-zinc-600" weight="duotone" />
          </div>

          <div className="text-center mb-10">
            <div className="font-mono text-6xl md:text-7xl font-light tracking-tighter text-white tabular-nums">
              {formatTime(seconds)}
            </div>
            <div className="mt-4 text-zinc-400 font-display text-sm">
              Project Alpha
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl",
                isRunning 
                  ? "bg-zinc-800 text-white hover:bg-zinc-700" 
                  : "bg-teal-500 text-white hover:bg-teal-400 scale-110"
              )}
            >
              {isRunning ? (
                <Square size={32} weight="fill" />
              ) : (
                <Play size={32} weight="fill" className="ml-1" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sophisticated Floating Report Card */}
      <AnimatePresence>
        {isRunning && (
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.8 }}
            animate={{ opacity: 1, x: 160, scale: 1 }}
            exit={{ opacity: 0, x: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute z-10 hidden xl:flex flex-col gap-4 glass rounded-3xl p-6 border-zinc-800/50 shadow-2xl w-64"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-teal-400">
                <ChartLineUp size={18} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live Report</span>
              </div>
              <Pulse size={16} className="text-zinc-600 animate-pulse" />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] text-zinc-500 mb-1 uppercase tracking-tighter">
                  <span>Daily Goal</span>
                  <span className="text-zinc-300">75%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-teal-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[10px] text-zinc-500 mb-3 uppercase tracking-tighter">Weekly Velocity</div>
                <div className="flex items-end gap-1 h-12">
                  {[30, 45, 25, 60, 40, 50, 80].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                      className={cn(
                        "flex-1 rounded-t-[2px]",
                        i === 6 ? "bg-teal-500" : "bg-zinc-800"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800/50">
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase">Today</div>
                  <div className="text-sm font-bold text-white">6.4h</div>
                </div>
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase">Week</div>
                  <div className="text-sm font-bold text-white">32.8h</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Small Screen Version of the Report (Subtle overlay) */}
      <AnimatePresence>
        {isRunning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 xl:hidden flex items-center gap-4 glass px-6 py-3 rounded-full border-zinc-800/50 shadow-xl whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Report: 6.4h Today</span>
            </div>
            <div className="w-px h-3 bg-zinc-800" />
            <ChartLineUp size={14} className="text-teal-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
