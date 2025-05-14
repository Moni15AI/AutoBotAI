import React, { useEffect, useState } from 'react';

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointing, setIsPointing] = useState(false);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsPointing(true);
    };

    const handleMouseUp = () => {
      setIsPointing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Check if we're on a touch device
    if ('ontouchstart' in window) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Check for links and buttons
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx="true">{`
        /* Hide the default cursor when the custom cursor is active */
        body {
          cursor: none;
        }
        
        /* But show default cursor on touch devices */
        @media (hover: none) {
          body {
            cursor: auto;
          }
          
          .custom-cursor,
          .cursor-dot {
            display: none !important;
          }
        }
        
        /* Expand the cursor when hovering over interactive elements */
        body.cursor-hover .cursor-dot {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0.5;
        }
      `}</style>
      
      <div
        className="custom-cursor fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={`cursor-dot bg-white rounded-full transition-all duration-150 `}
          style={{
            height: isPointing ? '15px' : '10px',
            width: isPointing ? '15px' : '10px',
            opacity: 0.7,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
    </>
  );
};

export default MouseTracker;