"use client";
import { useState, useEffect } from "react";
import { 
  Play, 
  Square, 
  Timer, 
  ChartLineUp, 
  CaretDown, 
  FileCsv, 
  FilePdf, 
  Users,
  DotsThreeVertical
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const projects = [
  { id: 1, name: "Project Alpha", color: "bg-teal-500" },
  { id: 2, name: "Design System", color: "bg-purple-500" },
  { id: 3, name: "Marketing Site", color: "bg-blue-500" },
];

export function InteractiveTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Dynamic data based on seconds
  const dailyProgress = Math.min(75 + (seconds / 10), 100);
  const currentVelocity = Math.min(50 + (seconds / 5), 100);

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
      <div className="relative z-20 glass rounded-[2rem] p-8 md:p-12 border-zinc-800/50 shadow-2xl w-full max-w-md mx-auto overflow-visible">
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
            
            {/* Project Selector */}
            <div className="relative mt-4 inline-block">
              <button 
                onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors text-zinc-400 hover:text-white"
              >
                <div className={cn("w-2 h-2 rounded-full", selectedProject.color)} />
                <span className="text-sm font-medium">{selectedProject.name}</span>
                <CaretDown size={14} className={cn("transition-transform", isProjectMenuOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {isProjectMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass rounded-2xl border-zinc-800/50 shadow-2xl overflow-hidden z-50"
                  >
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => {
                          setSelectedProject(project);
                          setIsProjectMenuOpen(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-left"
                      >
                        <div className={cn("w-2 h-2 rounded-full", project.color)} />
                        <span className="text-sm text-zinc-300">{project.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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
              
              <div className="relative">
                <button 
                  onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                  className="p-1 hover:bg-white/5 rounded-md text-zinc-500 hover:text-white transition-colors"
                >
                  <DotsThreeVertical size={20} weight="bold" />
                </button>

                <AnimatePresence>
                  {isActionMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.95 }}
                      className="absolute top-0 left-full ml-2 w-40 glass rounded-xl border-zinc-800/50 shadow-2xl overflow-hidden"
                    >
                      <button className="w-full px-3 py-2 flex items-center gap-2 hover:bg-white/5 text-left text-[10px] text-zinc-400 hover:text-white transition-colors">
                        <FileCsv size={14} />
                        Export CSV
                      </button>
                      <button className="w-full px-3 py-2 flex items-center gap-2 hover:bg-white/5 text-left text-[10px] text-zinc-400 hover:text-white transition-colors">
                        <FilePdf size={14} />
                        Invoice PDF
                      </button>
                      <button className="w-full px-3 py-2 flex items-center gap-2 hover:bg-white/5 text-left text-[10px] text-zinc-400 hover:text-white transition-colors border-t border-zinc-800/50">
                        <Users size={14} />
                        Team Report
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] text-zinc-500 mb-1 uppercase tracking-tighter">
                  <span>{selectedProject.name} Goal</span>
                  <span className="text-zinc-300">{Math.round(dailyProgress)}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${dailyProgress}%` }}
                    className={cn("h-full", selectedProject.color)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[10px] text-zinc-500 mb-3 uppercase tracking-tighter">Weekly Velocity</div>
                <div className="flex items-end gap-1 h-12">
                  {[30, 45, 25, 60, 40, 50].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 bg-zinc-800 rounded-t-[2px]"
                    />
                  ))}
                  <motion.div
                    animate={{ height: `${currentVelocity}%` }}
                    className={cn("flex-1 rounded-t-[2px]", selectedProject.color)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800/50">
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase">Today</div>
                  <div className="text-sm font-bold text-white">
                    {(6.4 + (seconds / 3600)).toFixed(1)}h
                  </div>
                </div>
                <div>
                  <div className="text-[9px] text-zinc-500 uppercase">Week</div>
                  <div className="text-sm font-bold text-white">
                    {(32.8 + (seconds / 3600)).toFixed(1)}h
                  </div>
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
              <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", selectedProject.color)} />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                {selectedProject.name}: {(6.4 + (seconds / 3600)).toFixed(1)}h
              </span>
            </div>
            <div className="w-px h-3 bg-zinc-800" />
            <ChartLineUp size={14} className="text-teal-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
