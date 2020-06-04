import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlingGestureHandler, Directions, State} from 'react-native-gesture-handler';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';

const LongPressButton = () => (
  <FlingGestureHandler
    direction={Directions.RIGHT | Directions.LEFT}
    onHandlerStateChange={({nativeEvent}) => {
      if (nativeEvent.state === State.ACTIVE) {
        console.log("I'm flinged!");
      }
    }}>
    <View style={styles.circle} />
  </FlingGestureHandler>
);

const CountriesList = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <LongPressButton />
      <ThemedText>Country List</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    backgroundColor: '#42a5f5',
    borderRadius: 30,
    height: 30 * 2,
    width: 30 * 2
  }
});

export default CountriesList;
