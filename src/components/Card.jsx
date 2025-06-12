export function Card({
  image,
  alt,
  title,
  firstSubtitle,
  secondSubtitle,
  order,
}) {
  return (
    <article className='rounded-3xl max-w-5xl items-center flex flex-col gap-8 bg-[#48e2] backdrop-blur-2xl p-8 md:flex-row md:justify-evenly md:px-14 md:py-26'>
      <div className={`w-4/5 max-w-80 py-20 ${order ? 'md:order-2' : ''}`}>
        <img className='z-10 w-full h-auto' src={image} alt={alt} />
      </div>
      <div className='flex flex-col gap-6 md:w-1/2'>
        <h4 className='text-4xl'>{title}</h4>
        <p className='text-xl text-subtitle'>{firstSubtitle}</p>
        <p className='text-xl text-subtitle'>{secondSubtitle}</p>
      </div>
    </article>
  );
}
