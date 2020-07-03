import React, {useContext} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../Context/themes';

import ThemedText from './ThemedText';
import menu from '../../Assets/Icons/Menu.json';
import analytics from '../../Assets/Icons/Analytics.json';

const AppHeader = ({title, onFlag, showMenuIcon, showStatsIcon}) => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showMenuIcon && (
        <TouchableHighlight onPress={() => navigation.toggleDrawer()}>
          <Svg height="30px" width="30px" viewBox={menu.viewBox} fill={theme.foreground}>
            <Path d={menu.path} />
          </Svg>
        </TouchableHighlight>
      )}
      <View style={styles.innerContainer}>
        <ThemedText style={[styles.header, onFlag && styles.headerShadow]}>{title}</ThemedText>
      </View>
      {showStatsIcon && (
        <TouchableHighlight onPress={() => navigation.jumpTo('History')}>
          <Svg height="30px" width="30px" viewBox={analytics.viewBox} fill={theme.foreground}>
            <Path d={analytics.path} />
          </Svg>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 32,
    zIndex: 1
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
