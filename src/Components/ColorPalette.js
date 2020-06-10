import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

import {themes, ThemeContext} from '../Context/themes';

const ColorPalette = () => {
  const {changeTheme} = useContext(ThemeContext);

  return (
    <View style={styles.row}>
      <TouchableHighlight onPress={() => changeTheme('light')}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.light.background, borderColor: themes.light.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => changeTheme('blue')}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.blue.background, borderColor: themes.blue.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => changeTheme('grey')}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.grey.background, borderColor: themes.grey.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => changeTheme('dark')}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.dark.background, borderColor: themes.dark.foreground}
          ]}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16
  },
  palette: {
    borderRadius: 20,
    height: 20 * 2,
    width: 20 * 2,
    borderWidth: 1
  }
});

export default ColorPalette;
