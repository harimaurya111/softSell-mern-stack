import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Resell Unused Software Licenses with Ease
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Turn your unused or surplus software licenses into instant cash. Fast, secure, and hassle-free.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Sell My Licenses
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
