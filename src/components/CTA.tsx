"use client";
import { ArrowRight, RocketLaunch } from "@phosphor-icons/react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function CTA() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="container relative z-10">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center border-zinc-800/50 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-500 mb-8">
            <RocketLaunch size={32} weight="duotone" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to track time <br className="hidden md:block" />
            the simple way?
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Join thousands of individuals and teams who have ditched 
            bloated tools for timedigits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://timedigits.vercel.app/signup">
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-zinc-950 text-white flex items-center gap-2 px-10 py-4 text-lg font-bold"
              >
                <span>Start Free Now</span>
                <ArrowRight size={20} weight="bold" />
              </HoverBorderGradient>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-zinc-500 text-sm font-medium">
            <span>No credit card required</span>
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
            <span>Free forever for individuals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
