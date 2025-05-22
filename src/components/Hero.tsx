import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { threshold: 0.1 });
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [splineError, setSplineError] = useState(false);

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

  useEffect(() => {
    const removeWatermark = () => {
      // Remove any existing cleanup styles
      document.querySelectorAll('style[data-spline-cleanup]').forEach(el => el.remove());

      // Create new style element with comprehensive rules
      const style = document.createElement('style');
      style.setAttribute('data-spline-cleanup', 'true');
      style.textContent = `
        /* Hide all possible watermark elements */
        spline-viewer::part(watermark),
        spline-viewer::part(logo),
        spline-viewer [data-name="watermark"],
        spline-viewer [data-name="logo"],
        spline-viewer div[style*="position: absolute"][style*="bottom"],
        spline-viewer div[style*="z-index: 999"],
        spline-viewer div[style*="pointer-events: all"],
        spline-viewer div[style*="font-family: Inter"],
        spline-viewer div[style*="font-size: 12px"],
        spline-viewer div[style*="background: rgba"],
        spline-viewer div[style*="backdrop-filter"],
        spline-viewer a[href*="spline"],
        spline-viewer div:has(> a[href*="spline"]) {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
          clip: rect(0 0 0 0) !important;
          clip-path: inset(100%) !important;
          margin: -1px !important;
          padding: 0 !important;
          border: 0 !important;
          transform: scale(0) !important;
          max-width: 0 !important;
          max-height: 0 !important;
          z-index: -9999 !important;
        }
        
        /* Ensure viewer itself doesn't capture pointer events */
        spline-viewer {
          pointer-events: none !important;
        }

        /* Additional safety measures */
        spline-viewer::before,
        spline-viewer::after {
          display: none !important;
          content: none !important;
        }
      `;
      document.head.appendChild(style);

      // Comprehensive list of selectors to match any possible watermark element
      const selectors = [
        '[data-name="watermark"]',
        '[data-name="logo"]',
        'div[style*="position: absolute"][style*="bottom"]',
        'div[style*="z-index: 999"]',
        'div[style*="pointer-events: all"]',
        'div[style*="font-family: Inter"]',
        'div[style*="font-size: 12px"]',
        'div[style*="background: rgba"]',
        'div[style*="backdrop-filter"]',
        'a[href*="spline"]',
        'div:has(> a[href*="spline"])'
      ];

      // Function to aggressively remove elements
      const removeElement = (element: Element) => {
        if (element instanceof HTMLElement) {
          element.style.cssText = `
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            position: absolute !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            clip-path: inset(100%) !important;
            margin: -1px !important;
            padding: 0 !important;
            border: 0 !important;
            transform: scale(0) !important;
            max-width: 0 !important;
            max-height: 0 !important;
            z-index: -9999 !important;
          `;
          element.remove();
        }
      };

      // Remove existing elements
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(removeElement);
      });

      // Create mutation observer with aggressive removal strategy
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Handle added nodes
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              // Check if the element matches any of our selectors
              if (selectors.some(selector => node.matches(selector))) {
                removeElement(node);
              }
              // Also check children of added nodes
              selectors.forEach(selector => {
                node.querySelectorAll(selector).forEach(removeElement);
              });
            }
          });

          // Handle attribute changes that might reveal watermark
          if (mutation.type === 'attributes' && mutation.target instanceof HTMLElement) {
            if (selectors.some(selector => mutation.target.matches(selector))) {
              removeElement(mutation.target);
            }
          }
        });
      });

      // Observe the entire document with all possible mutation types
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
        characterData: true
      });

      return observer;
    };

    // Initial aggressive removal
    const observer = removeWatermark();
    
    // Continuous monitoring at a very short interval
    const interval = setInterval(removeWatermark, 50);
    
    // Additional check for shadow DOM elements
    const shadowCheck = setInterval(() => {
      document.querySelectorAll('*').forEach(element => {
        if (element.shadowRoot) {
          removeWatermark();
        }
      });
    }, 100);

    // Cleanup function
    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearInterval(shadowCheck);
      document.querySelectorAll('style[data-spline-cleanup]').forEach(el => el.remove());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Spline Animation Background */}
      <div className="absolute inset-0 z-0">
        {!splineError ? (
          <div className="w-full h-full">
            <spline-viewer 
              url="https://prod.spline.design/ly30ZHOVIbsTom8U/scene.splinecode"
              loading-anim="true"
              loading-style="dark"
              background="transparent"
              render-settings='{"quality": "ultra", "antialiasing": "ultra", "density": 4, "powerPreference": "high-performance", "clearColor": [0, 0, 0, 0]}'
              className="w-full h-full object-cover"
              style={{
                imageRendering: 'high-quality',
                transformStyle: 'preserve-3d'
              }}
              onError={() => setSplineError(true)}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black"></div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-[1px] z-10"></div>

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