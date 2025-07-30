import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4">
      {/* Section Hero */}
      <Hero />

      {/* Autres sections à personnaliser */}
      <section className="py-16">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes Projets
        </motion.h2>
        {/* Ajoute ici la liste de tes projets */}
      </section>
    </main>
    <Footer />
  </div>
);

export default App;