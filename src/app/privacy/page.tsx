import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Harlowe Enterprises',
  description: 'Privacy Policy for Harlowe Enterprises Executive Diagnostic Intelligence services.',
}

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="heading-lg mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto prose prose-sm max-w-none">
          <div className="space-y-8 text-gray-600">
            <div>
              <h2 className="heading-md mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how HARLOWE Enterprises, LLC ("Harlowe Enterprises," "we," "us," or "our") collects, uses, and protects information when you use our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Information We Collect</h2>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">Information You Provide</h3>
              <p className="mb-3">When you contact us, request a diagnostic, or engage our services, you may provide:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Contact details (name, email address, phone number, company name, role)</li>
                <li>Operational information shared during intake interviews</li>
                <li>Documents you provide (SOPs, org charts, process documentation, anonymized examples of operational issues)</li>
                <li>Any other information you choose to share in communications with us</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-6">Information Collected Automatically</h3>
              <p className="mb-3">When you visit our website, we may collect:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent, navigation patterns)</li>
                <li>Referral source</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md mb-4">How We Use Information</h2>
              <p className="mb-3">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Deliver Executive Diagnostic Intelligence services</li>
                <li>Respond to inquiries and schedule consultations</li>
                <li>Produce diagnostic deliverables (Executive Briefs, Decision Logic Matrices, Slide Decks, Audio Overviews, Infographics)</li>
                <li>Improve our website and services</li>
                <li>Communicate about our services when you've expressed interest</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We do not sell, rent, or trade your information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Client Work Product and Confidentiality</h2>
              <p className="mb-3">
                Operational information and documents you share during diagnostic engagements are treated as confidential work product. We do not disclose client-specific patterns, findings, or deliverables to third parties without explicit permission.
              </p>
              <p>
                We may create anonymized, sanitized case studies or examples that remove all identifying information. We will not publish any case study referencing your organization without your written consent.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Data Retention</h2>
              <p className="mb-3">We retain:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Client deliverables and work files: For the duration of the engagement plus a reasonable period for reference, typically 12–24 months unless otherwise agreed</li>
                <li>Contact and communication records: As needed for business records and legal compliance</li>
                <li>Website analytics: In aggregated form, indefinitely</li>
              </ul>
              <p>
                You may request deletion of your information by contacting us. Some data may be retained where required by law or legitimate business need (e.g., financial records, executed agreements).
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, disclosure, or loss. However, no method of transmission or storage is completely secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Third-Party Services</h2>
              <p className="mb-3">
                Our website may use third-party services for analytics, hosting, or communication (e.g., form processors, email providers, calendar scheduling tools). These services have their own privacy policies. We use vendors who maintain reasonable data protection standards.
              </p>
              <p>
                We do not integrate with advertising networks or tracking systems beyond basic analytics.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Cookies and Tracking</h2>
              <p>
                Our website may use cookies or similar technologies for functionality and analytics. You can control cookie preferences through your browser settings. Disabling cookies may limit some website features.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Your Rights</h2>
              <p className="mb-3">Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access the information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Object to certain processing activities</li>
              </ul>
              <p>
                To exercise these rights, contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Children's Privacy</h2>
              <p>
                Our services are directed to businesses and professionals. We do not knowingly collect information from individuals under 18. If we learn we have collected such information, we will delete it.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our website or services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Limitations and Disclaimers</h2>
              <p className="mb-3">
                This Privacy Policy applies to information collected through our website and in connection with our services. It does not apply to third-party websites we may link to.
              </p>
              <p>
                Our diagnostic services involve analysis and synthesis of operational information. While we maintain confidentiality, we cannot control how you choose to use or share the deliverables we provide.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-4">Contact Information</h2>
              <p>For questions about this Privacy Policy or to exercise your privacy rights, contact:</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">HARLOWE Enterprises, LLC</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@harloweinvest.com" className="text-harlowe-blue font-semibold hover:underline">
                    info@harloweinvest.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:832-319-9795" className="text-harlowe-blue font-semibold hover:underline">
                    832-319-9795
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
