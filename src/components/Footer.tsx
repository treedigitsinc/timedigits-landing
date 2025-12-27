import { Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 border-t border-stone-200 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and nav */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-stone-900" strokeWidth={2.5} />
              <span className="font-semibold text-stone-900">TimeDigits</span>
            </a>
            <nav className="flex gap-6 text-sm text-stone-500">
              <a href="#features" className="hover:text-stone-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-stone-900 transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} TimeDigits. Track time. That's it.
          </p>
        </div>
      </div>
    </footer>
  )
}
