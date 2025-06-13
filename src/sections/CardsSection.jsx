import { useRef } from 'react';
import { Card } from '../components/Card';
import { cards } from '../mocks/cards.json';
import { useCardsAnimation } from '../hooks/useCardsAnimation';

export function CardsSection() {
  const containerRef = useRef(null);
  useCardsAnimation(containerRef);

  return (
    <div ref={containerRef}>
      <section className='flex flex-col  items-center opacity-0 z-10 px-10 mt-40 gap-15 transform translate-y-32 cards'>
        {cards.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </section>
    </div>
  );
}
