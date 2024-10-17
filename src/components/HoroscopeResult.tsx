interface HoroscopeResultProps {
    horoscope: {
      sign: string;
      description: string;
    };
  }
  
  export default function HoroscopeResult({ horoscope }: HoroscopeResultProps) {
    return (
      <div className="bg-black p-4 rounded  ">
        <h2 className="text-2xl font-bold mb-2 text-center">{horoscope.sign}</h2>
        <p className="text-center flex justify-center items-center">{horoscope.description}</p>
      </div>
    );
  }