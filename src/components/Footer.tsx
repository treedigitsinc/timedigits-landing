import { Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and nav */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal flex items-center justify-center">
                <Clock className="h-3 w-3 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-[hsl(var(--foreground))]">timedigits</span>
            </a>
            <nav className="flex gap-6 text-sm text-[hsl(var(--muted-foreground))]">
              <a href="#features" className="hover:text-[hsl(var(--foreground))] transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-[hsl(var(--foreground))] transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} timedigits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
