import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
        onClick={toggleTheme}
        aria-label="Changer de thème"
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 transition-colors hover:border-accent dark:border-neutral-700"
        >
        <AnimatePresence mode="wait" initial={false}>
            <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
        </AnimatePresence>
        </button>
    )
}