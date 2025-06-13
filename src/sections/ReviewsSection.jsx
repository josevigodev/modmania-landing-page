import { useRef } from 'react';
import { Review } from '../components/Review';
import { useReviewsAnimation } from '../hooks/useReviewsAnimation';
import { firstRow, secondRow } from '../mocks/reviews.json';

export function ReviewsSection() {
  const containerRef = useRef(null);
  useReviewsAnimation(containerRef);

  return (
    <section ref={containerRef} className='relative w-full overflow-hidden'>
      <h3 className='text-center text-4xl pt-20 mb-20 md:text-6xl blur-2xl reviews-title'>
        The people... <br />
        they seem to love us!!!
      </h3>

      <div id='reviews-r-1' className='flex gap-5 w-fit'>
        {[...firstRow, ...firstRow].map((review, index) => (
          <Review key={`${review.id}-${index}`} {...review} />
        ))}
      </div>
      <div id='reviews-r-2' className='flex gap-5 mt-5 w-fit'>
        {[...secondRow, ...secondRow].map((review, index) => (
          <Review key={`${review.id}-${index}`} {...review} />
        ))}
      </div>

      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-gradient-to-r from-[#151515aa]'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-gradient-to-l from-[#151515aa]'></div>
    </section>
  );
}
