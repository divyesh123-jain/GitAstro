"use client";

import { useState } from 'react';
import HoroscopeForm from '../components/HoroscopeForm';
import HoroscopeResult from '../components/HoroscopeResult';

export default function Home() {
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (githubId: string) => {
    setLoading(true); // Start loading when submitting
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch horoscope');
      }

      const data = await response.json();
      setHoroscope(data);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    } finally {
      setLoading(false); // Stop loading after fetching is complete
    }
  };

  return (
    <div
      className={`min-h-screen bg-black text-white w-full font-sans p-4 flex flex-col items-center transition-all duration-300 ${
        horoscope ? 'pt-[80px]' : 'pt-[100px]'
      }`}
    >
      <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7.5rem] font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center max-w-[90%] lg:max-w-3xl mx-auto'>
        GitAstro
      </h1>
      <HoroscopeForm onSubmit={handleSubmit} />
      {loading ? (
        <div className='flex space-x-2 justify-center items-center mt-6'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
        </div>
      ) : (
        horoscope && (
          <div className='flex flex-col w-full max-w-[90%] sm:max-w-md mt-6'>
            <HoroscopeResult horoscope={horoscope} />
          </div>
        )
      )}
    </div>
  );
}
