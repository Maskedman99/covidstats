import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemeContext} from '../../Context/themes';

const Divider = ({style}) => {
  const {theme} = useContext(ThemeContext);
  return <View style={[styles.divider, {backgroundColor: theme.divider}, style]} />;
};

const styles = StyleSheet.create({divider: {height: 1, margin: 4}});

export default React.memo(Divider);
