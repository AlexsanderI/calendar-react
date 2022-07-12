import React from 'react';
import './header.scss';
import moment from 'moment';

const Header = ({ weekDates, nextWeek, previuseWeek, thisWeek }) => {
  const formatMonthYear = (date) => moment(date).format('MMMM YYYY');
  const formatMonth = (date) => moment(date).format('MMMM');
  const formatYear = (date) => moment(date).format('YYYY');

  const displayedDay = (weekDates) => {
    const firstWeekDay = weekDates[0];
    const lastWeekDay = weekDates[weekDates.length - 1];
    if (formatMonth(firstWeekDay) === formatMonth(lastWeekDay)) {
      return formatMonthYear(firstWeekDay);
    }
    if (
      formatMonth(firstWeekDay) !== formatMonth(lastWeekDay) &&
      formatYear(firstWeekDay) === formatYear(lastWeekDay)
    ) {
      return `${formatMonth(firstWeekDay)} - ${formatMonthYear(lastWeekDay)}`;
    } else {
      return `${formatMonthYear(firstWeekDay)} - ${formatMonthYear(
        lastWeekDay
      )}`;
    }
  };

  return (
    <header className='header'>
      <button className='button create-event-btn'>
        <i className='fas fa-plus create-event-btn__icon'></i>Create
      </button>
      <div className='navigation'>
        <button className='navigation__today-btn button' onClick={thisWeek}>
          Today
        </button>
        <button className='icon-button navigation__nav-icon'>
          <i className='fas fa-chevron-left' onClick={previuseWeek}></i>
        </button>
        <button className='icon-button navigation__nav-icon'>
          <i className='fas fa-chevron-right' onClick={nextWeek}></i>
        </button>
        <span className='navigation__displayed-firstWeekDay'>
          {displayedDay(weekDates)}
        </span>
      </div>
    </header>
  );
};

export default Header;
