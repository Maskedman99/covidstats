import React, {useContext} from 'react';
import {View} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';

const Country = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.background}}>
      <ThemedText>Hello</ThemedText>
    </View>
  );
};

export default Country;
