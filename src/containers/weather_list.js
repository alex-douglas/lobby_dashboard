import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-timezone';

class WeatherList extends Component {

  weatherElement(description) {
    switch(description) {
      case 'Clear':
        return (
          <div className="icon sunny">
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        )
      case 'Snow':
        return (
          <div className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
              <div className="flake"></div>
              <div className="flake"></div>
            </div>
          </div>
        )
      case 'Thunderstorm':
        return (
          <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
              <div className="bolt"></div>
            </div>
          </div>
        )
      case 'Rain':
        return (
          <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
          </div>
        )
      case 'Drizzle':
        return (
          <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
          </div>
        )
      case 'few clouds':
        return (
          <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        )
      case 'scattered clouds':
        return (
          <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        )
      default:
        return (
          <div className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
        )
    }
  }

  render() {
    const { weather } = this.props;

    if (weather.length > 0) {
      const now = moment().tz('America/Chicago');

      return (
        <div style={{display: 'inline-flex'}}>
          <div className="date-time">
            {now.format('MMMM D, YYYY')}<span> </span>
            {now.format('h')}<span className="second-colon">:</span>{now.format('mm A')}
          </div>
          <div className="temp-container">
            <span className="weather-temp temp">{parseInt(weather[0].currentTemp.temp)}&deg;</span>
            {this.weatherElement(weather[0].currentTemp.description)}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
