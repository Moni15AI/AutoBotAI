import React, { useRef, useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const ContactSection = () => {
  const { theme } = useTheme();
  const contactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contactRef, { threshold: 0.1 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      // This would be a real API call in production
      setFormState(prev => ({
        ...prev,
        submitting: false,
        submitted: true,
        name: '',
        email: '',
        company: '',
        message: ''
      }));
    }, 1500);
  };

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className="relative py-20 overflow-hidden bg-gray-950"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[150px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[150px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme.gradientText}`}>
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Schedule a strategy call with our AI automation experts and discover how our tailored solutions can drive efficiency and growth.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  "Comprehensive business assessment",
                  "Custom AI automation roadmap",
                  "ROI projections and implementation timeline",
                  "No-obligation consultation"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3"
                    style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className={`p-1 rounded-full ${theme.accentBg}`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-3 h-3 rounded-full ${theme.accentBg} animate-pulse`}></div>
                  <p className="font-medium text-white">Our experts are currently available</p>
                </div>
                <p className="text-gray-400">
                  Average response time: <span className="text-white">4 hours</span>
                </p>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              {formState.submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
                  <div className={`w-20 h-20 ${theme.accentBg} rounded-full flex items-center justify-center mb-6`}>
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-400 mb-8">
                    We've received your message. Our team will reach out to you shortly to schedule your strategy call.
                  </p>
                  <button 
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                    className={`${theme.buttonStyles}`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="p-8 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-6">Book Your Strategy Call</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-400 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-400 mb-2">How can we help?</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition"
                        placeholder="Tell us a bit about your automation needs..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formState.submitting}
                      className={`${theme.buttonStyles} w-full flex items-center justify-center gap-2 py-3 disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                      {formState.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Your Call</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;