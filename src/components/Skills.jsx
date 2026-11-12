import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12 max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">02 — Compétences</span>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">Ce que je sais faire.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 dark:border-neutral-800 dark:bg-[#141414]"
          >
            <h3 className="mb-4 font-display text-lg font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}