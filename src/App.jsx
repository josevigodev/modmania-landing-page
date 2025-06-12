import { useEffect } from 'react';
import './App.css';
import { Hero } from './sections/Hero';
import { NavBar } from './sections/NavBar';
import { CardsSection } from './sections/CardsSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { FaqSection } from './sections/FaqSection';

function useSmothScroll() {
  useEffect(() => {}, []);
}

function App() {
  useSmothScroll();

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-dvh blur-3xl brightness-40 pointer-events-none z-0'>
        <img
          className='object-cover object-center w-full h-full'
          src='/images/background.png'
          alt=''
        />
      </div>
      <NavBar />
      <main>
        <Hero></Hero>
        <CardsSection />
        <ReviewsSection />
        <FaqSection />
        <section className='h-dvh mt-36'></section>
      </main>
    </>
  );
}

export default App;
