import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 dark:border-neutral-800 dark:bg-[#141414]"
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
          aria-label={`Voir ${project.title}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent">
          {project.type === 'web' ? <Globe size={12} /> : <Github size={12} />}
          {project.type === 'web' ? 'Développement Web' : 'Réseau & Infra'}
        </div>
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-neutral-500">{project.subtitle}</p>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
        >
          Voir le projet <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  )
}