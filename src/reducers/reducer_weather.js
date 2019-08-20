import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:

    let todayDescription = action.payload.data.weather[0].main
    if (todayDescription == 'Clouds') {
      todayDescription = action.payload.data.weather[0].description
    }

    const currentTemp = {temp: action.payload.data.main.temp, description: todayDescription};

    return [{currentTemp: currentTemp}];
  }

  return state;
}
