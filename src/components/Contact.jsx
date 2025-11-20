import { useState } from 'react'
import { motion } from 'framer-motion'

const formVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

const field = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.target.reset()
      } else {
        const t = await res.text()
        setStatus(`Something went wrong: ${t}`)
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_300px_at_50%_100%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-slate-400 text-center"
        >
          Have a project in mind? Let’s chat.
        </motion.p>

        <motion.form onSubmit={handleSubmit} variants={formVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4">
          <motion.input variants={field} name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <motion.input variants={field} type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <motion.textarea variants={field} name="message" required placeholder="Tell me about your project" rows="5" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <motion.button variants={field} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">Send</motion.button>
          {status && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-300 text-sm">{status}</motion.p>}
        </motion.form>
      </div>
    </section>
  )
}
