import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deliverables | Harlowe Enterprises',
  description: 'What you receive: Executive Brief, Decision Logic Matrix, Slide Deck, and optional add-ons.',
}

export default function Deliverables() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">What You Receive</h1>
          <p className="text-lg text-gray-600">
            Four core deliverables designed for immediate use in leadership conversations.
          </p>
        </div>
      </section>

      {/* Core Deliverables */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {/* Executive Brief */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <h2 className="heading-md mb-4">Executive Brief</h2>
                <p className="text-gray-600 mb-4">
                  <strong>What it is:</strong> A 1–3 page executive summary written in plain language. No jargon. Suitable for board distribution.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Why it matters:</strong> Leaders need clarity before they can act. This brief answers: "What's actually happening? Where does work stall? What's the risk?"
                </p>
                <p className="text-gray-600">
                  <strong>What's inside:</strong>
                </p>
                <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Current state narrative</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Key patterns and structural issues</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Identified risks and dependencies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Recommended focus areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center md:col-span-5 md:mt-6">
                <div className="text-gray-400 text-sm mb-2">[Sample Document]</div>
                <p className="text-gray-600 text-sm mb-4">Executive Brief mockup</p>
                <p className="text-xs text-gray-500">Sample available on request</p>
              </div>
            </div>

            {/* Decision Rights Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="order-2 md:order-1 md:col-span-5 md:mt-6">
                <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
                  <div className="text-gray-400 text-sm mb-2">[Sample Table]</div>
                  <p className="text-gray-600 text-sm mb-4">Decision Matrix mockup</p>
                  <p className="text-xs text-gray-500">Sample available on request</p>
                </div>
              </div>
              <div className="order-1 md:order-2 md:col-span-7">
                <h2 className="heading-md mb-4">Decision Logic Matrix</h2>
                <p className="text-gray-600 mb-4">
                  <strong>What it is:</strong> A structured table that maps every decision type: thresholds, escalation gates, who decides, when it escalates.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Why it matters:</strong> This is where tribal knowledge becomes documented truth. "Alice makes this call when X &gt; $50K" becomes clear. Judgment is transferable.
                </p>
                <p className="text-gray-600">
                  <strong>What's inside:</strong>
                </p>
                <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Decision categories</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Authority and thresholds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Escalation logic</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Timeline expectations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Slide Deck */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <h2 className="heading-md mb-4">Slide Deck</h2>
                <p className="text-gray-600 mb-4">
                  <strong>What it is:</strong> A 10–15 slide presentation ready for board or leadership team review. Polished, professional, board-ready.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Why it matters:</strong> Some leaders prefer narrative and visuals. This deck tells the story. It's formatted for print or screen share.
                </p>
                <p className="text-gray-600">
                  <strong>What's inside:</strong>
                </p>
                <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Context and scope</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Org structure and decision flow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Identified patterns and risks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-harlowe-blue">•</span>
                    <span>Recommendations and next steps</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center md:col-span-5 md:mt-6">
                <div className="text-gray-400 text-sm mb-2">[Sample Slides]</div>
                <p className="text-gray-600 text-sm mb-4">Deck mockup (10–15 slides)</p>
                <p className="text-xs text-gray-500">Sample available on request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-ons */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Optional Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-sm mb-4">Audio Overview</h3>
              <p className="text-gray-600 mb-4">
                A 5–12 minute recorded narrative. For leaders who prefer to consume on the go. Includes the key findings and recommendations from the brief.
              </p>
              <p className="text-sm text-gray-500">Available for premium packages.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-sm mb-4">Infographic</h3>
              <p className="text-gray-600 mb-4">
                A one-page visual summary of the decision flow and key risks. Only included if it meets our premium quality threshold.
              </p>
              <p className="text-sm text-gray-500">Not always created; quality-gated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Modes Explained */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-12">Output Modes</h2>
          <p className="text-gray-600 text-center mb-8">
            All deliverables can be formatted in one of two modes based on your audience and needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="heading-sm text-harlowe-blue mb-4">Executive Mode</h3>
              <p className="text-gray-600 mb-4">
                Clean narrative. Plain language. Focus on what matters: decisions, patterns, risks, and leverage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Leadership-focused language</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Strategic implications</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Actionable recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>No methodology deep-dive</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="heading-sm text-harlowe-blue mb-4">CFO Mode</h3>
              <p className="text-gray-600 mb-4">
                Defensible. Every claim tagged. Limitations explicit. Methodology transparent.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Claims tagged: Observed / Inferred / Speculative</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Limitations clearly stated</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Methodology explained</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue">✓</span>
                  <span>Audit trail logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">Let's get your diagnostic started.</h2>
          <a href="/contact" className="btn-primary">
            Request a Diagnostic
          </a>
        </div>
      </section>
    </>
  )
}
