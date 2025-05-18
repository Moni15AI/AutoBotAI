import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { threshold: 0.1 });
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current || !isInView) return;
    
    const text = headlineRef.current.innerText;
    headlineRef.current.innerHTML = '';
    
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = char === ' ' ? 'inline' : 'inline-block';
      span.style.transition = `opacity 0.4s ease, transform 0.4s ease`;
      span.style.transitionDelay = `${i * 0.03}s`;
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
      
      headlineRef.current?.appendChild(span);
    });
  }, [isInView]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Spline Animation Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/JIpKSMrxVp0XShhY/scene.splinecode" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={headlineRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme.gradientText}`}
          >
            Transform Your Business with AI-Powered Automation
          </h1>
          
          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-8 max-w-3xl transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            Automate leads, integrate your CEM, and deploy custom AI agents to accelerate growth and eliminate repetitive tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 transition-opacity duration-1000" style={{ transitionDelay: '0.6s' }}>
            <a 
              href="#contact" 
              className={`${theme.buttonStyles} group flex items-center justify-center gap-2`}
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-full text-white transition duration-300 flex items-center justify-center hover:bg-gray-900/50"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;