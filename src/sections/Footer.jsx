import { useRef } from 'react';
import { useFooterAnimation } from '../hooks/useFooterAnimation';

export function Footer() {
  const containerRef = useRef(null);
  useFooterAnimation(containerRef);

  return (
    <footer
      ref={containerRef}
      className='h-90 bg-[#5554] flex items-center justify-center'
    >
      <div className='px-3.5 opacity-0 scale-55 flex flex-col flex-1 max-w-5xl footer'>
        <h5 className='pb-6 text-7xl font-bold'>MODMANIA.</h5>
        <p className='border-t-2 pt-6 border-subtitle'>
          Copyright © 2025 - MODMANIA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
