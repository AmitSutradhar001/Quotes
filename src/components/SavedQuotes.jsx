const SavedQuotes = ({ quotes }) => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-teal-600 border-b-2 border-teal-500 pb-2">
        Saved Quotes
      </h2>
      {quotes.length === 0 ? (
        <p className="text-gray-600 italic">No saved quotes yet!</p>
      ) : (
        <ul className="list-inside list-disc">
          {quotes.map((q, index) => (
            <li
              key={index}
              className="my-2 p-2 bg-gray-100 rounded-md hover:bg-teal-100 transition-all"
            >
              {q}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
