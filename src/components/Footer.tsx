export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold">TimeDigits</span>
            <nav className="flex gap-6 text-sm text-zinc-600">
              <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            </nav>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} TimeDigits
          </p>
        </div>
      </div>
    </footer>
  )
}
