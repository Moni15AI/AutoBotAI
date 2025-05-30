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
      title: 'CRM Integration',
      description: 'Seamless integration with your existing Customer Relationship Management systems for unified automation.'
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

  const caseStudies = [
    {
      title: 'Manufacturing Excellence',
      results: 'Our AI-driven predictive maintenance system reduced equipment downtime by 87% and increased production efficiency by 45%. Complete return on investment achieved within 6 months.',
      metrics: ['87% reduced downtime', '45% efficiency increase', '6-month ROI']
    },
    {
      title: 'Customer Service Transformation',
      results: 'Implemented an AI support system that handles 78% of customer inquiries automatically, reducing response time from hours to seconds while maintaining 96% satisfaction rate.',
      metrics: ['78% automation rate', '96% satisfaction', '92% cost reduction']
    },
    {
      title: 'Sales Pipeline Optimization',
      results: 'Our AI lead scoring and nurturing system increased qualified leads by 156% and conversion rates by 43%, while reducing sales cycle length by 67%.',
      metrics: ['156% more leads', '43% higher conversion', '67% faster sales']
    }
  ];

  return (
    <>
      <section 
        ref={featuresRef}
        id="services" 
        className="relative py-20 overflow-hidden bg-[#030014]"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
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
                className={`group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/50 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`${theme.accentBg} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 bg-[#030014]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Who We Are', 'What We Do', 'Our Vision'].map((title, index) => (
              <div 
                key={title}
                className="group p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-12 h-1 ${theme.accentBg} rounded-full mb-6 transition-all duration-500 group-hover:w-24`}></div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
                <p className="text-gray-400">
                  {index === 0 && 'AutoBot AI is a pioneering force in enterprise AI automation, combining deep technical expertise with practical business acumen. Our team of AI specialists and automation experts brings decades of combined experience in transforming business operations.'}
                  {index === 1 && 'We develop and implement cutting-edge AI solutions that automate complex business processes, enhance customer experiences, and drive operational efficiency. Our solutions adapt and scale with your business, ensuring long-term success and competitive advantage.'}
                  {index === 2 && 'We\'re committed to democratizing AI technology, making enterprise-grade automation accessible to businesses of all sizes. Our goal is to lead the AI revolution by delivering practical, results-driven solutions that create measurable business impact.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="relative py-20 bg-[#030014]">
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme.gradientText}`}>
            Real Results, Real Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-12 h-1 ${theme.accentBg} rounded-full mb-6 transition-all duration-500 group-hover:w-24`}></div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.results}</p>
                <div className="space-y-3">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 0.1}s` }}>
                      <div className={`w-2 h-2 rounded-full ${theme.accentBg}`}></div>
                      <span className="text-gray-400">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;