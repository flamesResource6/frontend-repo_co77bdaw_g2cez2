import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-950">
      {/* Background gradient accents */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_500px_at_80%_110%,rgba(99,102,241,0.18),transparent)]" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid lg:grid-cols-2 gap-12">
        <div className="py-28 lg:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Creative Developer building modern, interactive experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl"
          >
            I craft engaging web apps, delightful interactions, and performant products with a focus on design and details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#work" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition">See Work</a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">Get in touch</a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
