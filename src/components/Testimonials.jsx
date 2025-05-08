import React from 'react';
import { testimonials } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <section id='testimonial'
      className={`py-20 px-6 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Customers Say
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`p-6 rounded-xl shadow-xl max-w-md ${
              theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
            }`}
          >
            <p className="italic mb-4 leading-relaxed">“{t.review}”</p>
            <h4 className="font-bold text-lg">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
