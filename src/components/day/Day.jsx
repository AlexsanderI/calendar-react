import React from 'react';
import Hour from '../hour/Hour';
import Redline from '../redline/Redline';

import './day.scss';

const Day = ({ dataDay, dayEvents, fullDate, showDialog, deleteEvent }) => {
  // console.log(dayEvents);
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  // console.log(date);
  return (
    <div className='calendar__day' dataday={dataDay}>
      <Redline fullDate={fullDate} />
      {hours.map((hour) => {
        // console.log(hour);

        //getting all events from the day we will render
        const hourEvents = dayEvents.filter((event) => {
          // console.log(new Date(event.dateFrom).getHours());
          // console.log(new Date(event.dateFrom).getHours() === hour);
          return new Date(event.dateFrom).getHours() === hour;
        });
        // console.log(hourEvents);
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            showDialog={showDialog}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Day;
