import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  const bgColor = theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white';
  const iconColor = theme === 'light' ? 'text-yellow-500' : 'text-blue-400';

  return (
    <motion.footer
      className={`py-6 px-4 ${bgColor}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm hover:shadow-md transition"
        >
          {theme === 'light' ? (
            <>
              <Moon className={`w-4 h-4 ${iconColor}`} />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className={`w-4 h-4 ${iconColor}`} />
              Light Mode
            </>
          )}
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
