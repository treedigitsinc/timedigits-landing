import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Privacy() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="py-6 border-b border-zinc-900">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <Logo size={24} variant="light" />
            <span className="font-bold text-white">timedigits</span>
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-zinc-400 leading-relaxed">
                At timedigits, we take your privacy seriously. This policy explains what data we collect,
                how we use it, and your rights regarding your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data We Collect</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Account information:</strong> Email address and display name when you sign up</li>
                <li><strong className="text-zinc-300">Time entries:</strong> The time tracking data you create, including project names, descriptions, and durations</li>
                <li><strong className="text-zinc-300">Usage data:</strong> Basic analytics to improve the product (page views, feature usage)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>To provide and maintain the timedigits service</li>
                <li>To sync your data across devices</li>
                <li>To send important service updates (you can opt out of marketing emails)</li>
                <li>To improve our product based on usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage & Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your data is stored securely using Supabase, with encryption at rest and in transit.
                We use industry-standard security practices to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Export:</strong> You can export all your data to CSV at any time</li>
                <li><strong className="text-zinc-300">Delete:</strong> You can delete your account and all associated data</li>
                <li><strong className="text-zinc-300">Access:</strong> You can request a copy of all data we hold about you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use the following third-party services:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li><strong className="text-zinc-300">Supabase:</strong> Database and authentication</li>
                <li><strong className="text-zinc-300">Vercel:</strong> Hosting and deployment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use essential cookies for authentication and session management.
                We do not use third-party tracking cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about this privacy policy, please contact us on{" "}
                <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">
                  Twitter/X @treedigitsinc
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-zinc-900">
        <div className="container text-center text-zinc-600 text-sm">
          © 2025 timedigits. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
