import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useFaqsAnimation(containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.faq', {
      x: 0,
      opacity: 1,
      duration: .5,
      scrollTrigger: {
        trigger: '.faq-title',
        start: 'top center',
        end: 'top center',
      },
    });

    }, containerRef);

    return () => {
      ctx.revert();
    };
    }, [containerRef]);
}