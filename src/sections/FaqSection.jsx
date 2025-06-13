import { useState } from 'react';
import { Faq } from '../components/Faq';
import { FAQs } from '../mocks/FAQs.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    gsap.to('.faq', {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.faq-title',
        start: 'top center',
        end: 'top center',
      },
    });
  }, []);

  return (
    <section className='relative flex flex-col max-w-200 mx-auto mt-30 px-4 gap-4'>
      <h3 className='text-center text-4xl mb-15 md:text-6xl faq-title'>
        Have any question in mind?
      </h3>
      {FAQs.map((faq) => (
        <Faq
          key={faq.id}
          {...faq}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </section>
  );
}
