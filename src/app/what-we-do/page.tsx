import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do | Harlowe Enterprises',
  description: 'Executive Diagnostic Intelligence: operational mapping, decision routing, and risk identification.',
}

export default function WhatWeDo() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">Executive Diagnostic Intelligence</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            An outside-in diagnostic that maps how decisions actually flow, identifies structural friction, and surfaces second-order risks — without prescribing solutions.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8">What It Is</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              We conduct a forensic review of how your organization actually makes decisions. We interview leaders, examine SOPs, look at escalation patterns, and map the judgment that sits in people's heads rather than in documented thresholds.
            </p>
            <p>
              We then produce clear outputs that surface:
            </p>
            <ul className="space-y-3 list-none">
              <li className="flex gap-3">
                <span className="text-harlowe-blue font-bold mt-1">→</span>
                <span>Where decisions live and who holds them</span>
              </li>
              <li className="flex gap-3">
                <span className="text-harlowe-blue font-bold mt-1">→</span>
                <span>Where approval chains create bottlenecks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-harlowe-blue font-bold mt-1">→</span>
                <span>Where coordination breaks (office to field, operations to finance, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-harlowe-blue font-bold mt-1">→</span>
                <span>Which risks are structural (not personal)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-harlowe-blue font-bold mt-1">→</span>
                <span>What leverage points exist (change X and Y cascades improve)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What It Is NOT */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8">What It Is NOT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Not Coaching', desc: 'We don\'t work with individuals on personal performance or leadership style.' },
              { title: 'Not Implementation', desc: 'We don\'t run the project, build the system, or manage the change. You decide what happens next.' },
              { title: 'Not Software Sales', desc: 'We don\'t recommend tools, platforms, or vendor solutions. Ever.' },
              { title: 'Not Staffing Recommendations', desc: 'We don\'t tell you who to hire, fire, or promote. We identify structural issues, not people issues.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-harlowe-blue">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8">What Changes</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Better Decisions',
                desc: 'When decision thresholds are clear, leaders make faster, more consistent calls. No more escalations that should be delegated.',
              },
              {
                title: 'Reduced Overload',
                desc: 'You stop holding decisions that don\'t belong to you. Work flows. Approvals happen without your signature.',
              },
              {
                title: 'Cleaner Delegation',
                desc: 'Your team knows exactly when to escalate and when to decide. "Alice doesn\'t know" becomes a solvable problem.',
              },
              {
                title: 'Faster Execution',
                desc: 'Ambiguity drops. Friction reduces. Work that was stalled in approvals now moves. Momentum improves.',
              },
            ].map((outcome, i) => (
              <div key={i} className="border-l-4 border-harlowe-blue pl-6 py-2">
                <h3 className="font-semibold mb-2">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-12 text-center">Our Discipline</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-semibold mb-3 text-harlowe-blue">Observed vs. Inferred vs. Speculative</h3>
              <p className="text-gray-600">
                Every claim in our brief is tagged. You'll see exactly what we know directly, what we deduced, and what's hypothetical. This discipline builds confidence. It's especially important for CFOs and governance-minded leaders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-semibold mb-3 text-harlowe-blue">We Don't Claim What We Can't Support</h3>
              <p className="text-gray-600">
                We state our limitations explicitly. If data is incomplete, we say so. If a pattern is suggestive but not conclusive, we say that too. You trust this because we don't oversell.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-semibold mb-3 text-harlowe-blue">Fixed Scope. Fast Turnaround.</h3>
              <p className="text-gray-600">
                We're not building a six-month engagement. Intake, analysis, output. You know the scope. You know the timeline. Built for leaders who hate scope creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">Ready to uncover where momentum breaks?</h2>
          <a href="/contact" className="btn-primary">
            Request a Diagnostic
          </a>
        </div>
      </section>
    </>
  )
}
