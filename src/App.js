import React, {useContext, useState} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {themes, ThemeContext} from './Context/themes';

import DrawerContent from './Components/DrawerContent';

import Home from './Screens/Home';
import About from './Screens/About';

const Drawer = createDrawerNavigator();

const App = () => {
  const {theme} = useContext(ThemeContext);
  const [Theme, setTheme] = useState(theme);

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

  return (
    <ThemeContext.Provider value={{theme: Theme, changeTheme: changeTheme}}>
      <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={Theme.statusBar} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerContent {...props} />}
          drawerContentOptions={{
            backgroundColor: Theme.background,
            activeTintColor: Theme.foreground,
            inactiveTintColor: Theme.foreground,
            activeBackgroundColor: 'white' //isn't working
            //inactiveBackgroundColor: 'black'
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
