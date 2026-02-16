import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works | Harlowe Enterprises',
  description: 'Our process: intake, pattern extraction, build outputs, delivery. What we need from you.',
}

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">How It Works</h1>
          <p className="text-lg text-gray-600">
            Four stages. Fixed scope. Fast turnaround. You stay in control.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {[
              {
                num: '1',
                title: 'Intake',
                desc: 'We conduct a structured interview with 2–4 key leaders. We ask about decision flow, escalation patterns, bottlenecks, and examples of delays.',
                details: [
                  'Short interview (1–2 hours total)',
                  'Request existing SOPs, org charts, policy docs',
                  'Ask for examples of real delays or escalations',
                  'Discuss any metrics that matter to you',
                ],
              },
              {
                num: '2',
                title: 'Pattern Extraction',
                desc: 'We synthesize what we heard. Map decision routes. Identify where friction lives. Extract the judgment that sits in people\'s heads.',
                details: [
                  'Construct decision flow maps',
                  'Identify escalation patterns',
                  'Tag where coordination breaks',
                  'Surface second-order risks',
                  'Validate patterns with you',
                ],
              },
              {
                num: '3',
                title: 'Build Outputs',
                desc: 'We create the four core deliverables: brief, matrix, slide deck, and supporting materials. Formatted for your leadership and your audience.',
                details: [
                  'Executive Brief (plain language)',
                  'Decision Logic Matrix (structured)',
                  'Slide Deck (board-ready)',
                  'Optional: Audio overview, infographic',
                  'Choose Executive or CFO mode (or both)',
                ],
              },
              {
                num: '4',
                title: 'Delivery & Handoff',
                desc: 'We deliver the complete package. Walk through findings if helpful. Then step out. You decide what happens next. No implementation work. No ongoing engagement.',
                details: [
                  'Present findings to your team',
                  'Answer clarifying questions',
                  'Provide all materials',
                  'Support your next-step decisions',
                  'Done.',
                ],
              },
            ].map((step, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-16 h-16 bg-harlowe-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h2 className="heading-sm">{step.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-6">{step.desc}</p>
                  <h4 className="font-semibold mb-3 text-gray-700">What's involved:</h4>
                  <ul className="space-y-2">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex gap-2 text-gray-600 text-sm">
                        <span className="text-harlowe-blue">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center">What We Need From You</h2>

          <div className="mb-8">
            <h3 className="font-semibold mb-4">Essentials</h3>
            <ul className="space-y-3">
              {[
                'Time from 2–4 key leaders (3–4 hours total across the engagement)',
                'Access to one person who can answer questions during analysis',
                'Willingness to talk about what\'s NOT working (not just what is)',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-harlowe-blue font-bold">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-4">Helpful (if available)</h3>
            <ul className="space-y-3">
              {[
                'Current SOPs or policy documents',
                'Org chart (even informal)',
                'Recent examples of delays or escalations (anonymized)',
                'Any existing metrics or dashboards',
                'Email chains that show decision flow (optional)',
                'Workflow tools or systems you use',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gray-500">◦</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-harlowe-blue">
            <h4 className="font-semibold mb-2">What if you only have partial information?</h4>
            <p className="text-sm text-gray-600">
              We can still work. We'll surface patterns from what you have. But fidelity increases with better substrate. If you have 40% of what we'd ideally see, we'll flag that in the CFO Mode and note limitations explicitly.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center">Timeline</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="bg-harlowe-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Week 1: Intake & Interviews</h4>
                  <p className="text-sm text-gray-600">You talk to us. We talk to your team. 3–4 hours of conversations.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-harlowe-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Week 2: Analysis</h4>
                  <p className="text-sm text-gray-600">We synthesize, map, and build. We may ask clarifying questions.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-harlowe-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Week 3: Delivery</h4>
                  <p className="text-sm text-gray-600">Materials delivered. Walk-through call if helpful. You're done with us.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">Turnaround can compress if needed. Typical is 2–3 weeks start to finish.</p>
          </div>
        </div>
      </section>

      {/* Output Modes */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center">Choosing Your Output Mode</h2>
          <p className="text-gray-600 text-center mb-8">
            You can request all outputs in one mode, or mix them. Here's how to think about it:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Executive Mode</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use this for leadership team discussions, board conversations, or when you want clean narrative without defensive detail.
              </p>
              <p className="text-xs text-gray-500">Example: CEO shares with leadership team to align on next moves.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-3">CFO Mode</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use this for governance, compliance, PE due diligence, or when defensibility matters more than narrative flow.
              </p>
              <p className="text-xs text-gray-500">Example: CFO reviews for risk assessment. PE partner reviews for KPR scan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center">After Delivery</h2>
          <p className="text-gray-600 text-center mb-8">
            You have clarity. Now the real work starts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'You Decide',
                desc: 'What to act on. What to ignore. What\'s worth the effort to change.',
                example: 'You might fix approval thresholds. Or build a new role. Or both. Or neither. Your call.',
              },
              {
                title: 'You Execute',
                desc: 'If you want implementation support, training, or change management, that\'s a separate engagement. We focus on diagnosis.',
                example: 'We hand you the map. You navigate.',
              },
              {
                title: 'You Keep It',
                desc: 'All materials are yours. Use them with your board, your team, your investors, your auditors. No restrictions.',
                example: 'Share the Decision Matrix with your ops team. Use the Brief in board meetings.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <p className="text-xs text-gray-500 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">Ready to start?</h2>
          <a href="/contact" className="btn-primary">
            Request a Diagnostic
          </a>
        </div>
      </section>
    </>
  )
}
