import { useState } from 'react'

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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Contact</h2>
        <p className="mt-3 text-slate-400 text-center">Have a project in mind? Let’s chat.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <input type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <textarea name="message" required placeholder="Tell me about your project" rows="5" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <button className="inline-flex justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition">Send</button>
          {status && <p className="text-slate-300 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
