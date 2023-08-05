import React, { useEffect } from 'react';

const useInputScroll = (ref: React.RefObject<HTMLInputElement>) => {
  useEffect(() => {
    window.addEventListener('touchmove', handleScroll);
    return () => {
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const handleScroll = (e: TouchEvent) => {
    if (
      document.activeElement == ref.current ||
      ref.current?.contains(e.target as Node)
    ) {
      (document.activeElement as HTMLElement).blur();
    }
  };
};

export default useInputScroll;
