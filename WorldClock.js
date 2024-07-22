import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const cities = [
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
];

const WorldClock = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = {};
      cities.forEach(city => {
        newTime[city.name] = new Date().toLocaleTimeString('en-US', {
          timeZone: city.timezone,
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      });
      setTime(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">World Clock</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cities.map(city => (
            <div key={city.name} className="bg-gray-700 p-4 rounded-md flex items-center">
              <Clock className="mr-3 text-blue-400" size={24} />
              <div>
                <h2 className="text-xl font-semibold">{city.name}</h2>
                <p className="text-2xl font-mono">{time[city.name]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldClock;