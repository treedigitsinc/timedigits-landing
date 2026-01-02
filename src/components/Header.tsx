"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { cn } from "../lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", isHash: true },
    { name: "Pricing", href: "#pricing", isHash: true },
    { name: "Blog", href: "/blog", isHash: false },
  ];

  const handleHashClick = (href: string) => {
    if (location.pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo className="group-hover:scale-105 transition-transform duration-300" size={28} variant="dark" />
          <span className="text-xl font-semibold tracking-tight text-stone-900">
            timedigits
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isHash ? (
              <button
                key={link.name}
                onClick={() => handleHashClick(link.href)}
                className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.timedigits.ca/login"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors px-4 py-2"
          >
            Sign in
          </a>
          <a
            href="https://app.timedigits.ca/login"
            className="bg-stone-900 text-white hover:bg-stone-800 transition-colors px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-stone-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-6 flex flex-col gap-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isHash ? (
                <button
                  key={link.name}
                  onClick={() => {
                    handleHashClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium text-stone-600 text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-stone-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-col gap-4 pt-6 border-t border-stone-200">
            <a
              href="https://app.timedigits.ca/login"
              className="text-lg font-medium text-stone-600"
            >
              Sign in
            </a>
            <a
              href="https://app.timedigits.ca/login"
              className="bg-stone-900 text-white py-4 rounded-2xl text-center font-bold"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
