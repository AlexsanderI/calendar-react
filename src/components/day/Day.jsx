import React from 'react';
import Hour from '../hour/Hour';
import Redline from '../redline/Redline';

import './day.scss';

const Day = ({ dataDay, dayEvents, fullDate, showDialog, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className='calendar__day' dataday={dataDay}>
      <Redline fullDate={fullDate} />
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter((event) => {
          return new Date(event.dateFrom).getHours() === hour;
        });

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
