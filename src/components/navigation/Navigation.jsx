import React from 'react';
import './navigation.scss';
import classNames from 'classnames';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';

const Navigation = ({ weekDates }) => {
  const formatDate = (date) => moment(date).format('DD MMM YYYY');

  let isToday = true;

  return (
    <header className='calendar__header'>
      {weekDates.map((dayDate) => {
        formatDate(new Date()) === formatDate(dayDate)
          ? (isToday = true)
          : (isToday = false);

        return (
          <div key={Math.random()} className='calendar__day-label day-label'>
            <span
              className={classNames('day-label__day-name', {
                'day-label__day-name-tody': isToday === true,
              })}
            >
              {days[dayDate.getDay()]}
            </span>

            <span
              className={classNames('day-label__day-number', {
                'day-label__day-number-tody': isToday === true,
              })}
            >
              {dayDate.getDate()}
            </span>

            <div
              className={classNames('cercle', {
                cercle_today: isToday === true,
              })}
            ></div>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
