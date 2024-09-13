const QuoteCard = ({ quote, saveQuote, fetchQuote }) => {
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 min-h-72 overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <p className="text-lg min-h-48 font-semibold line-clamp-2 p-4 overflow-auto text-purple-700">
        {quote}
      </p>
      <div className="p-3 flex flex-col gap-4">
        <button
          onClick={saveQuote}
          className="z-10 font-semibold group-hover:bottom-12 absolute bottom-[-150px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none !rounded-br-none m-2"
        >
          Save Quote
        </button>
        <button
          onClick={fetchQuote}
          className="z-10 font-semibold group-hover:bottom-0 absolute bottom-[-150px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none !rounded-br-none m-2"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
