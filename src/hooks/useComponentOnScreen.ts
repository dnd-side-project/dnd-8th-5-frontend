import { useEffect, RefObject } from 'react';

export const useComponentOnScreen = (refs: RefObject<HTMLDivElement>[]) => {
  const handleScroll = (entries: any[]) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.opacity = 1;
        item.target.style.transform = 'translateZ(0)';
      }
    });
  };

  const observer = new IntersectionObserver(handleScroll, {
    threshold: 0.2,
  });

  useEffect(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer && observer.disconnect();
  }, []);
};
