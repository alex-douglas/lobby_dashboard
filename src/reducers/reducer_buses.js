import { FETCH_BUSES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_BUSES:
    const busData = action.payload.map(route => {
      if (route.data['bustime-response'].hasOwnProperty('error')) {
        return {
          route: '',
          rtDir: '',
          stops: []
        }
      } else {
        return {
        route: route.data['bustime-response'].prd[0].stpnm,
        rtDir: route.data['bustime-response'].prd[0].rtdir,
        stops: route.data['bustime-response'].prd,
        }
      }
    });
    return busData;
  }

  return state;
}
