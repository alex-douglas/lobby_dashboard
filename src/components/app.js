import React, { Component } from 'react';

import WeatherList from '../containers/weather_list';
import TrainList from '../containers/train_list';
import BusList from '../containers/bus_list';
import DivvyList from '../containers/divvy_list';
import IntervalCreator from '../containers/interval_creator';

export default class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-5">
                <div className="train-border-box">
                  <div className="train-header">
                    <img src="src/resources/white_train_icon_trans.png" className="train-icon" />
                    <span>Paulina - Brown Line</span>
                  </div>
                  <TrainList />
                </div>
                <div className="train-border-box">
                  <div className="train-header">
                    <img src="src/resources/divvy_logo.svg" height={40} />
                  </div>
                  {/* Unfortunately Divvy returns 403 error when trying to access with CORS enabled */}
                  {/* No way to access without the CORS Chrome extension, so disabling for now */}
                  {/* The below is hardcoded example of what it would look like with live data */}
                  {/* <DivvyList /> */}
                  <div>
                    <table className="table divvy-table">
                      <tbody >
                        <tr className="divvy-row" key={0}>
                          <td className="divvy-station">{'Lincoln Ave & Roscoe St'}</td>
                          <td id="divvy-avail-cell">{4 + ' of ' + 15}<br/><span className="bike-avail">bikes available</span></td>
                        </tr>
                        <tr className="divvy-row" key={1}>
                          <td className="divvy-station">{'Lincoln Ave & Addison St'}</td>
                          <td id="divvy-avail-cell">{13 + ' of ' + 18}<br/><span className="bike-avail">bikes available</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 bus-border-box">
                <div className="bus-header">
                  <img src="src/resources/bus_icon_inverted_trans.png" className="bus-icon" />
                  <span> 152 Addison & Lincoln</span>
                </div>
                <div className="row bus-container">
                  <div className="col-sm-6">
                    <BusList route='addLincEast' />
                  </div>
                  <div className="col-sm-6">
                    <BusList route='addLincWest' />
                  </div>
                </div>
                <div className="bus-header bus-header-two">
                  <img src="src/resources/bus_icon_inverted_trans.png" width="30" className="bus-icon" />
                  <span> 9 Ashland & Addison</span>
                </div>
                <div className="row bus-container">
                  <div className="col-sm-6">
                    <BusList route='addAshNorth' />
                  </div>
                  <div className="col-sm-6">
                    <BusList route='addAshSouth' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-row row">
          <img src="src/resources/MODE-logo.png" width="50%" className="mode-logo" />
          <WeatherList />
        </div>

        <IntervalCreator />

      </div>
    );
  }
}
