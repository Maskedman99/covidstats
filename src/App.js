import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from './Context/themes';

import Home from './Screens/Home';
import CountryList from './Screens/CountryList';

const Drawer = createDrawerNavigator();

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={theme.statusBar} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            backgroundColor: theme.background,
            activeTintColor: theme.foreground,
            inactiveTintColor: theme.foreground
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Country" component={CountryList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
