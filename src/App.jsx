// magic number fix

import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { fetchEvent, createEvent, deleteEvent } from './gateway/events';
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
    events: [],
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

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetchEvent().then((res) => {
      this.setState({
        events: res,
      });
    });
  };

  createNewEvent = (modalEvent) => {
    createEvent(modalEvent).then(() => this.fetchEvents());
  };

  handeleDeleteEvent = (id) => {
    return deleteEvent(id).then(() => this.fetchEvents());
  };

  render() {
    const { weekStartDate, events } = this.state;
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
        <Calendar
          weekDates={weekDates}
          events={events}
          deleteEvent={this.handeleDeleteEvent}
        />
        {this.state.isOpen && (
          <Modal
            hideDialog={this.hideDialog}
            createNewEvent={this.createNewEvent}
          />
        )}
      </>
    );
  }
}

export default App;
