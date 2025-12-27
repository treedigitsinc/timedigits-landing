"use client";
import React, { useState, useEffect } from "react";
import { Play, Square, Timer } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export function InteractiveTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
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
    <div className="relative group">
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute -inset-4 bg-teal-500/20 rounded-[2.5rem] blur-2xl transition-opacity duration-1000",
          isRunning ? "opacity-100 animate-pulse-teal" : "opacity-0"
        )}
      />

      <div className="relative glass rounded-[2rem] p-8 md:p-12 border-zinc-800/50 shadow-2xl w-full max-w-md mx-auto">
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
  );
}
