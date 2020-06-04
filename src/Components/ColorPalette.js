import React from 'react';
import {View, StyleSheet} from 'react-native';

import {themes} from '../Context/themes';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  palette: {
    borderRadius: 20,
    height: 20 * 2,
    width: 20 * 2
  }
});

const ColorPalette = () => {
  return (
    <View style={styles.row}>
      <View style={[styles.palette, {backgroundColor: themes.light.background}]} />
      <View style={[styles.palette, {backgroundColor: themes.blue.background}]} />
      <View style={[styles.palette, {backgroundColor: themes.grey.background}]} />
      <View style={[styles.palette, {backgroundColor: themes.dark.background}]} />
    </View>
  );
};

export default ColorPalette;
