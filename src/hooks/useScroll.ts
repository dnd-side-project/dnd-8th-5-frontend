import { useRef, useState } from 'react';

export const useScroll = () => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [offsetY, setOffsetY] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const track = trackRef.current as HTMLDivElement;
    const thumb = thumbRef.current as HTMLDivElement;

    if (!thumb || !track) return;

    const shiftY = e.clientY - thumb.getBoundingClientRect().top;

    const onMouseMove = (e: MouseEvent) => {
      const newTop = e.clientY - shiftY - track.getBoundingClientRect().top;
      const bottomEdge = track.offsetHeight - thumb.offsetHeight;

      const updatedOffsetY = Math.min(Math.max(0, newTop), bottomEdge);
      setOffsetY(updatedOffsetY);
    };

    const onMouseUp = () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const track = trackRef.current as HTMLDivElement;
    const thumb = thumbRef.current as HTMLDivElement;

    if (!thumb || !track) return;

    const shiftY = e.touches[0].clientY - thumb.getBoundingClientRect().top;

    const onTouchMove = (e: TouchEvent) => {
      const newTop =
        e.touches[0].clientY - shiftY - track.getBoundingClientRect().top;
      const bottomEdge = track.offsetHeight - thumb.offsetHeight;

      const updatedOffsetY = Math.min(Math.max(0, newTop), bottomEdge);
      setOffsetY(updatedOffsetY);
    };

    const onTouchEnd = () => {
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
    };

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return {
    contentWrapperRef,
    contentRef,
    trackRef,
    thumbRef,
    offsetY,
    handleMouseDown,
    handleTouchStart,
    handleDragStart,
  };
};
