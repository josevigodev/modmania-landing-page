import { Card } from '../components/Card';

export function CardsSection() {
  return (
    <section
      id='cards'
      className='flex flex-col items-center z-10 px-10 mt-30 gap-15'
    >
      {cards.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </section>
  );
}

const cards = [
  {
    title: "You won't believe the transformation!",
    firstSubtitle:
      "Once you hand in your setup, rest asure, you'll  be carrying something really amazing to home.",
    secondSubtitle: 'And we always keep our promises.',
    order: true,
    image: '/public/images/ps5_h_theme.png',
    alt: 'Artistic ps5 controller picture.',
  },
  {
    title: 'Enough with those boring consoles!',
    firstSubtitle:
      'Still rocking that antique, vanilla look on your PlayStation or Xbox?',
    secondSubtitle: "We've all been there.",
    order: false,
    image: '/public/images/xbox_c_theme.png',
    alt: 'Artistic xbox console picture.',
  },
  {
    title: 'Low resolution is no fun!',
    firstSubtitle:
      'Got a blurry photo or a pixelated mess? Love the memories but hate the quality?',
    secondSubtitle: "We've all been there.",
    order: true,
    image: '/public/images/ps5_h_bo6.png',
    alt: 'Artistic ps5 controller picture.',
  },
];
