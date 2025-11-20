import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const chip = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-950">
      {/* Background gradient accents */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_500px_at_80%_110%,rgba(99,102,241,0.18),transparent)]" />
      </div>

      {/* Spline 3D scene */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid lg:grid-cols-2 gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="py-28 lg:py-40"
        >
          <motion.div
            variants={chip}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Creative Developer building modern, interactive experiences
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl"
          >
            I craft engaging web apps, delightful interactions, and performant products with a focus on design and details.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <motion.a
              href="#work"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(34, 211, 238, 0.28)' }}
              whileTap={{ scale: 0.98 }}
            >
              See Work
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={container}
            className="mt-10 flex items-center gap-6 text-slate-300"
          >
            {['React', 'Framer Motion', 'Spline', 'Tailwind'].map((t) => (
              <motion.span key={t} variants={chip} className="text-sm">{t}</motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
