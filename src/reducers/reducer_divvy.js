import { FETCH_DIVVY } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_DIVVY:
    const divvyStations = action.payload.data.data.stations.filter(station => station.station_id == 230 || station.station_id == 330);
    return divvyStations;
  }

  return state;
}
