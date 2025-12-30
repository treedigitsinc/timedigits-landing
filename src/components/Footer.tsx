"use client";
import { GithubLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2 mb-6">
              <Logo size={28} variant="light" />
              <span className="text-lg font-bold tracking-tight text-white">
                timedigits
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              track time. bill time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#features" className="hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing</a></li>
                <li><Link to="/compare" className="hover:text-teal-400 transition-colors">Compare</Link></li>
                <li><a href="https://timedigits.vercel.app/login" className="hover:text-teal-400 transition-colors">Sign Up</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link to="/about" className="hover:text-teal-400 transition-colors">About</Link></li>
                <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Social</h4>
              <div className="flex gap-4">
                <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all">
                  <TwitterLogo size={20} weight="fill" />
                </a>
                <a href="https://github.com/treedigitsinc/timedigits" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all">
                  <GithubLogo size={20} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
          <p>© 2025 timedigits. All rights reserved.</p>
          <p>track time. bill time.</p>
        </div>
      </div>
    </footer>
  );
}
