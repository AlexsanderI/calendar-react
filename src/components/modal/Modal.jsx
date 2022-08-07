import React from 'react';
import moment from 'moment';
import { getDateTime } from '../../utils/dateUtils';
import { useState } from 'react';

import './modal.scss';

const roundMinutes = (date) => {
  const start = moment(date);
  const roundMinutes = 15 - (start.minute() % 15);
  return moment(start).add(roundMinutes, 'minutes');
};

const Modal = ({ hideDialog, createNewEvent }) => {
  const [modalForm, andleChangeDate] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    dateFrom: roundMinutes(new Date()).format('HH:mm'),
    dateTo: roundMinutes(new Date()).add(1, 'hours').format('HH:mm'),
    description: '',
  });

  const { title, date, dateFrom, dateTo, description } = modalForm;

  const handleChangeDate = (event) => {
    andleChangeDate({ ...modalForm, [event.target.name]: event.target.value });
  };

  const handleCreateEvent = (event) => {
    event.preventDefault();
    const createEvent = {
      title,
      dateFrom: getDateTime(date, dateFrom),
      dateTo: getDateTime(date, dateTo),
      description,
    };

    if (dateFrom > dateTo || moment(new Date()).format('YYYY-MM-DD') > date) {
      alert(
        'This day completed or begin of time is not correct. Please check date & time.'
      );
    } else {
      createNewEvent(createEvent);
      hideDialog();
    }
  };

  return (
    <div className='modal overlay'>
      <div className='modal__content'>
        <div className='create-event'>
          <button className='create-event__close-btn' onClick={hideDialog}>
            +
          </button>
          <form className='event-form'>
            <input
              type='text'
              name='title'
              placeholder='Title'
              className='event-form__field'
              onChange={handleChangeDate}
              value={title}
            />
            <div className='event-form__time'>
              <input
                type='date'
                name='date'
                className='event-form__field'
                onChange={handleChangeDate}
                value={date}
              ></input>
              <input
                type='time'
                name='dateFrom'
                className='event-form__field'
                onChange={handleChangeDate}
                value={dateFrom}
              />
              <span>-</span>
              <input
                type='time'
                name='dateTo'
                className='event-form__field'
                onChange={handleChangeDate}
                value={dateTo}
              />
            </div>
            <textarea
              name='description'
              placeholder='Description'
              className='event-form__field'
              onChange={handleChangeDate}
              value={description}
            ></textarea>
            <button
              type='submit'
              className='event-form__submit-btn'
              onClick={handleCreateEvent}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
