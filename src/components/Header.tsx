import { useState, useEffect } from 'react'
import { Clock, Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[hsl(var(--border))]'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className={`font-display font-semibold transition-colors ${scrolled ? 'text-[hsl(var(--foreground))]' : 'text-white'}`}>
              timedigits
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className={`text-sm link-underline transition-colors ${
                scrolled
                  ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className={`text-sm link-underline transition-colors ${
                scrolled
                  ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className={`text-sm link-underline transition-colors ${
                scrolled
                  ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm transition-colors ${
                scrolled
                  ? 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="btn btn-primary px-5 py-2 text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-[hsl(var(--border))] py-4">
            <nav className="flex flex-col gap-2">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-colors"
              >
                How it works
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-colors"
              >
                Pricing
              </a>
              <div className="border-t border-[hsl(var(--border))] mt-2 pt-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] rounded-lg transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mx-4 mt-2 btn btn-primary py-2 text-sm text-center"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
