import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    desc: 'A playful, immersive portfolio powered by Spline and React. Smooth animations and thoughtful interactions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    live: 'https://example.com',
    code: '#',
    image: 'https://images.unsplash.com/photo-1605109602653-40d6908bc40d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmFjdGl2ZSUyMDNEJTIwUG9ydGZvbGlvfGVufDB8MHx8fDE3NjM2NzQ5MDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Design System Playground',
    desc: 'Component library with tokens, theming, and accessibility baked in.',
    tags: ['Design System', 'Storybook', 'Accessibility'],
    live: 'https://example.com',
    code: '#',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Realtime Collab Tool',
    desc: 'Lightweight collaboration app with presence, cursors and optimistic UI.',
    tags: ['Next.js', 'WebSockets', 'MongoDB'],
    live: 'https://example.com',
    code: '#',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  }
]

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
}

export default function Work() {
  return (
    <section id="work" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_300px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_400px_at_90%_10%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-slate-400"
          >
            A mix of client projects, experiments, and products.
          </motion.p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-5">
                <motion.h3 className="text-lg font-semibold text-white">{p.title}</motion.h3>
                <motion.p className="mt-2 text-slate-300 text-sm">{p.desc}</motion.p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <motion.span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10"
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition"><ExternalLink size={16}/> Live</a>
                  <a href={p.code} target="_blank" className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition"><Github size={16}/> Code</a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
