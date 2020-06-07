import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {ThemedText} from './Common';

const LabelCountry = ({country}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ThemedText style={styles.country}>{country.Country}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingLeft: 12
  },
  country: {
    fontSize: 14
  }
});

export default LabelCountry;
