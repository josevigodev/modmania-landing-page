import { useRef } from 'react';
import { useMarqueeAnimation } from '../hooks/useMarqueeAnimation';

export function BrandMarquee() {
  const containerRef = useRef(null);
  useMarqueeAnimation(containerRef);

  return (
    <section ref={containerRef} className='relative mt-20 '>
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
