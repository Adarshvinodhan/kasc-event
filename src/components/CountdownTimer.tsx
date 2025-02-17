import  { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date('2025-02-25T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 text-indigo-400">
        <Clock className="w-6 h-6" />
        <span className="text-lg font-medium">Event Starts In</span>
      </div>
      <div className="flex space-x-4 sm:space-x-6">
        {timeBlocks.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 w-16 sm:w-20 text-center border border-indigo-500/30">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs sm:text-sm mt-2 text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;