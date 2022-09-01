import React from 'react';
import SlomuxContext from './Context';

export default ({ store, children }) => (
  <SlomuxContext.Provider value={store}>{children}</SlomuxContext.Provider>
);
