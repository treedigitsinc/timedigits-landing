"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Linear", url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Linear_logo.svg" },
  { name: "Raycast", url: "https://www.vectorlogo.zone/logos/raycast/raycast-icon.svg" },
  { name: "Supabase", url: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
];

export function LogoCloud() {
  return (
    <section className="py-20 bg-zinc-950 border-y border-zinc-900/50">
      <div className="container">
        <p className="text-center text-zinc-500 text-sm font-medium mb-12 uppercase tracking-[0.2em]">
          Trusted by teams at
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              whileHover={{ scale: 1.1 }}
              className="h-8 md:h-10"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-full w-auto invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
