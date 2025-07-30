import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
    <section className="py-20 text-center">
        <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        >
        Bonjour, je suis [Votre Nom]
        </motion.h2>
        <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        >
        Développeur web spécialisé en React.js, je crée des expériences interactives & modernes.
        </motion.p>
    </section>
);

export default Hero;