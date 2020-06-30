import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import History from './History';
import Country from './Country';

const Tab = createMaterialTopTabNavigator();

const CountryHome = () => {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen component={Country} name="Country" />
      <Tab.Screen component={History} name="History" />
    </Tab.Navigator>
  );
};

export default CountryHome;
