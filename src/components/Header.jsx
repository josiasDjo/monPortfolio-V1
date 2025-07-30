import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
    <motion.header
        className="bg-white shadow-md py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
        <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>
        <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Accueil</a></li>
            <li><a href="#projects" className="hover:underline">Projets</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        </nav>
    </motion.header>
);

export default Header;