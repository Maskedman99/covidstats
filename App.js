import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/Screens/Home';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Home />
    </>
  );
};

export default App;
