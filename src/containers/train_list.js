import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import Odometer from 'react-odometerjs';

class TrainList extends Component {

  renderTrains(trainData) {
    if( trainData ) {
      // trainData time is delivered as specific time, need to calculate difference from current
      // always four times are returned, and always within an hour of current time
      const minutes_now = moment().minutes();
      const time_0 = moment(trainData.ctatt.eta[0].arrT).minutes() - minutes_now;
      const time_1 = moment(trainData.ctatt.eta[1].arrT).minutes() - minutes_now;
      const time_2 = moment(trainData.ctatt.eta[2].arrT).minutes() - minutes_now;
      const time_3 = moment(trainData.ctatt.eta[3].arrT).minutes() - minutes_now;

      return (
        <tbody key={0}>
          <tr className="train-row">
            <td>{trainData.ctatt.eta[0].destNm}</td>
            <td className="train-time"><span style={{fontWeight: "Bold"}}>{time_0 < 2 ? 'Due' : <Odometer value={time_0}/>}</span>{time_0 < 2 ? '' : ' min'}</td>
          </tr>
          <tr className="train-row">
            <td>{trainData.ctatt.eta[1].destNm}</td>
            <td className="train-time"><span style={{fontWeight: "Bold"}}>{time_1 < 2 ? 'Due' : <Odometer value={time_1}/>}</span>{time_1 < 2 ? '' : ' min'}</td>
          </tr>
          <tr className="train-row">
            <td>{trainData.ctatt.eta[2].destNm}</td>
            <td className="train-time"><span style={{fontWeight: "Bold"}}>{time_2 < 2 ? 'Due' : <Odometer value={time_2}/>}</span>{time_2 < 2 ? '' : ' min'}</td>
          </tr>
          <tr className="train-row">
            <td>{trainData.ctatt.eta[3].destNm}</td>
            <td className="train-time"><span style={{fontWeight: "Bold"}}>{time_3 < 2 ? 'Due' : <Odometer value={time_3}/>}</span>{time_3 < 2 ? '' : ' min'}</td>
          </tr>
        </tbody>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <table className="table train-table">
          {this.props.trains.map(this.renderTrains)}
        </table>
      </div>
    )
  }
}

function mapStateToProps({ trains }) {
  return { trains };
}

export default connect(mapStateToProps)(TrainList);
