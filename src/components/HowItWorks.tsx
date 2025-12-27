"use client";
import { TracingBeam } from "./ui/tracing-beam";
import { FolderOpen, Play, ChartBar } from "@phosphor-icons/react";

const steps = [
  {
    title: "Pick a project",
    description: "Select from your project list or create a new one in seconds. We keep it simple so you can focus on the work, not the setup.",
    icon: <FolderOpen size={32} weight="duotone" />,
  },
  {
    title: "Start the timer",
    description: "Click once to begin tracking. That's it. No complex forms, no required fields. Just pure time tracking when you need it.",
    icon: <Play size={32} weight="duotone" />,
  },
  {
    title: "Review your week",
    description: "Get clear insights with automated weekly reports. See exactly where your time went and export it for invoicing with one click.",
    icon: <ChartBar size={32} weight="duotone" />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-zinc-950">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Three simple steps to take control of your time.
          </p>
        </div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {steps.map((item, index) => (
              <div key={`content-${index}`} className="mb-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="text-sm prose prose-sm dark:prose-invert text-zinc-400 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
