import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Harlowe Enterprises',
  description: 'Frequently asked questions about our diagnostic process, pricing, and approach.',
}

export default function FAQ() {
  const faqs = [
    {
      question: 'How is this different from traditional consulting?',
      answer: 'Traditional consulting often recommends solutions (hire, build, implement). We diagnose. We say "here\'s the problem" and "here\'s the decision logic you need." We stop there. We don\'t prescribe tools, staffing, or software. You decide what to do with the clarity.',
    },
    {
      question: 'What do you need from us to start?',
      answer: 'Time from 2–4 key leaders (3–4 hours total). Access to one person who can answer questions during analysis. Willingness to talk about what\'s NOT working. Ideally: existing SOPs, org chart, examples of delays. But we can work with less.',
    },
    {
      question: 'What if we only have partial information?',
      answer: 'We can still surface patterns. Fidelity increases with better data. In CFO Mode, we flag limitations explicitly. You\'ll see where our confidence is high and where we\'re inferring. We don\'t oversell what we know.',
    },
    {
      question: 'Do you recommend software or staffing?',
      answer: 'No. We identify structural issues, not gaps in tools or headcount. If a problem happens to require software, we might note that. But we\'re not selling anything. We\'re diagnosing.',
    },
    {
      question: 'Can you work with municipalities?',
      answer: 'Yes. Government and public sector work often has higher compliance and governance standards. Our discipline—defensible claims, audit trail clear, limitations explicit—is especially valuable there. Procurement is slower, but structurally it\'s the same work.',
    },
    {
      question: 'What happens after delivery?',
      answer: 'You have the materials. You decide what to act on. If you want help implementing changes, training, or change management, that\'s a separate engagement outside our diagnostic scope. We hand you the map. You navigate.',
    },
    {
      question: 'Can we use the materials with our board / investors / auditors?',
      answer: 'Yes. All materials are yours. Share them with whoever you want. No restrictions. The Decision Matrix can go to your ops team. The Brief can go to your board. The CFO Mode materials can go to compliance or auditors.',
    },
    {
      question: 'What does pricing look like?',
      answer: 'Preliminary Diagnostic: $7,500+. Standard Package: $12,000–$25,000 per role/department. Enterprise / Multi-role Board Pack: $45,000+. Final price depends on scope, number of roles, and complexity. Let\'s talk about what you need.',
    },
    {
      question: 'How long does it take?',
      answer: 'Typical timeline: 2–3 weeks start to finish. Week 1: intake. Week 2: analysis. Week 3: delivery. Can compress if needed. Fixed scope, so turnaround is predictable.',
    },
    {
      question: 'Who should be involved in the interviews?',
      answer: 'Key decision-makers and people closest to the work. For a mid-market operation: CEO or COO, operations leader, and 1–2 department heads. We\'ll talk to 2–4 people, usually 1–2 hours each.',
    },
    {
      question: 'What if we\'re not sure we need this?',
      answer: 'Let\'s have a 15-minute conversation. No cost. We\'ll ask a few questions: What\'s slowing execution? Where do decisions bottleneck? What\'s your biggest frustration? We\'ll tell you honestly if we\'re a fit.',
    },
    {
      question: 'Is this an ongoing engagement?',
      answer: 'No. We\'re fixed-scope and fast. Intake, analysis, output, done. If you need ongoing support after that—training, implementation, change management—we can talk about it, but it\'s outside our core offering.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Questions answered clearly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-spacing bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                number={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-spacing bg-harlowe-light">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            Let's talk. A quick conversation will clarify whether this makes sense for you.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer, number }: { question: string; answer: string; number: number }) {
  return (
    <details className="bg-gray-50 p-6 rounded-lg border border-gray-200 group cursor-pointer">
      <summary className="flex items-start gap-4 font-semibold text-gray-900 list-none select-none">
        <span className="text-harlowe-blue font-bold text-lg flex-shrink-0 mt-1">{number}</span>
        <span className="flex-grow">{question}</span>
        <span className="flex-shrink-0 text-harlowe-blue group-open:rotate-180 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
      </summary>
      <div className="mt-4 ml-12 text-gray-600 leading-relaxed">
        {answer}
      </div>
    </details>
  )
}
