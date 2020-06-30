import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GlobalHistory from './GlobalHistory';
import Country from './Country';

const Tab = createMaterialTopTabNavigator();

const CountryHome = () => {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen component={Country} name="Country" />
      <Tab.Screen component={GlobalHistory} name="Global History" />
    </Tab.Navigator>
  );
};

export default CountryHome;
