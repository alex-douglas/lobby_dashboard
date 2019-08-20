import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class DivvyList extends Component {

  renderDivvy(divvyData) {
    const numAvailable = divvyData.num_bikes_available;
    const totNumBikes  = divvyData.num_docks_available;

    // the station status data that we query for this component doesn't include actual station name text,
    // so we find station_id, station_name pairs manually in station_info API and hardcode here
        const stationName = divvyData.station_id == '230' ? 'Lincoln Ave & Roscoe St' : 'Lincoln Ave & Addison St';

    return (
      <tr className="divvy-row" key={stationName}>
        <td className="divvy-station">{stationName}</td>
        <td id="divvy-avail-cell">{numAvailable + ' of ' + totNumBikes}<br/><span className="bike-avail">bikes available</span></td>
      </tr>
    )

  }

  render() {
    return (
      <div>
        <table className="table divvy-table">
          <tbody >
            {this.props.divvys.map(this.renderDivvy)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ divvys }) {
  return { divvys };
}

export default connect(mapStateToProps)(DivvyList);
