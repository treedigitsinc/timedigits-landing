import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Terms() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-zinc-400 leading-relaxed">
                By using timedigits, you agree to these terms. If you don't agree, please don't use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="text-zinc-400 leading-relaxed">
                timedigits is a time tracking application that allows you to track time spent on projects
                and tasks. The service includes features for individuals (free) and teams (paid).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>You must provide accurate information when creating an account</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must be at least 13 years old to use this service</li>
                <li>One person or legal entity may not maintain more than one free account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use automated systems to access the service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Free tier:</strong> Free forever for individual users</li>
                <li><strong className="text-zinc-300">Team tier:</strong> $5/month for up to 5 members, $1/month per additional member</li>
                <li>Payments are processed monthly and non-refundable</li>
                <li>You can cancel your subscription at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Data</h2>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>You retain ownership of all data you create in timedigits</li>
                <li>You can export your data at any time</li>
                <li>We will not sell your data to third parties</li>
                <li>See our <Link to="/privacy" className="text-teal-400 hover:text-teal-300">Privacy Policy</Link> for more details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <p className="text-zinc-400 leading-relaxed">
                We strive to keep timedigits available 24/7, but we do not guarantee uninterrupted access.
                The service may be temporarily unavailable for maintenance or updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-zinc-400 leading-relaxed">
                timedigits is provided "as is" without warranty of any kind. We are not liable for any
                indirect, incidental, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update these terms from time to time. We will notify you of significant changes
                by email or through the service. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about these terms, please contact us on{" "}
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
