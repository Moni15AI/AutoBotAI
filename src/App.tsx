import React, { useState } from 'react';
import { Bot, MessageSquare, Database, ChevronRight, Terminal, Calendar, X } from 'lucide-react';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-lg font-light tracking-[0.3em]">AUTOBOT.AI</span>
          </div>
          <div className="flex space-x-8 text-sm tracking-wider font-light">
            <button className="hover:text-purple-400 transition-colors">ABOUT</button>
            <button className="hover:text-purple-400 transition-colors">DOCS</button>
            <button 
              onClick={() => setShowBooking(true)}
              className="px-4 py-2 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              CONNECT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center grid-background">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50"></div>
        
        {/* Animated Circle */}
        <div className="absolute">
          <div className="glow-circle"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <div className="text-center">
            <h1 className="pixel-text text-6xl md:text-7xl font-thin mb-8 tracking-[0.2em] glitch-effect">
              AUTOBOT
              <span className="text-purple-400">.AI</span>
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wider text-white/70 mb-12">
              NEXT GENERATION AUTOMATION PROTOCOL
            </p>
            
            <div className="flex justify-center space-x-24 my-16">
              <div className="text-center">
                <div className="text-3xl font-light mb-2 glow-effect">2.5M+</div>
                <div className="text-sm text-white/50 tracking-wider">AUTOMATIONS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2 glow-effect">99.9%</div>
                <div className="text-sm text-white/50 tracking-wider">UPTIME</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-2 glow-effect">0.001s</div>
                <div className="text-sm text-white/50 tracking-wider">LATENCY</div>
              </div>
            </div>

            <button 
              onClick={() => setShowBooking(true)}
              className="group px-8 py-4 border border-white/10 hover:border-purple-400/50 transition-all duration-500 tracking-wider"
            >
              INITIALIZE SYSTEM
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Chat & Phone AI */}
            <div className="group p-8 border border-white/5 hover:border-purple-400/30 transition-all duration-500 bg-black/50 backdrop-blur-sm">
              <MessageSquare className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-light mb-4 tracking-wider">COMMUNICATION.AI</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                Intelligent agents providing human-like interactions through natural language processing.
              </p>
            </div>

            {/* Automation Solutions */}
            <div className="group p-8 border border-white/5 hover:border-purple-400/30 transition-all duration-500 bg-black/50 backdrop-blur-sm">
              <Bot className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-light mb-4 tracking-wider">SYSTEM.AUTOMATE</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                Advanced automation protocols for streamlined business operations and workflow optimization.
              </p>
            </div>

            {/* CRM Integration */}
            <div className="group p-8 border border-white/5 hover:border-purple-400/30 transition-all duration-500 bg-black/50 backdrop-blur-sm">
              <Database className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-light mb-4 tracking-wider">DATA.SYNC</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">
                Seamless integration with existing CRM infrastructure for enhanced data management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="bg-black/80 border border-white/10 p-8 max-w-lg w-full relative">
            <button 
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4 mb-6">
              <Calendar className="w-8 h-8" />
              <h3 className="text-2xl font-light tracking-wider">INITIALIZE CONNECTION</h3>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-light text-white/70 mb-2 tracking-wider">IDENTIFIER</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-purple-400/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-white/70 mb-2 tracking-wider">CONTACT</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-purple-400/50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-white/70 mb-2 tracking-wider">ORGANIZATION</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-purple-400/50"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-white/70 mb-2 tracking-wider">REQUIREMENTS</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-purple-400/50 h-32"
                  placeholder="Describe your automation needs"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full border border-white/10 hover:border-purple-400/50 py-3 font-light tracking-wider transition-all duration-300"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;