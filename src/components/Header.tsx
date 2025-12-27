import { Clock } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-stone-900" strokeWidth={2.5} />
            <span className="font-semibold text-stone-900">TimeDigits</span>
          </a>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm text-stone-600 hover:text-stone-900 transition-colors">
              Sign in
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 btn-transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
