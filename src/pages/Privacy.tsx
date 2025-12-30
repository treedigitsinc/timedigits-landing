import { useEffect } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | timedigits";
  }, []);

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
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                timedigits ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our time tracking service at timedigits.com and related applications (the "Service").
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Account Information:</strong> Email address, display name, and password when you create an account</li>
                <li><strong className="text-zinc-300">Time Tracking Data:</strong> Projects, clients, time entries, descriptions, tags, and billing rates you create</li>
                <li><strong className="text-zinc-300">Team Information:</strong> Team names, member invitations, and workspace settings (for team accounts)</li>
                <li><strong className="text-zinc-300">Payment Information:</strong> Billing address and payment details (processed securely by our payment provider, not stored by us)</li>
                <li><strong className="text-zinc-300">Communications:</strong> Messages you send to our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Device Information:</strong> Browser type, operating system, device type</li>
                <li><strong className="text-zinc-300">Usage Data:</strong> Pages visited, features used, time spent on the Service</li>
                <li><strong className="text-zinc-300">Log Data:</strong> IP address, access times, error logs</li>
                <li><strong className="text-zinc-300">Cookies:</strong> Session cookies and preferences (see our <Link to="/cookies" className="text-teal-400 hover:text-teal-300">Cookie Policy</Link>)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>Provide, maintain, and improve the Service</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                <li>Personalize and improve your experience</li>
                <li>Send promotional communications (with your consent, which you can withdraw at any time)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">If you are in the European Economic Area (EEA), we process your personal data based on:</p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Contract:</strong> To perform our contract with you (providing the Service)</li>
                <li><strong className="text-zinc-300">Legitimate Interests:</strong> For our legitimate business interests (improving the Service, preventing fraud)</li>
                <li><strong className="text-zinc-300">Consent:</strong> Where you have given consent (marketing communications)</li>
                <li><strong className="text-zinc-300">Legal Obligation:</strong> To comply with legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Service Providers:</strong> Third parties that help us operate the Service (hosting, analytics, payment processing)</li>
                <li><strong className="text-zinc-300">Team Members:</strong> Other members of your team or workspace (for team accounts)</li>
                <li><strong className="text-zinc-300">Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong className="text-zinc-300">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-zinc-300">With Your Consent:</strong> When you explicitly agree to sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">We use the following third-party services:</p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Supabase:</strong> Database, authentication, and backend services (data stored in secure cloud infrastructure)</li>
                <li><strong className="text-zinc-300">Vercel:</strong> Website hosting and deployment</li>
                <li><strong className="text-zinc-300">Google Analytics:</strong> Website analytics (anonymized, can be opted out)</li>
                <li><strong className="text-zinc-300">Stripe:</strong> Payment processing (for paid plans)</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Each third-party service has its own privacy policy governing the use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li>All data is encrypted in transit using TLS/HTTPS</li>
                <li>Data at rest is encrypted using AES-256 encryption</li>
                <li>Access to production systems is restricted and logged</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure password hashing using bcrypt</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
              <p className="text-zinc-400 leading-relaxed">
                We retain your personal data for as long as your account is active or as needed to provide the Service. After account deletion:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li>Your time tracking data is permanently deleted within 30 days</li>
                <li>Anonymized analytics data may be retained for statistical purposes</li>
                <li>Backup copies are purged within 90 days</li>
                <li>Legal or compliance records may be retained as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-zinc-300">Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong className="text-zinc-300">Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong className="text-zinc-300">Data Portability:</strong> Export your data in a machine-readable format (CSV)</li>
                <li><strong className="text-zinc-300">Restriction:</strong> Request limitation of processing</li>
                <li><strong className="text-zinc-300">Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-zinc-300">Withdraw Consent:</strong> Withdraw consent at any time (for consent-based processing)</li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@timedigits.com or use the export/delete features in your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place, including:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Data processing agreements with all service providers</li>
                <li>Compliance with applicable data protection frameworks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
              <p className="text-zinc-400 leading-relaxed">
                The Service is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. California Privacy Rights (CCPA)</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information (with some exceptions)</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will provide additional notice (such as an email notification).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li>Email: privacy@timedigits.com</li>
                <li>Twitter/X: <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">@treedigitsinc</a></li>
              </ul>
              <p className="text-zinc-400 leading-relaxed mt-4">
                For users in the EU, you also have the right to lodge a complaint with your local data protection authority.
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
