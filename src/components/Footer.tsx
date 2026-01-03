"use client";
import { GithubLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-slate-200">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Logo size={24} variant="dark" />
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                timedigits
              </span>
            </Link>
            <p className="text-slate-500 text-sm">
              track time. bill time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <h4 className="text-slate-900 font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-slate-900 transition-colors">Features</a></li>
                <li><Link to="/compare" className="hover:text-slate-900 transition-colors">Compare</Link></li>
                <li><Link to="/faq" className="hover:text-slate-900 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/blog" className="hover:text-slate-900 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/dpa" className="hover:text-slate-900 transition-colors">Data Processing</Link></li>
                <li><Link to="/cookies" className="hover:text-slate-900 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold text-sm mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  <TwitterLogo size={18} weight="fill" />
                </a>
                <a href="https://github.com/treedigitsinc/timedigits" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  <GithubLogo size={18} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>&copy; 2025 timedigits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
