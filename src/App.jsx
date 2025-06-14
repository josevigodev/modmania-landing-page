import { useEffect } from 'react';
import './App.css';
import { Hero } from './sections/Hero';
import { NavBar } from './sections/NavBar';
import { CardsSection } from './sections/CardsSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { FaqSection } from './sections/FaqSection';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/all';
import { BrandMarquee } from './sections/BrandMarquee';
import { Footer } from './sections/Footer';
import background from '/images/background.png';
gsap.registerPlugin(ScrollSmoother);

function useSmothScroll() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
      smoothTouch: 'true',
    });
  }, []);
}

function App() {
  useSmothScroll();

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-dvh blur-3xl brightness-50 pointer-events-none z-0'>
        <img
          className='object-cover object-center w-full h-full'
          src={background}
          alt='background'
        />
      </div>
      <NavBar />
      <main id='smooth-wrapper' className='overflow-x-hidden'>
        <div id='smooth-content'>
          <Hero></Hero>
          <CardsSection />
          <ReviewsSection />
          <FaqSection />
          <BrandMarquee />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
