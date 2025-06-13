import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useFooterAnimation(containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.footer', {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: '.footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 3,
      },
    });

    }, containerRef);

    return () => {
      ctx.revert();
    };
    }, [containerRef]);
}