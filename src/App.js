import React, {useContext} from 'react';
import {StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeContext} from './Context/themes';

import DrawerContent from './Components/DrawerContent';

import Home from './Screens/Home';
import About from './Screens/About';

const Drawer = createDrawerNavigator();

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <StatusBar translucent backgroundColor="hsla(0, 0%, 0%, 0.03)" barStyle={theme.statusBar} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <DrawerContent {...props} />}
          drawerContentOptions={{
            backgroundColor: theme.background,
            activeTintColor: theme.foreground,
            inactiveTintColor: theme.foreground,
            activeBackgroundColor: 'white' //isn't working
            //inactiveBackgroundColor: 'black'
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
