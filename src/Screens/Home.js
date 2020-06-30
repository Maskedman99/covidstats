import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import History from './History';
import Global from './Global';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen component={Global} name="Global" />
      <Tab.Screen component={History} name="History" />
    </Tab.Navigator>
  );
};

export default Home;
