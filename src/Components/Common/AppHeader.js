import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../Context/themes';

import {ThemedText} from '.';
import menuIcon from '../../Assets/menuPath.json';

const AppHeader = ({title, style, onFlag}) => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
        <Svg height="30px" width="30px" viewBox="0 0 24 24" fill={theme.foreground}>
          <Path d={menuIcon.path} />
        </Svg>
      </TouchableHighlight>
      <View style={styles.innerContainer}>
        <ThemedText style={[styles.header, onFlag && styles.headerShadow]}>{title}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 36
  },
  innerContainer: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerShadow: {
    textShadowColor: '#585858',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 32
  }
});

export default React.memo(AppHeader);
