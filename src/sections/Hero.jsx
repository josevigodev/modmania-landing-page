import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  useEffect(() => {
    gsap.to('.hero-title', {
      y: -50,
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
  }, []);

  return (
    <section className='z-10 mx-auto max-w-5xl px-3 flex flex-col items-center gap-8 md:mt-10'>
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
        src='/public/images/xbox_h_blue_fire.png'
        alt=''
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
