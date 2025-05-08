import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleButton = (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm hover:shadow-md transition bg-white text-gray-700"
    >
      {theme === 'light' ? (
        <>
          <Moon className="w-4 h-4 text-blue-500" />
          Dark Mode
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-yellow-400" />
          Light Mode
        </>
      )}
    </button>
  );

  return (
    <nav className={`h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 ${theme === 'light' ? 'bg-white' : 'bg-black'} text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all`}>
      {/* Logo */}
      <a href="#">
        <img
          className="h-9"
          src="../../public/cropped-credex_new_logo.png"
          alt="SoftSell Logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul className={`md:flex hidden items-center gap-10 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <li><a className="hover:text-gray-500/80 transition" href="#home">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#testimonial">Testimonials</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#contact">Contact</a></li>
      </ul>

      {/* Toggle Theme (Desktop) */}
      <div className="hidden md:inline">{toggleButton}</div>

      {/* Hamburger Icon */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill={theme === 'light' ? '#000' : '#fff'}>
          <path d="M 3 7 A 1 1 0 1 0 3 9 L 27 9 A 1 1 0 1 0 27 7 L 3 7 z M 3 14 A 1 1 0 1 0 3 16 L 27 16 A 1 1 0 1 0 27 14 L 3 14 z M 3 21 A 1 1 0 1 0 3 23 L 27 23 A 1 1 0 1 0 27 21 L 3 21 z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-[70px] left-0 w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-6 md:hidden z-10 shadow-md`}>
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#" className="text-sm">Home</a></li>
            <li><a href="#" className="text-sm">Services</a></li>
            <li><a href="#" className="text-sm">Portfolio</a></li>
            <li><a href="#" className="text-sm">Pricing</a></li>
          </ul>
          <div className="mt-6">{toggleButton}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
