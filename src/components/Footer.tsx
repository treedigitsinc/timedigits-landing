import { Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-[hsl(var(--slate-950))]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and nav */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-semibold text-white">timedigits</span>
            </a>
            <nav className="flex gap-6 text-sm text-[hsl(var(--slate-400))]">
              <a href="#features" className="link-underline hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="link-underline hover:text-white transition-colors">
                How it works
              </a>
              <a href="#pricing" className="link-underline hover:text-white transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[hsl(var(--slate-500))]">
            &copy; {new Date().getFullYear()} timedigits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
