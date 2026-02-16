export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6">
              Operational clarity you can use in the next meeting.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We produce an outside-in diagnostic that shows where decisions bottleneck, where momentum breaks, and which risks are structural — without prescribing tools or staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Request a Diagnostic
              </a>
              <a href="/deliverables" className="btn-secondary">
                See Deliverables
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-harlowe-blue rounded-lg mb-4" />
              <h3 className="heading-sm mb-4">Map Decision Routing</h3>
              <p className="text-gray-600 leading-relaxed">
                We identify escalation patterns and approval gates. Shows where decisions live, who owns them, and where work stalls.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-harlowe-blue rounded-lg mb-4" />
              <h3 className="heading-sm mb-4">Identify Structural Friction</h3>
              <p className="text-gray-600 leading-relaxed">
                Office to field handoffs. Change handling. Approval workflows. We expose the friction that taxes execution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-harlowe-blue rounded-lg mb-4" />
              <h3 className="heading-sm mb-4">Surface Second-Order Risks</h3>
              <p className="text-gray-600 leading-relaxed">
                Key-person dependency. Latent churn. Hidden cost curves. Governance traps. We find the risks that don't show on reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What You Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Executive Brief', desc: '1–3 pages of clear language for leadership meetings.' },
              { title: 'Decision Logic Matrix', desc: 'Thresholds, escalation gates, and the judgment behind SOPs.' },
              { title: 'Slide Deck', desc: '10–15 board-ready slides with narrative and patterns.' },
              { title: 'Optional: Audio + Infographic', desc: 'For premium packages.' },
            ].map((item, i) => (
              <div key={i} className="bg-harlowe-light p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Modes */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Two Output Modes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-sm text-harlowe-blue mb-4">Executive Mode</h3>
              <p className="text-gray-600 mb-4">
                Leadership-ready clarity. Plain language. Structural patterns. Risks. Leverage points. No tactics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Built for board and leadership conversations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Focuses on decisions and structural patterns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Actionable recommendations for next steps</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="heading-sm text-harlowe-blue mb-4">CFO Mode</h3>
              <p className="text-gray-600 mb-4">
                Defensible logic. Tagged claims. Explicit limitations. Quantified where possible. Audit trail.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Claims tagged as Observed / Inferred / Speculative</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Methodology clearly explained</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-harlowe-blue font-bold">•</span>
                  <span>Supporting evidence and limitations noted</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Operators Drowning in Escalation', desc: 'Too much work stuck in approvals. Unclear decision thresholds. Work moves only with your signature.' },
              { title: 'Growth Exposing Fragility', desc: 'You scale headcount but coordination breaks. The systems that worked don\'t scale.' },
              { title: 'Teams That Execute But Stall on Approvals', desc: 'Individual contributors execute. But decisions back up at review layers.' },
              { title: 'Where SOPs Exist But Judgment Isn\'t Transferable', desc: '"Only Alice knows how this actually works." You need that logic written down.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
            {[
              { num: '1', title: 'Intake', desc: 'Short interview. SOPs. Org chart. Examples of delays.' },
              { num: '2', title: 'Pattern Extraction', desc: 'We map routes and friction. Document the hidden logic.' },
              { num: '3', title: 'Build Outputs', desc: 'Brief, matrix, deck. Formatted for immediate use.' },
              { num: '4', title: 'Delivery', desc: 'Handoff. No implementation. You decide next moves.' },
            ].map((step, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 flex flex-col items-center text-center ${
                  i < 3 ? 'md:border-r border-gray-300' : ''
                }`}
              >
                <div className="w-12 h-12 bg-harlowe-blue text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md text-center mb-8">Why This Works</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-harlowe-blue pl-6 py-2">
              <h3 className="font-semibold mb-2">We separate people problems from system problems.</h3>
              <p className="text-gray-600">
                It's not about Alice's performance. It's about the decision authority she's holding that should be delegated.
              </p>
            </div>
            <div className="border-l-4 border-harlowe-blue pl-6 py-2">
              <h3 className="font-semibold mb-2">We document the judgment behind SOPs.</h3>
              <p className="text-gray-600">
                We convert tribal knowledge into decision thresholds. Now others can make the same calls without escalation.
              </p>
            </div>
            <div className="border-l-4 border-harlowe-blue pl-6 py-2">
              <h3 className="font-semibold mb-2">We explicitly label what's observed vs. inferred vs. unknown.</h3>
              <p className="text-gray-600">
                You'll know the confidence level of every claim. No hidden assumptions. CFOs can trust this.
              </p>
            </div>
            <div className="border-l-4 border-harlowe-blue pl-6 py-2">
              <h3 className="font-semibold mb-2">We produce clarity suitable for leadership discussion.</h3>
              <p className="text-gray-600">
                No consultant theater. No vague recommendations. You get specific patterns and concrete next moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">Ready to find the bottleneck?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about where momentum breaks and what's actually slowing execution.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-harlowe-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-opacity duration-200">
            Request a Diagnostic
          </a>
        </div>
      </section>
    </>
  )
}
