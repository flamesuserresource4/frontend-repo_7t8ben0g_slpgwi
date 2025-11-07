export default function CaseStudies() {
  const cases = [
    {
      logo: 'Global Logistics Co.',
      title: 'Unified data platform across 28 markets',
      result: '12x faster reporting • $3.1M saved annually',
    },
    {
      logo: 'FinTech Leader',
      title: 'Zero-trust migration with full IAM overhaul',
      result: '97% risk reduction • Passed SOC2 Type II in 60 days',
    },
    {
      logo: 'Healthcare Network',
      title: 'Real-time integration layer for 120+ apps',
      result: '99.99% uptime • 65% fewer incidents',
    },
  ];

  return (
    <section id="cases" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Proven outcomes</h2>
          <p className="mt-3 text-gray-700">We partner with enterprises across industries to drive measurable impact from day one.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm font-medium text-gray-500">{c.logo}</div>
              <div className="mt-2 text-lg font-medium text-gray-900">{c.title}</div>
              <div className="mt-2 text-sm text-gray-600">{c.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
