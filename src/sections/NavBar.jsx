import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from '../components/Icons';
import { NavBarLink } from '../components/NavBarLink';
import { useMediaQuery } from '../hooks/useMediaQuery';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const showLinks = useMediaQuery('(min-width: 768px)');
  const navRef = useRef(null);

  useEffect(() => {
    if (showLinks) setOpen(false);

    if (open) {
      document.body.style.overflowY = 'hidden';
      navRef.current.style.animationName = 'none';
      navRef.current.style.top = '0';
    } else if (!open || showLinks) {
      document.body.style.overflowY = 'scroll';
      navRef.current.style.animationName = 'reduce-width';
      navRef.current.style.top = '24px';
    }
  }, [open, showLinks]);

  const handleNavClose = () => {
    window.links.style.animationName = 'slide-right';
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <nav
      ref={navRef}
      id='header_navbar'
      className={`flex z-30 sticky top-6 left-0 right-0 items-center justify-between max-w-6xl p-4 mx-auto ${
        open && 'w-full'
      }`}
    >
      <div className='shrink-1'>
        <h1 className='text-xl'>MODMANIA</h1>
      </div>

      {open || showLinks ? (
        <div
          id='links-container'
          className='absolute h-dvh w-full top-0 left-0 flex z-50 bg-[#0007] backdrop-blur-sm md:backdrop-blur-none md:top-0 md:bottom-0 md:right-0 md:m-auto md:h-fit md:w-fit md:justify-center md:bg-transparent'
        >
          <div onClick={handleNavClose} className='flex-1 md:hidden'></div>
          <div
            id='links'
            className=' h-dvh bg-box-background flex flex-col top-0 right-0 w-72 rounded-tl-xl rounded-bl-xl overflow-hidden z-50 md:bg-transparent md:flex-row md:h-fit md:w-fit md:gap-12'
          >
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
