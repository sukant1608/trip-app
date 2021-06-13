import { combineReducers } from "redux";

const addTripReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRIP":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  trip: addTripReducer,
});

export default rootReducer;
