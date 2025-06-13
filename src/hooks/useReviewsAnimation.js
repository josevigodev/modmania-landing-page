import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useReviewsAnimation (containerRef) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.reviews-title', {
      duration: 1,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: '.reviews-title',
        start: 'top bottom',
        end: 'top bottom',
        scrub: 3,
      },
    });
    }, containerRef);

    return () => {
      ctx.revert();
    }
  }, [containerRef])
}