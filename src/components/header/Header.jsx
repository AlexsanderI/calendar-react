import React from 'react';

import './header.scss';

const Header = ({ nextWeek, previuseWeek, thisWeek }) => {
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
        <span className='navigation__displayed-month'>Jul</span>
      </div>
    </header>
  );
};

export default Header;
