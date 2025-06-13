import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  useEffect(() => {
    gsap.to('.footer', {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: '.footer-section',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 3,
      },
    });
  }, []);
  return (
    <footer className='h-90 bg-[#5554] flex items-center justify-center footer-section'>
      <div className='px-3.5 opacity-0 scale-75 flex flex-col flex-1 max-w-5xl footer'>
        <h5 className='pb-6 text-7xl font-bold'>MODMANIA.</h5>
        <p className='border-t-2 pt-6 border-subtitle'>
          Copyright © 2025 - MODMANIA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
