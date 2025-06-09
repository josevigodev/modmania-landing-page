import { ArrowRightIcon } from './Icons';

export function NavBarLink({ title }) {
  return (
    <a
      className='group flex items-center justify-between px-5 py-8 transition duration-200 hover:bg-[#fff5] md:hover:bg-transparent md:p-0'
      href='#'
    >
      <span className='text-xl font-medium md:font-normal md:text-[17px] md:text-subtitle transition duration-300 md:hover:text-[#fff]'>
        {title}
      </span>
      <span className='transition group-hover:transform group-hover:-translate-x-1/3 md:hidden'>
        <ArrowRightIcon />
      </span>
    </a>
  );
}
