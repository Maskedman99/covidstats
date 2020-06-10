import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';

const Country = ({route}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText>{route.params.country.Country}</ThemedText>
      <ThemedText>{route.params.country.ISO2}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Country;
