import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Examples | Harlowe Enterprises',
  description: 'Sanitized case studies showing patterns we discover and risks we surface.',
}

export default function Proof() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">What We Find</h1>
          <p className="text-lg text-gray-600">
            Sanitized examples of real patterns we've discovered and risks we've surfaced. Additional case studies available on request.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-4 inline-block px-4 py-1 bg-harlowe-light rounded-full text-sm font-semibold text-harlowe-blue">
            Case Study 1
          </div>
          <h2 className="heading-md mb-4">Field Operations: Central Router Bottleneck</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Situation</h3>
              <p className="text-gray-600 mb-3">
                Mid-market logistics company. 50+ drivers, central dispatch, regional supervisors. Field teams execute well but field-to-central coordination was breaking down as company scaled. Almost every urgent decision still went through the COO.
              </p>
              <p className="text-gray-600">
                Leadership wanted to scale but didn't want to add overhead. They needed to understand: "What should be delegated? What needs central approval?"
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Patterns We Found</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Dispatch supervisors lacked authority to make exceptions. Every route deviation needed COO approval.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Customer escalations bypassed regional managers entirely. Went straight to central office.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Regional supervisors had no decision thresholds for routine problems (vehicle breakdowns, minor delays, customer issues under $X).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Office-to-field handoffs for new contracts had no defined playbook. Every new client required manual coordination.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Risks Surfaced</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Scaling to 100+ drivers means COO would drown in approvals. Model breaks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Regional supervisors have no real authority. Undermines their role and growth potential.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Inconsistent customer service. Same issue handled differently by different regions (because decision authority is unclear).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>New contract onboarding is slow and error-prone.</span>
                </li>
              </ul>
            </div>

            <div className="frame-soft p-6 border-l-4 border-harlowe-blue">
              <h3 className="font-semibold mb-3">Output Delivered</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Executive Brief:</strong> Mapped the bottleneck. Showed that regional supervisors needed authority to unlock scaling.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Decision Logic Matrix:</strong> Thresholds for regional supervisors. Defined what they can decide vs. what escalates. New contract playbook documented.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Slide Deck:</strong> Governance model for 50–100+ driver operations. New authority matrix. Audit trail logic.</span>
                </li>
              </ul>
            </div>

            <div className="bg-harlowe-light p-4 rounded italic text-sm text-gray-600">
              <p>Result: Client implemented new decision authorities for regional supervisors. Onboarding time for new drivers dropped 40%. COO freed from routine approvals. Company scaled to 80 drivers without adding office staff.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200" />

      {/* Case Study 2 */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-4 inline-block px-4 py-1 bg-harlowe-light rounded-full text-sm font-semibold text-harlowe-blue">
            Case Study 2
          </div>
          <h2 className="heading-md mb-4">Municipal Operations: Dispatch + Fleet + Procurement</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Situation</h3>
              <p className="text-gray-600 mb-3">
                Regional municipal authority managing dispatch centers, maintenance fleets, and procurement. 120 employees across central office and six field stations. Complaints that response times are slow and repair work stalls in approvals.
              </p>
              <p className="text-gray-600">
                Leadership sensed problems but couldn't articulate where decisions actually live or why escalations were frequent.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Patterns We Found</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Three separate approval chains for different repair categories, but thresholds were not documented. Field supervisors didn't know: "When do I escalate? When do I decide?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Procurement authority was unclear. Emergencies were routed up to the director by default, not by policy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>Dispatch supervisors and maintenance supervisors had no coordination protocol. Urgent repairs triggered ad-hoc meetings rather than a defined handoff.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">→</span>
                  <span>One field station manager held decision authority that should have belonged to central operations.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Risks Surfaced</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Key-person dependency on director for routine decisions. If director unavailable, work stops.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Inconsistent decision-making across stations. Same scenario handled differently at different locations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Audit trail gaps. No clear record of who authorized what when.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-harlowe-blue">◆</span>
                  <span>Slow response to urgent calls because authorization wasn't delegated.</span>
                </li>
              </ul>
            </div>

            <div className="frame-soft p-6 border-l-4 border-harlowe-blue">
              <h3 className="font-semibold mb-3">Output Delivered</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Executive Brief:</strong> Clear narrative of decision flow. Showed why response times were slow (not urgency, not staffing — delegation).</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Decision Logic Matrix:</strong> Three separate approval matrices by repair type. Explicit thresholds. Who decides at each level. When escalation happens.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Slide Deck:</strong> Org structure. Decision routes. Risk map. Recommendations (which included new delegation authorities).</span>
                </li>
              </ul>
            </div>

            <div className="bg-harlowe-light p-4 rounded italic text-sm text-gray-600">
              <p>Result: Client implemented three new threshold matrices. Response time to urgent repairs dropped from 6 hours to under 2. Key-person dependency risk documented and addressed with board.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-12">What Leaders Say</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border-l-4 border-harlowe-blue">
              <p className="text-gray-600 italic mb-4">
                "We thought we needed to hire a COO. What we actually needed was to delegate decisions that were already being made. Harlowe showed us the difference."
              </p>
              <p className="font-semibold text-sm text-gray-700">Operations Director, Multi-location Service Firm</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-harlowe-blue">
              <p className="text-gray-600 italic mb-4">
                "The Decision Matrix alone is worth the investment. Now our teams know exactly when to escalate and when to decide. It's reduced our approval cycle by half."
              </p>
              <p className="font-semibold text-sm text-gray-700">CEO, Construction Services</p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-harlowe-blue">
              <p className="text-gray-600 italic mb-4">
                "As a CFO, I loved the rigor. Every claim was tagged. Limitations were explicit. This wasn't consultant theater—it was forensic work."
              </p>
              <p className="font-semibold text-sm text-gray-700">CFO, Healthcare Services Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">See what we can uncover in your operation.</h2>
          <a href="/contact" className="btn-primary">
            Request a Diagnostic
          </a>
        </div>
      </section>
    </>
  )
}
