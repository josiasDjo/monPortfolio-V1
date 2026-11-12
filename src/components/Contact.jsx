import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import { personal } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  const socials = [
    { icon: Github, href: personal.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personal.socials.twitter, label: 'Twitter / X' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ]

  const inputClass =
    'w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent dark:border-neutral-700'

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col md:grid-rows-3">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent text-orange-700">Contact</span>
          {/* <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Travaillons ensemble.</h2>
          <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
            Un projet en tête ? Une mission freelance ? Écris-moi, je réponds sous 24h.
          </p> */}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-5 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-[#141414]"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium">Nom</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Ton nom"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="ton@email.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="Parle-moi de ton projet..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20 active:scale-95"
          >
            Envoyer <Send size={16} />
          </button>
        </motion.form>
          <div className="mt-8 flex gap-3 items-center justify-center">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-neutral-700"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
      </div>
    </SectionWrapper>
  )
}