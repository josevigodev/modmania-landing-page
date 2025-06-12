export function Faq({ question, answer, id, openIndex, setOpenIndex }) {
  return (
    // <details className='relative overflow-hidden select-none bg-[#48e2] rounded-md flex-1 faq-details'>
    //   <summary className='p-4 marker:content-none'>{question}</summary>
    //   <p className='text-lg border-t-1 m-4 mt-0 pt-4'>{answer}</p>
    // </details>
    <div className='relative overflow-hidden select-none bg-[#48e2] rounded-md flex-1'>
      <button
        className={`text-lg relative p-4 w-full text-start faq-question ${
          openIndex === id ? 'rotate-before' : ''
        }`}
        onClick={() => setOpenIndex(openIndex === id ? null : id)}
      >
        {question}
      </button>
      <div
        className={`text-subtitle max-h-0 overflow-hidden px-4 faq-answer ${
          openIndex === id ? 'open-answer' : ''
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
