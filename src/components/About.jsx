import SectionWrapper from './SectionWrapper'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-1 md:grid-rows-[1fr_2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent text-orange-700">À propos</span>
          {/* <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Un profil hybride, du code à l'infrastructure.
          </h2> */}
        </div>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{about.intro}</p>
          <p>{about.body}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}