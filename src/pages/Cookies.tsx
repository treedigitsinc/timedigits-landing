import { useEffect } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Cookies() {
  useEffect(() => {
    document.title = "Cookie Policy | timedigits";
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
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-zinc-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                timedigits uses cookies for the following purposes:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><strong className="text-zinc-300">Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong className="text-zinc-300">Authentication cookies:</strong> To keep you logged in securely</li>
                <li><strong className="text-zinc-300">Preference cookies:</strong> To remember your settings and choices</li>
                <li><strong className="text-zinc-300">Analytics cookies:</strong> To understand how visitors use our website (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                These cookies are essential for the website to function. They cannot be disabled.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-zinc-400 border border-zinc-800 rounded-lg">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="text-left p-3 text-zinc-300">Cookie Name</th>
                      <th className="text-left p-3 text-zinc-300">Purpose</th>
                      <th className="text-left p-3 text-zinc-300">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-800">
                      <td className="p-3 font-mono text-xs">sb-access-token</td>
                      <td className="p-3">Authentication session</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-t border-zinc-800">
                      <td className="p-3 font-mono text-xs">sb-refresh-token</td>
                      <td className="p-3">Session refresh</td>
                      <td className="p-3">7 days</td>
                    </tr>
                    <tr className="border-t border-zinc-800">
                      <td className="p-3 font-mono text-xs">cookie-consent</td>
                      <td className="p-3">Stores your cookie preferences</td>
                      <td className="p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Analytics Cookies (Optional)</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website. They are only set with your consent.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-zinc-400 border border-zinc-800 rounded-lg">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="text-left p-3 text-zinc-300">Cookie Name</th>
                      <th className="text-left p-3 text-zinc-300">Provider</th>
                      <th className="text-left p-3 text-zinc-300">Purpose</th>
                      <th className="text-left p-3 text-zinc-300">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-zinc-800">
                      <td className="p-3 font-mono text-xs">_ga</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Distinguishes users</td>
                      <td className="p-3">2 years</td>
                    </tr>
                    <tr className="border-t border-zinc-800">
                      <td className="p-3 font-mono text-xs">_ga_*</td>
                      <td className="p-3">Google Analytics</td>
                      <td className="p-3">Stores session state</td>
                      <td className="p-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Cookie Consent</h3>
              <p className="text-zinc-400 leading-relaxed">
                When you first visit our website, you will see a cookie consent notice. You can choose to accept or decline non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Browser Settings</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Opt-Out of Analytics</h3>
              <p className="text-zinc-400 leading-relaxed">
                To opt out of Google Analytics across all websites, you can install the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The third-party services we use are:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li><strong className="text-zinc-300">Google Analytics:</strong> Website analytics (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Privacy Policy</a>)</li>
                <li><strong className="text-zinc-300">Supabase:</strong> Authentication (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">Privacy Policy</a>)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Do Not Track</h2>
              <p className="text-zinc-400 leading-relaxed">
                Some browsers have a "Do Not Track" (DNT) feature. We currently do not respond to DNT signals. However, you can use the cookie consent controls on our website to manage your tracking preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <ul className="text-zinc-400 space-y-2 list-disc list-inside mt-4">
                <li>Email: privacy@timedigits.com</li>
                <li>Twitter/X: <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">@treedigitsinc</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. More Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                For more information about cookies and how they work, visit{" "}
                <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">www.allaboutcookies.org</a>.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                See also our <Link to="/privacy" className="text-teal-400 hover:text-teal-300">Privacy Policy</Link> for more details on how we handle your personal information.
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
