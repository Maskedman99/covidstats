import React, {useContext} from 'react';
import {View} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';

const CountriesList = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <ThemedText>Country List</ThemedText>
    </View>
  );
};

export default CountriesList;
