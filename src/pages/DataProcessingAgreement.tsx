import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function DataProcessingAgreement() {
  useEffect(() => {
    document.title = "Data Processing Agreement | timedigits";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Data Processing Agreement</h1>
          <p className="text-slate-400 mb-12">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
              <p className="text-slate-600 text-sm leading-relaxed">
                This Data Processing Agreement ("DPA") forms part of the agreement between timedigits
                (operated by Treedigits Inc.) and the Customer for the provision of time tracking services.
                This DPA applies where timedigits processes personal data on behalf of the Customer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h2>
              <ul className="text-slate-500 space-y-3 list-disc list-inside">
                <li><strong className="text-slate-700">"Personal Data"</strong> means any information relating to an identified or identifiable natural person as defined by applicable data protection laws (including GDPR, CCPA, and similar legislation).</li>
                <li><strong className="text-slate-700">"Processing"</strong> means any operation performed on Personal Data, including collection, storage, use, disclosure, or deletion.</li>
                <li><strong className="text-slate-700">"Data Controller"</strong> means the entity that determines the purposes and means of Processing Personal Data (the Customer).</li>
                <li><strong className="text-slate-700">"Data Processor"</strong> means the entity that Processes Personal Data on behalf of the Data Controller (timedigits).</li>
                <li><strong className="text-slate-700">"Sub-processor"</strong> means any third party engaged by timedigits to Process Personal Data.</li>
                <li><strong className="text-slate-700">"Data Subject"</strong> means the individual to whom the Personal Data relates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope and Purpose</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.1 Nature of Processing</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits processes Personal Data solely to provide time tracking services to the Customer.
                This includes:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Storing and managing time entries, projects, and tasks</li>
                <li>Generating reports and analytics for the Customer</li>
                <li>Enabling team collaboration features</li>
                <li>Providing customer support</li>
                <li>Maintaining security and preventing fraud</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.2 Types of Personal Data</h3>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Account information: email addresses, display names</li>
                <li>Time tracking data: time entries, project names, task descriptions</li>
                <li>Usage data: login timestamps, device information</li>
                <li>Team information: team member relationships, workspace settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.3 Categories of Data Subjects</h3>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Customer's employees and contractors</li>
                <li>Customer's team members</li>
                <li>End users authorized by the Customer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Protection Obligations</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.1 timedigits Obligations</h3>
              <p className="text-slate-500 leading-relaxed mb-4">timedigits agrees to:</p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Process Personal Data only on documented instructions from the Customer</li>
                <li>Ensure personnel are bound by confidentiality obligations</li>
                <li>Implement appropriate technical and organizational security measures</li>
                <li>Assist the Customer in responding to Data Subject requests</li>
                <li>Assist with security incident notifications and data protection impact assessments</li>
                <li>Delete or return Personal Data upon termination of services</li>
                <li>Make available information necessary to demonstrate compliance</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.2 Customer Obligations</h3>
              <p className="text-slate-500 leading-relaxed mb-4">The Customer agrees to:</p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Ensure lawful basis for Processing Personal Data</li>
                <li>Provide clear instructions regarding Processing</li>
                <li>Inform timedigits of any Data Subject requests received directly</li>
                <li>Comply with applicable data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Security Measures</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits implements and maintains the following security measures:
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.1 Technical Measures</h3>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Encryption of data in transit using TLS 1.2 or higher</li>
                <li>Encryption of data at rest using AES-256</li>
                <li>Regular security testing and vulnerability assessments</li>
                <li>Secure authentication mechanisms including password hashing</li>
                <li>Network security controls and firewalls</li>
                <li>Access logging and monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.2 Organizational Measures</h3>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Role-based access controls (principle of least privilege)</li>
                <li>Security awareness training for personnel</li>
                <li>Incident response procedures</li>
                <li>Business continuity and disaster recovery plans</li>
                <li>Regular review and testing of security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Sub-processors</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.1 Authorization</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                The Customer authorizes timedigits to engage Sub-processors to assist in providing
                the services. timedigits will maintain a list of current Sub-processors.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.2 Current Sub-processors</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-500 border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-3 text-slate-700">Sub-processor</th>
                      <th className="text-left p-3 text-slate-700">Purpose</th>
                      <th className="text-left p-3 text-slate-700">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-slate-700">Supabase</td>
                      <td className="p-3">Database hosting, authentication</td>
                      <td className="p-3">United States</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-slate-700">Vercel</td>
                      <td className="p-3">Application hosting</td>
                      <td className="p-3">United States</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-slate-700">Stripe</td>
                      <td className="p-3">Payment processing</td>
                      <td className="p-3">United States</td>
                    </tr>
                    <tr className="border-t border-slate-200">
                      <td className="p-3 font-medium text-slate-700">Google Analytics</td>
                      <td className="p-3">Website analytics (anonymized)</td>
                      <td className="p-3">United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5.3 Sub-processor Changes</h3>
              <p className="text-slate-500 leading-relaxed">
                timedigits will provide notice of any intended changes to Sub-processors. The Customer
                may object to such changes within 30 days. If no resolution is reached, the Customer may
                terminate the affected services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Subject Rights</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits will assist the Customer in responding to Data Subject requests, including:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li><strong className="text-slate-700">Right of access:</strong> Providing copies of Personal Data</li>
                <li><strong className="text-slate-700">Right to rectification:</strong> Correcting inaccurate data</li>
                <li><strong className="text-slate-700">Right to erasure:</strong> Deleting Personal Data (account deletion)</li>
                <li><strong className="text-slate-700">Right to data portability:</strong> Exporting data in machine-readable format (CSV)</li>
                <li><strong className="text-slate-700">Right to restriction:</strong> Limiting Processing as requested</li>
                <li><strong className="text-slate-700">Right to object:</strong> Ceasing Processing where applicable</li>
              </ul>
              <p className="text-slate-500 leading-relaxed mt-4">
                The Customer is responsible for responding to Data Subject requests. timedigits will provide
                reasonable assistance and self-service tools (data export, account deletion).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Incident Response</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7.1 Notification</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits will notify the Customer without undue delay (and within 72 hours where
                feasible) upon becoming aware of a security incident involving Personal Data.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7.2 Notification Content</h3>
              <p className="text-slate-500 leading-relaxed mb-4">Notifications will include:</p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Description of the nature of the incident</li>
                <li>Categories and approximate number of Data Subjects affected</li>
                <li>Likely consequences of the incident</li>
                <li>Measures taken or proposed to address the incident</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7.3 Cooperation</h3>
              <p className="text-slate-500 leading-relaxed">
                timedigits will cooperate with the Customer and take reasonable steps to assist in
                investigation and mitigation of any security incident.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. International Data Transfers</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">8.1 Transfer Mechanisms</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                For transfers of Personal Data outside the European Economic Area (EEA), UK, or
                Switzerland, timedigits relies on:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Sub-processor compliance with applicable data protection frameworks</li>
                <li>Supplementary measures where necessary</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">8.2 Standard Contractual Clauses</h3>
              <p className="text-slate-500 leading-relaxed">
                Where required by applicable law, the EU SCCs (Commission Decision 2021/914) are
                incorporated into this DPA. The Customer acts as data exporter and timedigits as
                data importer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Retention and Deletion</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9.1 During the Agreement</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits will retain Personal Data for the duration of the service agreement and
                as necessary to provide the services.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9.2 Upon Termination</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Upon termination or expiration of services, timedigits will:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Allow the Customer to export their data (30-day window)</li>
                <li>Delete Personal Data within 30 days of account deletion request</li>
                <li>Purge backup copies within 90 days</li>
                <li>Retain only data required by law (with documented legal basis)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Audits and Compliance</h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">10.1 Audit Rights</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                timedigits will make available upon request information necessary to demonstrate
                compliance with this DPA. This may include:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Security documentation and policies</li>
                <li>Third-party audit reports or certifications</li>
                <li>Responses to security questionnaires</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">10.2 On-site Audits</h3>
              <p className="text-slate-500 leading-relaxed">
                On-site audits may be conducted by mutual agreement, with reasonable notice and
                during normal business hours. The Customer shall bear the costs of any such audit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Liability and Indemnification</h2>
              <p className="text-slate-500 leading-relaxed">
                Each party's liability under this DPA is subject to the limitations of liability
                set forth in the main service agreement. Each party agrees to indemnify the other
                for any damages arising from its breach of this DPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Term and Termination</h2>
              <p className="text-slate-500 leading-relaxed">
                This DPA remains in effect for the duration of timedigits' Processing of Personal
                Data on behalf of the Customer. The data deletion obligations survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Modifications</h2>
              <p className="text-slate-500 leading-relaxed">
                timedigits may update this DPA to reflect changes in data protection laws or our
                practices. Material changes will be communicated with at least 30 days notice.
                Continued use of the services after changes take effect constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                For questions about this DPA or data protection matters:
              </p>
              <ul className="text-slate-500 space-y-2 list-disc list-inside">
                <li>Email: privacy@timedigits.com</li>
                <li>Twitter/X: <a href="https://twitter.com/treedigitsinc" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">@treedigitsinc</a></li>
              </ul>
              <p className="text-slate-500 leading-relaxed mt-4">
                See also our <Link to="/privacy" className="text-teal-500 hover:text-teal-600">Privacy Policy</Link> and <Link to="/terms" className="text-teal-500 hover:text-teal-600">Terms of Service</Link> for
                additional information about our data practices.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
