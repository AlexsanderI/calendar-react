import React, { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, deleteEvent, id }) => {
  const [showDelete, setShowDelete] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const hendelShowDelete = () => {
    setShowDelete(!showDelete);
  };

  const hendelDeleteEvent = () => {
    deleteEvent(id);
  };
  return (
    <div style={eventStyle} className='event' onClick={hendelShowDelete}>
      <div className='event__title'>{title}</div>
      <div className='event__time'>{time}</div>
      {showDelete && (
        <button className='delete-event-btn' onClick={hendelDeleteEvent}>
          {' '}
          Delete{' '}
        </button>
      )}
    </div>
  );
};

export default Event;
