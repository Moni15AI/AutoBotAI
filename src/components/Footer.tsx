import React from 'react';
import { Bot, Mail, Map, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Bot className={`w-7 h-7 ${theme.accentColor}`} />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                AutoBot AI
              </span>
            </div>
            <p className="text-gray-400 mb-5">
              Transforming businesses through intelligent automation and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'About Us', 'Case Studies', 'Testimonials', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Map className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Way<br />
                  Tech District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:info@autobotai.com" className="text-gray-400 hover:text-white transition-colors">
                  info@autobotai.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest AI automation insights straight to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border-gray-700 text-white focus:outline-none"
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-lg ${theme.accentBg} text-white`}
              >
                <span className="sr-only">Subscribe</span>
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-500">
            © {currentYear} AutoBot AI. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-500 hover:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;