"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ChartBar, UsersThree, DeviceMobile, CursorClick } from "@phosphor-icons/react";

const content = [
  {
    title: "One-click timer",
    description:
      "Start and stop with a single click. No setup required. We've removed every barrier between you and your productivity. Just hit the button and get to work.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--teal-900))] flex items-center justify-center text-white">
        <CursorClick size={80} weight="duotone" />
      </div>
    ),
  },
  {
    title: "Simple reports",
    description:
      "See where your time goes with clean weekly summaries. No complex charts or confusing data. Just the facts you need to bill clients or manage your day.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <ChartBar size={80} weight="duotone" />
      </div>
    ),
  },
  {
    title: "Works everywhere",
    description:
      "Desktop, tablet, or phone. Your data syncs instantly across all your devices. Start a timer on your laptop, stop it on your phone. It just works.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--zinc-800),var(--zinc-950))] flex items-center justify-center text-white">
        <DeviceMobile size={80} weight="duotone" />
      </div>
    ),
  },
  {
    title: "Team ready",
    description:
      "Share workspaces and track together. See real-time activity from your team members and generate combined reports for the whole project.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-900),var(--teal-500))] flex items-center justify-center text-white">
        <UsersThree size={80} weight="duotone" />
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-zinc-950">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything you need
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            No bloat. No learning curve. Just the features that matter for your workflow.
          </p>
        </div>
        
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
