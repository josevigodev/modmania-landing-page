import { useEffect } from 'react';
import './App.css';
import { Hero } from './sections/Hero';
import { NavBar } from './sections/NavBar';

function useSmothScroll() {
  useEffect(() => {}, []);
}

function App() {
  useSmothScroll();

  return (
    <>
      <NavBar />
      <main>
        <Hero></Hero>
        <section className='h-dvh'></section>
      </main>
    </>
  );
}

export default App;
