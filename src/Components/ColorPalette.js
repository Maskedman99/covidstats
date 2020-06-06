import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';

import {themes, ThemeContext} from '../Context/themes';

const ColorPalette = () => {
  const theme = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleThemeChange = themeValues => {
    setSelectedTheme(themeValues);
  };

  console.log(selectedTheme);

  return (
    <View style={styles.row}>
      <TouchableHighlight onPress={() => handleThemeChange(themes.light)}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.light.background, borderColor: themes.light.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleThemeChange(themes.blue)}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.blue.background, borderColor: themes.blue.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleThemeChange(themes.grey)}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.grey.background, borderColor: themes.grey.foreground}
          ]}
        />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleThemeChange(themes.dark)}>
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
