import {createStore} from "redux";

const initialState = {counter: 0, showCounter: true};

export const INCREMENT = "INCREMENT";
export const INCREASE = "INCREASE";
export const DECREMENT = "DECREMENT";
export const TOGGLE = "TOGGLE";

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };

    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.amount
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };

    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter
      }

    default:
      return state;
  }
}

const store = createStore(CounterReducer);

export default store;