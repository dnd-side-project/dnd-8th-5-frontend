import { entriesIn } from 'lodash';
import { useRef, useEffect, useState, useCallback, RefObject } from 'react';

export const useComponentOnScreen = (refs: RefObject<HTMLDivElement>[]) => {
  const handleScroll = (entries: any[]) => {
    entries.forEach((박스) => {
      if (박스.isIntersecting) {
        박스.target.style.opacity = 1;
        박스.target.style.transform = 'translateZ(0)';
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
