import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Redline = ({ fullDate }) => {
  const formatDate = (date) => moment(date).format('DD MMM YYYY');
  const [time, setTime] = useState({
    number: new Date().getHours() * 60 + new Date().getMinutes(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        number: new Date().getHours() * 60 + new Date().getMinutes(),
      });
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const { number } = time;
  if (formatDate(fullDate) === formatDate(new Date())) {
    return (
      <div className='red-line' style={{ top: number }}>
        <div className='red-circle'></div>
      </div>
    );
  }
  return null;
};

export default Redline;
