import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/content';
import { useTheme } from '../context/ThemeContext';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: 'spring',
    },
  }),
};

const WhyChooseUs = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-6 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            className="text-center p-6 border rounded-lg shadow-sm"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
