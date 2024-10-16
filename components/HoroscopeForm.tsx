"use client"

import { useState } from 'react';

interface HoroscopeFormProps {
  onSubmit: (githubId: string) => void;
}

export default function HoroscopeForm({ onSubmit }: HoroscopeFormProps) {
  const [githubId, setGithubId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(githubId);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={githubId}
        onChange={(e) => setGithubId(e.target.value)}
        placeholder="Enter GitHub ID"
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Get Horoscope
      </button>
    </form>
  );
}