import { useEffect, useRef, useState } from 'react';

export const useScrollDetection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef<number>(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [isScrollUp, setIsScrollUp] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollTop = scrollRef.current.scrollTop;
      if (!isScrollDown && scrollTop > lastScrollTop.current) {
        setIsScrollDown(true);
        setIsScrollUp(false);
      } else if (!isScrollUp && scrollTop < lastScrollTop.current) {
        setIsScrollDown(false);
        setIsScrollUp(true);
      }
      lastScrollTop.current = scrollTop;
    };

    const element = scrollRef.current;
    element?.addEventListener('scroll', handleScroll);
    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef.current?.scrollTop]);

  return { scrollRef, isScrollDown, isScrollUp };
};
