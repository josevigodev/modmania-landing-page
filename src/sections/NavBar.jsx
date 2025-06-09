import { useState } from 'react';
import { MenuIcon } from '../components/Icons';
import { NavBarLink } from '../components/NavBarLink';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const showLinks = useMediaQuery('(min-width: 768px)');

  return (
    <nav
      id='header_navbar'
      className={`flex z-30 sticky top-0 left-0 right-0 items-center justify-between max-w-6xl p-4 mx-auto ${
        open && 'w-full'
      }`}
    >
      <div className='shrink-1'>
        <h1 className='text-xl'>MODMANIA</h1>
      </div>

      {open || showLinks ? (
        <div className='absolute h-dvh w-full top-0 left-0 flex z-50 bg-[#0007] backdrop-blur-xs md:backdrop-blur-none md:top-0 md:bottom-0 md:right-0 md:m-auto md:h-fit md:w-fit md:justify-center md:bg-transparent'>
          <div
            onClick={() => setOpen(false)}
            className='flex-1 md:hidden'
          ></div>
          <div className=' h-dvh bg-box-background flex flex-col top-0 right-0 w-70 rounded-tl-xl rounded-bl-xl overflow-hidden z-50 md:bg-transparent md:flex-row md:h-fit md:w-fit md:gap-12'>
            <NavBarLink title='Home' />
            <NavBarLink title='Pricing' />
            <NavBarLink title='Store' />
            <NavBarLink title='Lab' />
          </div>
        </div>
      ) : null}

      <div>
        <button
          onClick={() => setOpen(true)}
          aria-label='menu'
          className='cursor-pointer flex content-center md:hidden'
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}
