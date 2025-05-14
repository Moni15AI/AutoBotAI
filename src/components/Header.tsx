import React, { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Bot className={`w-8 h-8 ${theme.accentColor} transition-all duration-300 group-hover:scale-110`} />
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AutoBot AI
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {['Services', 'About', 'Process', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className={`${theme.buttonStyles} hover:scale-105 transform transition`}
          >
            Book a Call
          </a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <nav className="flex flex-col gap-6 items-center">
          {['Services', 'About', 'Process', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`${theme.buttonStyles} text-lg`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Book a Call
        </a>
      </div>
    </header>
  );
};

export default Header;