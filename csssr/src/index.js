import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './Slomux/Provider';

import store from './store';

import Timer from './Components/Timer';

ReactDOM.render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById('root'),
);
