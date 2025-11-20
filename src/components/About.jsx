import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_300px_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              I’m a creative developer who blends design sensibilities with solid engineering. I love building fast, accessible
              interfaces, exploring motion as feedback, and crafting products that feel delightful and efficient.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              My toolkit includes React, TypeScript, Framer Motion, and 3D scenes when the story calls for it.
              I collaborate closely with designers and PMs and care deeply about polish.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Capabilities</h3>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>• Frontend Engineering</li>
              <li>• Interaction Design</li>
              <li>• Design Systems</li>
              <li>• Performance & Accessibility</li>
              <li>• 3D & Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
