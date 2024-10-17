"use client";

import { useState } from 'react';
import axios from 'axios';

interface HoroscopeFormProps {
  onSubmit: (keyword: string) => void;
}

export default function HoroscopeForm({ onSubmit }: HoroscopeFormProps) {
  const [keyword, setKeyword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    try {
      // Validate if the GitHub username exists
      const response = await axios.get(`https://api.github.com/users/${keyword}`);
      if (response.status === 200) {
        // If valid, submit the keyword
        onSubmit(keyword);
      }
    } catch (error) {
      // If there's an error, set an error message
      setErrorMessage('Invalid GitHub username. Please try again.' + error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl">
          <input
            id="search-bar"
            type="text"
            placeholder="divyesh123-jain"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="px-6 py-2 w-full rounded-md flex-1 text-black outline-none bg-white"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-black border-black text-white active:scale-95 duration-100 border rounded-xl transition-all"
          >
            <div className="flex items-center">
              <span className="text-sm font-semibold whitespace-nowrap mx-auto">
                Search
              </span>
            </div>
          </button>
        </div>
        {/* Display the error message if there's one */}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
