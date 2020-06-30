import React, {useContext, useState} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {themes, ThemeContext} from './Context/themes';
import {CountryContext} from './Context/countries';

import DrawerContent from './Components/DrawerContent';

import Home from './Screens/Home';
import About from './Screens/About';
import CountryHome from './Screens/CountryHome';

const Drawer = createDrawerNavigator();

const App = () => {
  const {theme} = useContext(ThemeContext);
  const {selectedCountry} = useContext(CountryContext);
  const [Theme, setTheme] = useState(theme);
  const [Country, setCountry] = useState(selectedCountry);

  const changeTheme = value => {
    switch (value) {
      case 'blue':
        setTheme(themes.blue);
        break;
      case 'grey':
        setTheme(themes.grey);
        break;
      case 'light':
        setTheme(themes.light);
        break;
      default:
        setTheme(themes.dark);
    }
  };

  const changeCountry = value => {
    setCountry(value);
  };

  return (
    <ThemeContext.Provider value={{theme: Theme, changeTheme: changeTheme}}>
      <CountryContext.Provider value={{selectedCountry: Country, changeCountry: changeCountry}}>
        <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={Theme.statusBar} />
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <DrawerContent {...props} />}
            drawerContentOptions={{
              activeTintColor: Theme.foreground,
              inactiveTintColor: Theme.foreground,
              activeBackgroundColor: 'white' //isn't working
              //inactiveBackgroundColor: 'black'
            }}
            drawerStyle={{
              backgroundColor: Theme.background
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="CountryHome" component={CountryHome} />
          </Drawer.Navigator>
        </NavigationContainer>
      </CountryContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
