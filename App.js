import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from './src/Context/themes';

import Home from './src/Screens/Home';
import Spinner from './src/Components/Spinner';

const Drawer = createDrawerNavigator();

const App = () => {
  const themes = useContext(ThemeContext);

  return (
    <>
      <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={themes.statusBar} />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Country" component={Spinner} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
