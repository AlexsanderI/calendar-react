import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, showDialog, deleteEvent }) => {
  // console.log(events);
  return (
    <div className='calendar__week' onClick={showDialog}>
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter((event) => {
          // console.log(dateFrom, dayStart);
          return (
            new Date(event.dateFrom) > dayStart &&
            new Date(event.dateTo) < dayEnd
          );
        });

        return (
          <Day
            fullDate={dayStart}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Week;
