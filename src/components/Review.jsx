export function Review({ user, comment }) {
  return (
    <figure className='flex flex-col shrink-0 w-3xs bg-[#48e2] rounded-2xl p-5 gap-2.5'>
      <div className='flex flex-row items-center gap-1.5'>
        <img
          className='rounded-full'
          width='32'
          height='32'
          alt=''
          src='https://unavatar.io/twitter/isobelh_art'
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {user}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>@{user}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-md'>{comment}</blockquote>
    </figure>
  );
}
