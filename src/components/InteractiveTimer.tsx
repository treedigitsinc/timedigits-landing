"use client";
import { useState, useEffect } from "react";
import { Play, Square, Timer } from "@phosphor-icons/react";
import { motion } from "framer-motion";
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

  // Mock data for the weekly activity
  const weeklyActivity = [30, 45, 25, 60, 40, 50]; // Mon-Sat
  const currentDayProgress = Math.min((seconds / 60) * 100, 100); // Grow based on seconds (1 min = full bar for demo)

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute -inset-4 bg-teal-500/20 rounded-[2.5rem] blur-2xl transition-opacity duration-1000",
          isRunning ? "opacity-100 animate-pulse-teal" : "opacity-0"
        )}
      />

      <div className="relative glass rounded-[2rem] p-8 md:p-12 border-zinc-800/50 shadow-2xl w-full max-w-md mx-auto overflow-hidden">
        {/* Subtle Weekly Activity Dashboard */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-6 flex items-end justify-between gap-2 opacity-20 pointer-events-none">
          {weeklyActivity.map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-zinc-700 rounded-t-sm transition-all duration-500" 
                style={{ height: `${height}%` }}
              />
              <div className="w-1 h-1 rounded-full bg-zinc-800" />
            </div>
          ))}
          {/* Current Day (Sunday/Today) */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <motion.div 
              animate={{ 
                height: isRunning ? `${Math.max(15, currentDayProgress)}%` : "10%" 
              }}
              className="w-full bg-teal-500 rounded-t-sm"
            />
            <div className="w-1 h-1 rounded-full bg-teal-500" />
          </div>
        </div>

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
    </div>
  );
}
