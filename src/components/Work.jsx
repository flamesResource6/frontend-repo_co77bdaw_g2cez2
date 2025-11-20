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

export default function Work() {
  return (
    <section id="work" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_300px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_400px_at_90%_10%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-3 text-slate-400">A mix of client projects, experiments, and products.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} target="_blank" className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition"><ExternalLink size={16}/> Live</a>
                  <a href={p.code} target="_blank" className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition"><Github size={16}/> Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
