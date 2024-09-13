import { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import SavedQuotes from "./components/SavedQuotes";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const res = await axios.get(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    setQuote(res.data[0]);
  };

  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen w-full bg-pink-50 p-4 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:sticky top-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-700 text-center">
          Amit&rsquo;s Random Quotes
        </h1>
        <div className="flex justify-center items-center">
          <QuoteCard
            quote={quote}
            saveQuote={saveQuote}
            fetchQuote={fetchQuote}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:pl-8">
        <div className="h-full overflow-y-auto">
          <SavedQuotes quotes={savedQuotes} />
        </div>
      </div>
    </div>
  );
};

export default App;
