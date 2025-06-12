import { useState } from 'react';
import { Faq } from '../components/Faq';
import { FAQs } from '../mocks/FAQs.json';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='relative flex flex-col max-w-200 mx-auto mt-30 px-4 gap-4'>
      <h3 className='text-center text-4xl mb-15 md:text-6xl'>
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
