import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">B2B + Enterprise Platform</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-gray-900">
            Build resilient digital ecosystems for modern enterprises
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            We design, integrate, and scale mission-critical software for global organizations. Secure by design. Cloud-native. Delivered fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Talk to an expert <ArrowRight size={16} />
            </a>
            <a href="#solutions" className="inline-flex items-center rounded-md px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Explore solutions
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-semibold text-gray-900">500+ </div>
              <div className="text-xs uppercase tracking-wide text-gray-600">Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gray-900">99.99%</div>
              <div className="text-xs uppercase tracking-wide text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-gray-900">60+ </div>
              <div className="text-xs uppercase tracking-wide text-gray-600">Enterprise clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
