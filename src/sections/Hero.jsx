export function Hero() {
  return (
    <section className='mx-auto max-w-5xl px-3 mt-7 flex flex-col items-center gap-8 md:mt-8'>
      <div id='hero-title-container'>
        <h2
          id='hero-title'
          className='text-4xl font-medium text-center text-pretty text-gradient-blue text-shadow-md text-shadow-gradient-blue-opacity md:text-7xl'
        >
          ELEVATE YOUR GAMING EXPERIENCE
        </h2>
      </div>
      <p
        id='hero-subtitle'
        className='text-l text-pretty text-center text-subtitle md:text-lg'
      >
        Transform your consoles with custom mods and cutting edge designs.
      </p>
      <div
        id='hero-button'
        className='flex gap-5 items-center border-1 border-subtitle rounded-full w-fit p-2'
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
    </section>
  );
}
