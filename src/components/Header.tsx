import { Clock } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background))]/95 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo - lowercase like treedigits */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
              <Clock className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-[hsl(var(--foreground))]">timedigits</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
              Sign in
            </a>
            <a
              href="#pricing"
              className="btn btn-primary px-5 py-2 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
