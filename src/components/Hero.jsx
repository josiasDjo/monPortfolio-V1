import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Download } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(128,128,128,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/50 px-4 py-1.5 text-xs font-medium backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponible pour missions freelance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              {personal.name}
              <span className="block text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-display text-xl font-semibold text-neutral-700 md:text-2xl dark:text-neutral-300"
            >
              {personal.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-lg text-base text-neutral-600 dark:text-neutral-400"
            >
              {personal.pitch}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-700 hover:bg-orange-500 hover:shadow-lg hover:shadow-accent/20 active:scale-95"
              >
                Voir mes projets
              </a>
              {/* <a
                href={personal.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-accent hover:text-accent dark:border-neutral-700"
              >
                <Download size={16} /> Télécharger mon CV
              </a> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center gap-2 text-sm text-neutral-500"
            >
              <MapPin size={14} /> {personal.location}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto hidden md:block"
          >
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30 border-orange-700" />
              <div className="absolute inset-6 rounded-full border border-neutral-200 dark:border-neutral-800" />
              <div className="absolute inset-10 overflow-hidden rounded-full bg-gradient-to-br from-accent/20 to-accent/5">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-neutral-500 md:flex"
        >
          <span>Défiler</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}