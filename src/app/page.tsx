"use client"

import { useState } from 'react';
import HoroscopeForm from '../../components/HoroscopeForm';
import HoroscopeResult from '../../components/HoroscopeResult';

export default function Home() {
  const [horoscope, setHoroscope] = useState(null);

  const handleSubmit = async (githubId: string) => {
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
      // You might want to set an error state here and display it to the user
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub Horoscope</h1>
      <HoroscopeForm onSubmit={handleSubmit} />
      {horoscope && <HoroscopeResult horoscope={horoscope} />}
    </div>
  );
}