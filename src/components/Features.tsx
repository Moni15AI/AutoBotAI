import React, { useRef } from 'react';
import { Bot, Cpu, LineChart, MessagesSquare, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const Features = () => {
  const { theme } = useTheme();
  const featuresRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(featuresRef, { threshold: 0.1 });

  const features = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: 'Custom AI Agents',
      description: 'Personalized AI agents designed for your business needs, automating customer interactions and internal processes.'
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'Automated Lead Generation',
      description: 'Intelligent systems that identify, engage, and nurture high-quality leads without manual intervention.'
    },
    {
      icon: <MessagesSquare className="w-10 h-10" />,
      title: 'CEM Integration',
      description: 'Seamless integration with your existing Customer Experience Management systems for unified automation.'
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Process Optimization',
      description: 'Data-driven analysis and AI-powered recommendations to streamline your business operations.'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation of AI solutions with minimal disruption to your existing workflows.'
    }
  ];

  return (
    <section 
      ref={featuresRef}
      id="services" 
      className="relative py-20 overflow-hidden bg-gray-950"
    >
      {/* Background effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme.gradientText} transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            AI-Powered Solutions for Modern Business
          </h2>
          <p className={`text-xl text-gray-400 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            Our suite of cutting-edge AI tools automates your workflows, enhances customer experiences, and drives growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-600 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/5 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`${theme.accentColor} p-3 rounded-lg bg-gray-800 inline-block mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;