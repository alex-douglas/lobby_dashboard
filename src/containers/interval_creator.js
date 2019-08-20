import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrains, fetchBuses, fetchWeather, fetchDivvy } from '../actions/index';

const TRANSIT_INFO_REFRESH_RATE = 30000 // milliseconds
const WEATHER_AND_TIME_REFRESH_RATE = 50000 // milliseconds

class IntervalCreator extends Component {

  componentDidMount() {
    this.props.fetchTrains();
    this.props.fetchBuses();
    this.props.fetchWeather();
    // this.props.fetchDivvy(); // Divvy currently returns 403 error when accessed via web app, unassessable unless have CORS enabled browswer
    this.interval = setInterval(() => {
      this.props.fetchTrains();
      this.props.fetchBuses();
      this.props.fetchWeather();
      // this.props.fetchDivvy(); // Divvy currently returns 403 error when accessed via web app, unassessable unless have CORS enabled browswer
    }, TRANSIT_INFO_REFRESH_RATE);
    this.interval = setInterval(() => {
      this.props.fetchWeather();
    }, WEATHER_AND_TIME_REFRESH_RATE);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrains, fetchBuses, fetchWeather, fetchDivvy }, dispatch);
}

export default connect(null, mapDispatchToProps)(IntervalCreator);
