import { Shield, Cloud, Workflow, Server } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Zero-trust architectures, IAM, SOC2/ISO27001 programs, and continuous compliance tooling built-in.'
  },
  {
    icon: Cloud,
    title: 'Cloud & Platform',
    desc: 'Kubernetes, serverless, and data platforms engineered for scale with observability by default.'
  },
  {
    icon: Workflow,
    title: 'Integration & Automation',
    desc: 'Event-driven integrations, APIs, and workflow automation to connect your enterprise stack.'
  },
  {
    icon: Server,
    title: 'Data & AI',
    desc: 'Modern data pipelines, warehousing, governance, and responsible AI enablement for teams.'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Solutions built for scale</h2>
          <p className="mt-3 text-gray-700">Composable services that meet rigorous enterprise requirements across security, performance, and governance.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200/80 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-cyan-700 hover:text-cyan-800">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
