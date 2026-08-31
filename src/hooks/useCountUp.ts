import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export function useCountUp(end: number, duration: number = 1000, ref?: RefObject<HTMLElement | null>) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Observa se o elemento entrou na tela
  useEffect(() => {
    if (!ref || !ref.current) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref]);

  // Inicia a animação apenas quando estiver visível
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Animação linear, sem lentidão no final
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return count;
}
