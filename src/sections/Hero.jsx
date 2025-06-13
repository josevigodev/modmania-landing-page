import { useRef } from 'react';
import { useHeroAnimations } from '../hooks/useHeroAnimations';
import controllerImg from '/modmania-landing-page/images/xbox_h_blue_fire.png';

export function Hero() {
  const containerRef = useRef(null);
  useHeroAnimations(containerRef);

  return (
    <section
      ref={containerRef}
      className='z-10 mx-auto max-w-5xl px-3 flex flex-col items-center gap-8 md:mt-10'
    >
      <div>
        <h2
          id='hero-title'
          className='relative text-5xl mt-30 font-medium text-center text-pretty text-gradient-blue text-shadow-md text-shadow-gradient-blue-opacity md:mt-20 md:text-7xl hero-title'
        >
          ELEVATE YOUR GAMING EXPERIENCE
        </h2>
      </div>
      <p className=' relative text-l text-pretty text-center text-subtitle md:text-lg hero-subtitle'>
        Transform your consoles with custom mods and cutting edge designs.
      </p>
      <div className='relative flex gap-5 items-center border-1 border-subtitle rounded-full w-fit p-2 hero-button'>
        <span className='ml-2 text-subtitle'>
          <p>See the magic</p>
        </span>
        <span>
          <button className='border-2 cursor-pointer border-gradient-blue rounded-full py-2 px-4 transition duration-400 hover:bg-[#fff5]'>
            Get Started
          </button>
        </span>
      </div>
      <img
        className='max-w-96 z-20 hero-image'
        src={controllerImg}
        alt='blue fire xbox controller'
      />
      <h3 className='mt-14 text-center relative text-4xl font-medium md:text-5xl phrase-h3 opacity-0'>
        Customize your setup, <br />
        enhance the experience.
      </h3>
      <p className='text-center text-balance relative text-subtitle text-xl opacity-0 md:text-1xl phrase-p'>
        MODMANIA is not going to let you down.
        <br /> We got the best for you.
      </p>
    </section>
  );
}
