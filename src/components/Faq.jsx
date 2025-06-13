export function Faq({ question, answer, id, openIndex, setOpenIndex, even }) {
  return (
    <div
      className={`relative overflow-hidden select-none bg-[#48e2] rounded-md flex-1 opacity-0 faq ${
        even ? '-translate-x-100' : 'translate-x-100'
      }`}
    >
      <button
        className={`text-lg relative cursor-pointer p-4 w-full text-start faq-question ${
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
