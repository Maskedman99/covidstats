import React, {useContext} from 'react';
import {StatusBar} from 'react-native';

import {ThemeContext} from './src/Context/themes';

import Home from './src/Screens/Home';

const App = () => {
  const themes = useContext(ThemeContext);

  return (
    <>
      <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={themes.statusBar} />
      <Home />
    </>
  );
};

export default App;
