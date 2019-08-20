import axios from 'axios';

const DIVVY_URL = `https://gbfs.divvybikes.com/gbfs/en/station_status.json`;

const API_KEY = '0e2ebe55c2a182bd23d5530df71c0a1a'
const FORECAST_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;
const CURRENT_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

const CTA_TRAIN_API_KEY  = 'd37555ccc09141848543ab21e287b560'
const CTA_TRAIN_ROOT_URL = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${CTA_TRAIN_API_KEY}&mapid=41310&outputType=JSON&max=4`;

const CTA_BUS_API_KEY = 'YQAiaaD7kKzqr4PeZiEJgV4Gy'
const CTA_BUS_ROOL_URL_ADD_LINC_EAST = `http://ctabustracker.com/bustime/api/v2/getpredictions?key=${CTA_BUS_API_KEY}&rt=152&format=json&top=3&stpid=12534`
const CTA_BUS_ROOL_URL_ADD_LINC_WEST = `http://ctabustracker.com/bustime/api/v2/getpredictions?key=${CTA_BUS_API_KEY}&rt=152&format=json&top=3&stpid=12562`
const CTA_BUS_ROOL_URL_ADD_ASH_NORTH = `http://ctabustracker.com/bustime/api/v2/getpredictions?key=${CTA_BUS_API_KEY}&rt=9&format=json&top=3&stpid=14894`
const CTA_BUS_ROOL_URL_ADD_ASH_SOUTH = `http://ctabustracker.com/bustime/api/v2/getpredictions?key=${CTA_BUS_API_KEY}&rt=9&format=json&top=3&stpid=17252`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_TRAINS = 'FETCH_TRAINS';
export const FETCH_BUSES = 'FETCH_BUSES';
export const FETCH_DIVVY = 'FETCH_DIVVY';

export function fetchDivvy() {
  const url = `https://cors-anywhere.herokuapp.com/${DIVVY_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_DIVVY,
    payload: request
  };
}

export function fetchWeather() {
  const url  = `${CURRENT_ROOT_URL}&q=60657,us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function fetchTrains() {
  const url = `https://cors-anywhere.herokuapp.com/${CTA_TRAIN_ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_TRAINS,
    payload: request
  };
}

export function fetchBuses() {
  const request = axios.all([axios.get(`https://cors-anywhere.herokuapp.com/${CTA_BUS_ROOL_URL_ADD_LINC_WEST}`),
                             axios.get(`https://cors-anywhere.herokuapp.com/${CTA_BUS_ROOL_URL_ADD_LINC_EAST}`),
                             axios.get(`https://cors-anywhere.herokuapp.com/${CTA_BUS_ROOL_URL_ADD_ASH_NORTH}`),
                             axios.get(`https://cors-anywhere.herokuapp.com/${CTA_BUS_ROOL_URL_ADD_ASH_SOUTH}`)])
  return {
    type: FETCH_BUSES,
    payload: request
  };
}
