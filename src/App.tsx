import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MouseTracker from './components/MouseTracker';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
        <MouseTracker />
        <Header />
        <main>
          <Hero />
          <Features />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;