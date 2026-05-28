// components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary"
      >
        Full‑Stack Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
      >
        Building fast, scalable web apps with React, Django, and modern databases.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Contact Me
      </motion.a>
    </div>
  );
}
