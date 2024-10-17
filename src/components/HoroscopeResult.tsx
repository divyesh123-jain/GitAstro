interface HoroscopeResultProps {
    horoscope: {
      sign: string;
      description: string;
    };
  }
  
  export default function HoroscopeResult({ horoscope }: HoroscopeResultProps) {
    return (
      <div className=" p-4 rounded  ">
        <h2 className="font-bold text-[2rem] mb-2">{horoscope.sign}</h2>
        <p className="text-xl">{horoscope.description}</p>
      </div>
    );
  }