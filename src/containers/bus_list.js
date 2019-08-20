import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Odometer from 'react-odometerjs';

class BusList extends Component {

  renderBuses(busData) {
    let time_0 = '';
    if (busData.prdctdn == 'DUE') {
      time_0 = 'Due'
    } else if (busData.prdctdn == 'DLY') {
      time_0 = 'Delayed'
    } else {
      time_0 = parseInt(busData.prdctdn)
    }
    const route_dir = busData.rtdir.slice(0,-5);

    return (
        <tr className="bus-row" key={busData.vid}>
          <td className="bus-label">{route_dir}</td>
          <td className={time_0 == 'Delayed' ? 'bus-time delayed' : 'bus-time'}>{time_0 > 0 ? <Odometer value={time_0} /> : ''}{time_0 == 'Due' ? 'Due' : time_0 == 'Delayed' ? 'Delayed' : ' min'}</td>
        </tr>
    )
  }

  render() {
    const { route, buses } = this.props;
    if (route == 'addLincEast') {
      return (
        <div>
          <table className="table bus-table">
            <tbody>
              {buses.length > 0 ? buses[0].stops.map(this.renderBuses) : null}
            </tbody>
          </table>
        </div>
      )
    } else if (route == 'addLincWest') {
      return (
        <div>
          <table className="table bus-table">
            <tbody>
              {buses.length > 0 ? buses[1].stops.map(this.renderBuses) : null}
            </tbody>
          </table>
        </div>
      )
    } else if (route == 'addAshNorth') {
      return (
        <div>
          <table className="table bus-table">
            <tbody>
              {buses.length > 0 ? buses[2].stops.map(this.renderBuses) : null}
            </tbody>
          </table>
        </div>
      )
    } else if (route == 'addAshSouth') {
      return (
        <div>
          <table className="table bus-table">
            <tbody>
              {buses.length > 0 ? buses[3].stops.map(this.renderBuses) : null}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

function mapStateToProps({ buses }) {
  return { buses };
}

export default connect(mapStateToProps)(BusList);
