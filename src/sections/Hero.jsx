export function Hero() {
  return (
    <section className='z-10 mx-auto max-w-5xl px-3 mt-7 flex flex-col items-center gap-8 md:mt-10'>
      <div id='hero-title-container'>
        <h2
          id='hero-title'
          className='relative text-5xl font-medium text-center text-pretty text-gradient-blue text-shadow-md text-shadow-gradient-blue-opacity md:text-7xl'
        >
          ELEVATE YOUR GAMING EXPERIENCE
        </h2>
      </div>
      <p
        id='hero-subtitle'
        className=' relative text-l text-pretty text-center text-subtitle md:text-lg'
      >
        Transform your consoles with custom mods and cutting edge designs.
      </p>
      <div
        id='hero-button'
        className='relative flex gap-5 items-center border-1 border-subtitle rounded-full w-fit p-2'
      >
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
        id='hero-img'
        className='max-w-96 z-20'
        src='/public/images/xbox_h_blue_fire.png'
        alt=''
      />
      <h3
        id='phrase-h3'
        className='mt-14 text-center relative text-4xl font-medium md:text-5xl'
      >
        Customize your setup, <br />
        enhance the experience.
      </h3>
      <p className='text-center text-balance relative text-subtitle text-xl md:text-1xl'>
        MODMANIA is not going to let you down.
        <br /> We got the best for you.
      </p>
    </section>
  );
}
