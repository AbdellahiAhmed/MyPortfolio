import { useEffect, useState } from 'react';

interface LiveClockProps {
  timezone?: string;
  format?: '12h' | '24h';
  className?: string;
}

const LiveClock = ({
  timezone = 'Africa/Nouakchott',
  format = '24h',
  className = ''
}: LiveClockProps) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: format === '12h',
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone, format]);

  return <span className={className}>{time}</span>;
};

export default LiveClock;
