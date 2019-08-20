import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import TrainReducer from './reducer_trains';
import BusReducer from './reducer_buses';
import DivvyReducer from './reducer_divvy';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  trains: TrainReducer,
  buses: BusReducer,
  divvys: DivvyReducer
});

export default rootReducer;
