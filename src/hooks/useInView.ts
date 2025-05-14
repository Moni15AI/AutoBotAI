import { useEffect, useState, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useInView = (
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean => {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0, rootMargin = '0px', once = false } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView && once && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold, rootMargin, once]);

  return isInView;
};