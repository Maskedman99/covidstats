import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GlobalHistory from './GlobalHistory';
import Global from './Global';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen component={Global} name="Global" />
      <Tab.Screen component={GlobalHistory} name="Global History" />
    </Tab.Navigator>
  );
};

export default Home;
