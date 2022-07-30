import React from 'react';
import Hour from '../hour/Hour';
import Redline from '../redline/Redline';

import './day.scss';

const Day = ({ dataDay, dayEvents, fullDate }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  // console.log(date);
  return (
    <div className='calendar__day' dataday={dataDay}>
      <Redline fullDate={fullDate} />
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};

export default Day;
