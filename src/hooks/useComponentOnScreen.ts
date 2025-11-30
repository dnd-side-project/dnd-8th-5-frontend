import { useEffect, RefObject } from 'react';

export const useComponentOnScreen = (refs: RefObject<HTMLDivElement>[]) => {
  const handleScroll = (entries: any[]) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        if (item.target.querySelector('.chat') !== null) {
          item.target.querySelector('.title').style.transform = 'translateZ(0)';
          item.target.querySelector('.chat').style.transform = 'translateZ(0)';
          item.target.querySelector('.section').style.transform =
            'translateZ(0)';
          item.target.querySelector('.section').style.opacity = 1;
        }

        item.target.style.opacity = 1;
        item.target.style.transform = 'translateZ(0)';
      }
    });
  };

  const observer = new IntersectionObserver(handleScroll, {
    // threshold: 0.1,
    rootMargin: '0px 0px -20% 0px',
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
