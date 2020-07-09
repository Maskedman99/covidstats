import React, {useContext} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import {themes, ThemeContext} from '../Context/themes';

const ColorPalette = () => {
  const {changeTheme} = useContext(ThemeContext);

  return (
    <View style={styles.row}>
      <Pressable onPress={() => changeTheme('light')} style={styles.palette}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.light.background, borderColor: themes.light.foreground}
          ]}
        />
      </Pressable>
      <Pressable onPress={() => changeTheme('blue')} style={styles.palette}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.blue.background, borderColor: themes.blue.foreground}
          ]}
        />
      </Pressable>
      <Pressable onPress={() => changeTheme('grey')} style={styles.palette}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.grey.background, borderColor: themes.grey.foreground}
          ]}
        />
      </Pressable>
      <Pressable onPress={() => changeTheme('dark')} style={styles.palette}>
        <View
          style={[
            styles.palette,
            {backgroundColor: themes.dark.background, borderColor: themes.dark.foreground}
          ]}
        />
      </Pressable>
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
