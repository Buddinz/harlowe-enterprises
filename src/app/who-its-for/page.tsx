import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who It\'s For | Harlowe Enterprises',
  description: 'Use cases: construction, logistics, healthcare, multi-site operations. When it\'s a fit and when it\'s not.',
}

export default function WhoItFor() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">Who It's For</h1>
          <p className="text-lg text-gray-600">
            Any operation where decisions bottleneck, momentum stalls, or "only one person knows" is a problem.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {[
              {
                title: 'Construction & Field Operations',
                desc: 'You have site crews, office staff, compliance requirements. Work stalls at approval gates. Project hand-offs between central and field teams create friction. Sequencing breaks because decision authority is unclear.',
                example: 'Change orders take too long. Procurement approvals delay job starts.',
              },
              {
                title: 'Logistics & Dispatch-Driven Operations',
                desc: 'Urgency eats planning. Dispatch needs to make fast calls, but doesn\'t have clear thresholds. Routes, assignments, exception handling — all handled ad-hoc by experienced people.',
                example: 'When drivers can override routing. When dispatch escalates vs. decides.',
              },
              {
                title: 'Healthcare & Behavioral Services',
                desc: 'You have compliance, governance, clinical judgment. Decision-making requires coordination across disciplines. Risk is high. Accountability must be clear.',
                example: 'Escalation protocols. Who can admit patients. Risk sign-off authority.',
              },
              {
                title: 'Multi-Site Service Businesses',
                desc: 'You have variance across locations. Central policy meets local judgment. Key people carry institutional knowledge. Scaling is hard because you can\'t replicate one person\'s decision-making across ten sites.',
                example: 'Franchise operations. Multi-location customer service. Regional management.',
              },
              {
                title: 'Operations Leaders with Overloaded Spans',
                desc: 'You\'re the decision maker for too much. Work stalls waiting for your input. Your team doesn\'t know what they\'re authorized to do.',
                example: 'Any operation where decisions flow up faster than leaders can process them.',
              },
            ].map((useCase, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border-l-4 border-harlowe-blue">
                <h3 className="heading-sm mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-3">{useCase.desc}</p>
                <p className="text-sm font-mono text-gray-500">Example: {useCase.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Buyers */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">Our Typical Customer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'CEO / COO',
                desc: 'Running the business. Need to know: what\'s slowing us down? Where\'s my leverage? What risks am I not seeing?',
              },
              {
                role: 'Operations / GM',
                desc: 'Managing execution across teams or locations. Overloaded with approvals and escalations. Want to delegate more effectively.',
              },
              {
                role: 'CFO',
                desc: 'Need defensible clarity on risk, process, and decision authority. Want assurance that controls are real, not just policy.',
              },
            ].map((buyer, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="font-semibold mb-3 text-harlowe-blue">{buyer.role}</h3>
                <p className="text-gray-600 text-sm">{buyer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center">Good Fit Company Types</h2>
          <ul className="space-y-4">
            {[
              'Mid-market operators ($10M–$500M revenue)',
              'Private equity portfolio companies (portfolio companies of funds)',
              'Family or founder-led operations scaling beyond one person',
              'Organizations with 20+ employees across multiple layers or locations',
              'Any operation where decisions are made by people, not software',
              'Operations where "how it really works" differs from the org chart',
              'Companies with municipal, regulatory, or governance requirements',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-harlowe-blue font-bold mt-1">+</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When It's NOT a Fit */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-md mb-8 text-center text-red-600">When It's Not a Fit</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-300">
              <h3 className="font-semibold mb-2">If you only need labor.</h3>
              <p className="text-sm text-gray-600">
                "We know the problem. We just need to hire someone to run it." We're not a staffing service. We identify structural issues, not gaps in headcount.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-300">
              <h3 className="font-semibold mb-2">If you want us to run operations for you.</h3>
              <p className="text-sm text-gray-600">
                We're consultants, not interim operators. We give you clarity. You decide what to do with it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-300">
              <h3 className="font-semibold mb-2">If you want tool recommendations only.</h3>
              <p className="text-sm text-gray-600">
                "Just tell us what software to buy." That's not what we do. We diagnose the underlying problem. If the answer happens to be "you need a system," that's one output among many.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-300">
              <h3 className="font-semibold mb-2">If you're looking for a six-month engagement.</h3>
              <p className="text-sm text-gray-600">
                We're fixed-scope and fast. If you need ongoing implementation support or change management, that's outside our model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Note */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-harlowe-light p-8 rounded-lg border border-gray-300">
            <h3 className="heading-sm mb-3">A Note on Municipal & Government Work</h3>
            <p className="text-gray-600 mb-4">
              We can work with municipal agencies, public sector operations, and government departments. Our discipline—defensible claims, limitations explicit, audit trail clear—is especially valuable in regulated environments.
            </p>
            <p className="text-gray-600">
              Procurement timelines are longer. Budget cycles are different. But structurally? The problems are the same. Decisions bottleneck. Risk isn't transparent. "Only the director knows how this works."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-harlowe-dark text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-4">Not sure if you're a fit?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's talk. A 15-minute conversation will clarify whether this makes sense for you.
          </p>
          <a href="/contact" className="btn-primary">
            Schedule a Fit Check
          </a>
        </div>
      </section>
    </>
  )
}
