import { motion } from 'framer-motion'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="py-12 border-t bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href="#" className="flex items-center gap-2">
              <Logo size={20} className="text-zinc-900" />
              <span className="font-semibold">TimeDigits</span>
            </a>
            <nav className="flex gap-6 text-sm text-zinc-500">
              <a href="#features" className="hover:text-zinc-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors">
                Pricing
              </a>
            </nav>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-zinc-500"
          >
            &copy; {new Date().getFullYear()} TimeDigits. Track time. That's it.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
