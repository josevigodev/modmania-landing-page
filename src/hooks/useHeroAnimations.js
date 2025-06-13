import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimations(containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.hero-title', {
        y: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-title',
          start: '300px center',
          end: '500px center',
          scrub: 3,
        },
      });

      gsap.to('.hero-subtitle', {
        scale: 0,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-subtitle',
          start: '200 center',
          end: '500px center',
          scrub: 3,
        },
      });

      gsap.to('.hero-button', {
        y: 100,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-button',
          start: '100px center',
          end: '300px center',
          scrub: 3,
        },
      });

      gsap.to('.hero-image', {
        y: -200,
        scale: 1.5,
        duration: 1,
        scrollTrigger: {
          trigger: '.hero-image',
          start: '100px center',
          end: '200px center',
          scrub: 3,
        },
      });

      gsap.to('.phrase-h3', {
        y: -100,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: '.phrase-h3',
          start: '-200px center',
          end: '-200px center',
          scrub: 1,
        },
      });

      gsap.to('.phrase-p', {
        y: -100,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: '.phrase-p',
          start: '-200px center',
          end: '-200px center',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [containerRef]);
}