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
          ? 'bg-[#030014]/80 backdrop-blur-md py-3 border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group relative">
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
          <Bot className={`w-8 h-8 ${theme.accentColor} relative transition-all duration-300 group-hover:scale-110`} />
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative">
            AutoBot AI
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {['Services', 'About', 'Case Studies', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:via-blue-500 after:to-purple-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className={`${theme.buttonStyles} hover:scale-105 transform transition`}
          >
            <span className="relative z-10">Book a Call</span>
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
        className={`fixed inset-0 bg-[#030014]/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <nav className="flex flex-col gap-6 items-center">
          {['Services', 'About', 'Case Studies', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
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