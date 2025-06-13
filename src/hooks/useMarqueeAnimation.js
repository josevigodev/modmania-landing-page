import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useMarqueeAnimation(containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.marquee', {
      x: '-200%',
      scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
    });

    }, containerRef);

    return () => {
      ctx.revert();
    };
    }, [containerRef]);
}