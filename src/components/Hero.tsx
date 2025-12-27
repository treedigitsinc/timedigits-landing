"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { InteractiveTimer } from "./InteractiveTimer";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Free for individuals
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              <TextGenerateEffect words="Track time. That's it." />
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Free forever for you. <span className="text-white font-semibold">$1/user</span> for your team.
              No tiers. No tricks. No enterprise pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="https://timedigits.vercel.app/signup">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-zinc-950 text-white flex items-center gap-2 px-8 py-3"
                >
                  <span>Start Free</span>
                  <ArrowRight size={18} weight="bold" />
                </HoverBorderGradient>
              </a>
              
              <a 
                href="#features"
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 px-6 py-3"
              >
                See how it works
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-zinc-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-zinc-800" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Timer */}
          <div className="flex-1 w-full max-w-md">
            <InteractiveTimer />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Explore</span>
        <CaretDown size={16} />
      </div>
    </section>
  );
}
