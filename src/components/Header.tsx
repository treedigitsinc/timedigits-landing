import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">TimeDigits</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            Sign in
          </a>
          <a
            href="#pricing"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 py-2">
              Features
            </a>
            <a href="#pricing" className="text-sm text-zinc-600 hover:text-zinc-900 py-2">
              Pricing
            </a>
            <hr className="my-2" />
            <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 py-2">
              Sign in
            </a>
            <a
              href="#pricing"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
