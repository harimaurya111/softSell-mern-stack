import React from 'react';
import { motion } from 'framer-motion';
import { howItWorks } from '../data/content';
import { useTheme } from '../context/ThemeContext';

const HowItWorks = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-6 text-center ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {howItWorks.map((step, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-md max-w-sm mx-auto transition ${
              theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
