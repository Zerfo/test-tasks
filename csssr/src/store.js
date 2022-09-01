import createStore from './Slomux/CreateStore';

import { CHANGE_INTERVAL } from './constants';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return state + action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
