import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useCardsAnimation(containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.cards', {
        y: -128,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.cards',
          start: '-200px center',
          end: '-200px center',
        },
      });

    }, containerRef);


    return () => {
      ctx.revert();
    };
    }, [containerRef]);
}
