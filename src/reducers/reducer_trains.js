import { FETCH_TRAINS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_TRAINS:
    return [action.payload.data];
  }

  return state;
}
