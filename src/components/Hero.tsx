import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { threshold: 0.1 });
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Split text animation
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMmgtMnYtMmgydjJ6bTItMmgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yek0zNCAyMGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTQtOGgtMnYyaDJ2LTJ6bTAgNGgtMnYtMmgydjJ6bTItNGgtMnYyaDJ2LTJ6bS00LTRoMnYyaC0ydi0yek0yNiAyMGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bS00IDRoMnYyaC0ydi0yek0yMiAxNmgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bS00IDRoMnYyaC0ydi0yek0yMiAyNGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bS04IDRoMnYyaC0ydi0yek0yMiAzMmgydjJoLTJ2LTJ6bTggMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>

      <div className="container mx-auto px-6 relative z-10">
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

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '95%', label: 'Lead Generation ROI' },
            { value: '3x', label: 'Workflow Efficiency' },
            { value: '24/7', label: 'AI Agent Availability' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105 hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className={`text-4xl font-bold mb-2 ${theme.accentColor}`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;