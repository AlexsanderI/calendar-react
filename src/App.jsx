import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const changeWeek = (day) => {
  let dat = new Date();
  return new Date(dat.setDate(dat.getDate() + day));
};

class App extends Component {
  state = {
    weekStartDate: 0,
  };

  nextWeek = () => {
    this.setState({
      weekStartDate: this.state.weekStartDate + 7,
    });
  };

  previuseWeek = () => {
    this.setState({
      weekStartDate: this.state.weekStartDate - 7,
    });
  };

  thisWeek = () => {
    this.setState({
      weekStartDate: 0,
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(
      getWeekStartDate(changeWeek(weekStartDate))
    );

    return (
      <>
        <Header
          weekDates={weekDates}
          nextWeek={this.nextWeek}
          previuseWeek={this.previuseWeek}
          thisWeek={this.thisWeek}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
