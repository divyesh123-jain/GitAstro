interface HoroscopeResultProps {
    horoscope: {
      sign: string;
      description: string;
    };
  }
  
  export default function HoroscopeResult({ horoscope }: HoroscopeResultProps) {
    return (
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-2xl font-bold mb-2">{horoscope.sign}</h2>
        <p>{horoscope.description}</p>
      </div>
    );
  }