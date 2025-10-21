import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
    <section className="py-20 text-center">
        <div>
            <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
            Bonjour, je suis Josias Kabambi
            </motion.h2>
            <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            >
            Développeur web  fullstack, je crée des expériences interactives & modernes.
            </motion.p>
        </div>
        <div>
            <div className="overflow-hidden image-hero">
                <img src="/_LUS2255_Original.png" alt="Josias"  className="w-full h-auto"/>
            </div>
        </div>

    </section>
);

export default Hero;