export default function Footer() {
  return (
    <footer id="about" className="bg-white border-t border-gray-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
            <span className="font-semibold tracking-tight text-gray-900">Aurora Enterprises</span>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-md">
            We help global organizations ship reliable software at enterprise scale. Strategy, design, engineering, and operations under one roof.
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Aurora Enterprises. All rights reserved.</div>
          <div className="mt-3 text-sm text-gray-500">Privacy • Terms • Security</div>
        </div>
      </div>
    </footer>
  );
}
