import React from 'react';
import { Bot, MessageSquare, Database, ChevronRight, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-lg font-bold tracking-wider">AUTOBOT.AI</span>
          </div>
          <button className="px-4 py-2 border border-white/20 rounded hover:bg-white/10 transition-all duration-300">
            Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_80%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_50%,rgba(0,0,0,0.8))]"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <Bot className="w-16 h-16 mx-auto mb-8 opacity-50" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-effect tracking-tighter">
              NEXT GENERATION
              <br />
              AI AUTOMATION
            </h1>
            <div className="h-16 overflow-hidden my-8">
              <div className="animate-text-slide">
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; Intelligent Chat Agents_</p>
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; Advanced Automation_</p>
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; CRM Integration_</p>
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; 24/7 Operation_</p>
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; Real-time Analytics_</p>
                <p className="text-xl h-16 flex items-center justify-center text-white/70">&gt; Seamless Deployment_</p>
              </div>
            </div>
            <button className="group border border-white/20 bg-white/5 text-white px-8 py-4 rounded-none text-lg font-medium hover:bg-white hover:text-black transition-all duration-500">
              INITIALIZE SYSTEM
              <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Chat & Phone AI */}
            <div className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="mb-6">
                <MessageSquare className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">COMMUNICATION.AI</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Intelligent agents providing human-like interactions through natural language processing.
              </p>
            </div>

            {/* Automation Solutions */}
            <div className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="mb-6">
                <Bot className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">SYSTEM.AUTOMATE</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Advanced automation protocols for streamlined business operations and workflow optimization.
              </p>
            </div>

            {/* CRM Integration */}
            <div className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
              <div className="mb-6">
                <Database className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">DATA.SYNC</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Seamless integration with existing CRM infrastructure for enhanced data management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter">READY TO UPGRADE?</h2>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto">
            Join the next evolution of business automation. Deploy AI-powered solutions that scale with your enterprise.
          </p>
          <button className="group border border-white/20 bg-white/5 text-white px-8 py-4 rounded-none text-lg font-medium hover:bg-white hover:text-black transition-all duration-500">
            REQUEST ACCESS
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;