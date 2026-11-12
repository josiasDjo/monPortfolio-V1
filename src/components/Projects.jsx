import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
    return (
        <SectionWrapper id="projects">
        <div className="mb-12 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">03 — Projets</span>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Des projets qui résolvent de vrais problèmes.
            </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
        </SectionWrapper>
    )
}