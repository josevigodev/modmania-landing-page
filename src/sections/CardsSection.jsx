import { useEffect } from 'react';
import { Card } from '../components/Card';
import { cards } from '../mocks/cards.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function CardsSection() {
  useEffect(() => {
    gsap.to('.cards', {
      y: -128,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.cards',
        start: '-200px center',
        end: '-200px center',
      },
    });
  }, []);

  return (
    <section className='flex flex-col  items-center opacity-0 z-10 px-10 mt-40 gap-15 transform translate-y-32 cards'>
      {cards.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </section>
  );
}
