import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  // Destructure type and payload from action for DRY code
  const { type, payload } = action;
  
  switch (type) {
    case 'SET_ALERT':
      // copy the state and add the alert
      return [...state, payload];
    case 'REMOVE_ALERT':
      // Removes the alert by ID
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
