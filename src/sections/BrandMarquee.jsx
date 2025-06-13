import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function BrandMarquee() {
  useEffect(() => {
    gsap.to('.marquee', {
      x: '-200%',
      scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3,
      },
    });
  }, []);

  return (
    <section className='relative mt-20 '>
      <div className='marquee flex items-center gap-2'>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
        <h3 className='text-9xl font-extrabold text-[#94a3b880]'>MODMANIA</h3>
      </div>
    </section>
  );
}
