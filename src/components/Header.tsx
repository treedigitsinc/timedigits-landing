"use client";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { cn } from "../lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Logo className="group-hover:scale-110 transition-transform duration-300" size={32} variant="light" />
          <span className="text-xl font-bold tracking-tight text-white">
            timedigits
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://timedigits.vercel.app/login"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4 py-2"
          >
            Sign in
          </a>
          <a
            href="https://timedigits.vercel.app/login"
            className="bg-white text-black hover:bg-zinc-200 transition-colors px-5 py-2 rounded-full text-sm font-bold"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-6 border-t border-zinc-800">
            <a
              href="https://timedigits.vercel.app/login"
              className="text-lg font-medium text-zinc-400"
            >
              Sign in
            </a>
            <a
              href="https://timedigits.vercel.app/login"
              className="bg-teal-500 text-white py-4 rounded-2xl text-center font-bold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
