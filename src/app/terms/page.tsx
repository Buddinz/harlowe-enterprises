import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Disclaimer | Harlowe Enterprises',
  description: 'Terms of service and disclaimers for Harlowe Enterprises diagnostic services.',
}

export default function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="heading-lg mb-2">Terms & Disclaimer</h1>
          <p className="text-gray-600">Last Updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto space-y-8 text-gray-600">
          <div>
            <h2 className="heading-md mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website or engaging Harlowe Enterprises for diagnostic services, you accept and agree to be bound by these terms and conditions. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Scope of Services</h2>
            <p className="mb-3">
              Harlowe Enterprises provides Executive Diagnostic Intelligence services, which include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Interviews with client leaders about decision-making and operational patterns</li>
              <li>Analysis and synthesis of provided information</li>
              <li>Production of diagnostic deliverables (Executive Briefs, Decision Logic Matrices, Slide Decks, and optional add-ons)</li>
              <li>Delivery and walkthrough of findings</li>
            </ul>
            <p>
              Our services are diagnostic and analytical in nature. We do not provide implementation support, ongoing consulting, executive coaching, staffing recommendations, or software selection services unless explicitly agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Limitations of Our Work</h2>
            <p className="mb-3">
              Our diagnostic analysis is based on information provided during intake interviews and materials shared by the client. Our findings reflect:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Patterns observed during interviews and analysis</li>
              <li>Inferences drawn from available information</li>
              <li>Speculative insights about unobserved patterns</li>
            </ul>
            <p className="mb-3">
              In CFO Mode, we explicitly tag the confidence level of each claim (Observed / Inferred / Speculative). In Executive Mode, we focus on actionable patterns while noting material limitations.
            </p>
            <p>
              We cannot guarantee that all operational issues will be identified or that recommendations will achieve specific outcomes. Implementation success depends on execution, organizational context, and factors beyond our control.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">No Professional Advice</h2>
            <p className="mb-3">
              Unless we are retained as your legal counsel, accountant, or formal advisor, our analysis is provided for informational purposes only and should not be construed as:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Legal advice</li>
              <li>Financial or accounting advice</li>
              <li>HR or employment law guidance</li>
              <li>Regulatory or compliance guidance</li>
              <li>Insurance recommendations</li>
            </ul>
            <p className="mt-4">
              You should consult appropriate professionals (lawyers, accountants, HR consultants, etc.) before making decisions based on our findings.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Confidentiality</h2>
            <p className="mb-3">
              Information you provide during engagement is treated as confidential work product. We will not disclose client-specific findings, patterns, or deliverables to third parties without your written permission.
            </p>
            <p className="mb-3">
              We may use anonymized, sanitized examples in case studies, marketing materials, or professional presentations, provided all identifying information is removed and no client can be reasonably identified. We will seek written permission before publishing any case study referencing your organization by name or with identifiable details.
            </p>
            <p>
              You own all deliverables produced during the engagement. You may use them internally as you see fit, share with your board, investors, auditors, or advisors, and reproduce them for internal purposes.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Limitation of Liability</h2>
            <p className="mb-3">
              To the fullest extent permitted by law, Harlowe Enterprises and its officers, employees, and agents are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Lost profits, revenue, data, or business opportunity</li>
              <li>Damages arising from use or reliance on our diagnostic analysis</li>
              <li>Decisions made based on our findings that result in adverse outcomes</li>
              <li>Website downtime, errors, or technical issues</li>
            </ul>
            <p>
              Our total liability for any claim shall not exceed the amount paid for the specific engagement giving rise to the claim, or $1,000, whichever is greater.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">No Guarantee of Results</h2>
            <p>
              We do not guarantee that implementing recommendations from our diagnostic will achieve specific operational, financial, or business outcomes. Results depend on execution quality, organizational readiness, market conditions, and many factors outside our control. Past client outcomes do not predict future results.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Website Use</h2>
            <p className="mb-3">
              By using our website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Not use the site for unlawful purposes or to violate any laws</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit viruses, malware, or malicious code</li>
              <li>Not copy or reproduce content without permission (except for personal, non-commercial use)</li>
              <li>Not infringe on intellectual property rights</li>
            </ul>
            <p>
              Harlowe Enterprises reserves the right to refuse service, terminate access, or remove content that violates these terms.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Intellectual Property</h2>
            <p className="mb-3">
              The website, including its content, design, and structure, is owned or licensed by Harlowe Enterprises. You may not reproduce, adapt, or distribute our materials without permission, except as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Personal, non-commercial use on a single device</li>
              <li>Deliverables you commission and own (see Confidentiality section)</li>
            </ul>
            <p>
              All other rights are reserved. Trademarks, logos, and service marks are the property of Harlowe Enterprises or their respective owners.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We do not control, endorse, or assume responsibility for the content, accuracy, or practices of external websites. Use of third-party sites is at your own risk and governed by their terms and policies.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Harlowe Enterprises, its officers, employees, and agents from any claims, damages, or costs arising from your use of our website or services, your violation of these terms, or your infringement of third-party rights.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Changes to Terms</h2>
            <p>
              We may update these terms at any time. Changes are effective upon posting to the website. Continued use after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Texas.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Dispute Resolution</h2>
            <p className="mb-3">
              Before pursuing formal legal action, we encourage parties to contact each other to attempt to resolve disputes informally. If informal resolution is unsuccessful, disputes will be governed by the laws of Texas and resolved in applicable courts.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Entire Agreement</h2>
            <p>
              These terms, along with any written engagement letter or service agreement, constitute the entire agreement between you and Harlowe Enterprises regarding our services. If there is a conflict between these terms and any signed agreement, the signed agreement shall control.
            </p>
          </div>

          <div>
            <h2 className="heading-md mb-4">Contact for Legal Questions</h2>
            <p>If you have questions about these terms, contact:</p>
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
      </section>
    </>
  )
}
