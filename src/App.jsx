// magic number fix

import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const changeWeek = (day) => {
  let dat = new Date();
  return new Date(dat.setDate(dat.getDate() + day));
};

class App extends Component {
  state = {
    weekStartDate: 0,
    isOpen: false,
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

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
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
          showDialog={this.showDialog}
        />
        <Calendar weekDates={weekDates} />
        {this.state.isOpen && <Modal hideDialog={this.hideDialog} />}
      </>
    );
  }
}

export default App;
