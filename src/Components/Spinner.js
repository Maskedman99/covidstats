import React, {useContext} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import {ThemeContext} from '../Context/themes';

const Spinner = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <ActivityIndicator color={theme.foreground} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Spinner;
