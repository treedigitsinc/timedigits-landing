import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { headerVariants } from '../lib/animations'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo size={24} className="text-zinc-900" />
          <span className="text-lg font-semibold tracking-tight">TimeDigits</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {['Features', 'Pricing'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="#"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            whileHover={{ y: -1 }}
          >
            Sign in
          </motion.a>
          <motion.a
            href="#pricing"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white"
            whileHover={{ scale: 1.02, backgroundColor: '#27272a' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start Free
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-white"
        >
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
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white"
            >
              Start Free
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
