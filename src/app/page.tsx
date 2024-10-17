"use client";

import { useState } from 'react';
import HoroscopeForm from '../components/HoroscopeForm';
import HoroscopeResult from '../components/HoroscopeResult';
import Image from 'next/image';
import GitAstro from '../public/output-2-removebg-preview.png';

export default function Home() {
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (githubId: string) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-black text-white w-full font-sans p-3 flex flex-col items-center transition-all duration-300 ${
        horoscope ? 'pt-[30px]' : 'pt-[100px]'
      }`}
    >
      <h1 className="text-5xl sm:text-4xl text-white md:text-5xl lg:text-4xl xl:text-[7.5rem] font-bold animate-text bg-clip-text  text-center max-w-[90%] lg:max-w-3xl mx-auto">
        GitAstro
      </h1>
      <div className="pt-6 w-full max-w-[600px]">
        <HoroscopeForm onSubmit={handleSubmit} />
      </div>
      {loading ? (
        <div className="flex space-x-2 justify-center items-center mt-6">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
        </div>
      ) : (
        horoscope && (
          <div
            className="bg-white w-full max-w-[550px] rounded-[30px] flex flex-col hover:shadow-lg min-h-[280px] dark:bg-gray-800 dark:text-white items-start relative group mt-6 p-4 sm:p-6 lg:p-10"
          >
            <div className="m-3">
              <HoroscopeResult horoscope={horoscope} />
              <a href="#">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full absolute bottom-0 left-0 m-0 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out"
                >
                  <Image src={GitAstro} alt="GitAstro" className="" />
                </div>
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}
