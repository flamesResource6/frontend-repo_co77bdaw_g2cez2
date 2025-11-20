import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_300px_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <motion.div className="lg:col-span-2" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white">About</motion.h2>
            <motion.p variants={item} className="mt-5 text-slate-300 leading-relaxed">
              I’m a creative developer who blends design sensibilities with solid engineering. I love building fast, accessible
              interfaces, exploring motion as feedback, and crafting products that feel delightful and efficient.
            </motion.p>
            <motion.p variants={item} className="mt-4 text-slate-300 leading-relaxed">
              My toolkit includes React, TypeScript, Framer Motion, and 3D scenes when the story calls for it.
              I collaborate closely with designers and PMs and care deeply about polish.
            </motion.p>
          </motion.div>
          <motion.div className="bg-white/5 border border-white/10 rounded-2xl p-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h3 variants={item} className="text-white font-semibold">Capabilities</motion.h3>
            <motion.ul className="mt-4 space-y-2 text-slate-300 text-sm">
              {['Frontend Engineering', 'Interaction Design', 'Design Systems', 'Performance & Accessibility', '3D & Motion'].map((c) => (
                <motion.li key={c} variants={item}>• {c}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
