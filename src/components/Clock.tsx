import { useEffect, useState } from 'react';

interface Props {
  timezone: string; //Europe/London, Asia/Tokyo. probably wont work for things like palma de mallorca. change the props this takes to something the api call returns
}

export const Clock: React.FC<Props> = ({ timezone }) => {
  const [clock, setClock] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date().toLocaleDateString('en-GB', {
        timeZone: timezone,
      });
      let time = new Date().toLocaleTimeString('en-GB', {
        timeZone: timezone,
        hour12: true,
      });
      setClock(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return <div>{clock}</div>;
};
