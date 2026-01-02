"use client";
import { GithubLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-16 bg-stone-100 border-t border-stone-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Logo size={24} variant="dark" />
              <span className="text-lg font-semibold tracking-tight text-stone-900">
                timedigits
              </span>
            </Link>
            <p className="text-stone-500 text-sm">
              track time. bill time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-stone-900 font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li><a href="#features" className="hover:text-stone-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-stone-900 transition-colors">Pricing</a></li>
                <li><Link to="/compare" className="hover:text-stone-900 transition-colors">Compare</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-900 font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li><Link to="/blog" className="hover:text-stone-900 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-stone-900 transition-colors">About</Link></li>
                <li><Link to="/privacy" className="hover:text-stone-900 transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-900 font-semibold text-sm mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-300 hover:text-stone-900 transition-all">
                  <TwitterLogo size={18} weight="fill" />
                </a>
                <a href="https://github.com/treedigitsinc/timedigits" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-300 hover:text-stone-900 transition-all">
                  <GithubLogo size={18} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-400 text-xs">
          <p>&copy; 2025 timedigits. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-stone-900 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-stone-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
