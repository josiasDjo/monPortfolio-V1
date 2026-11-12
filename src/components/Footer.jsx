import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} {personal.name}. Tous droits réservés.</p>
        <p>Construit avec React, Tailwind CSS & Motion.</p>
      </div>
    </footer>
  )
}