import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';

const FlagImage = ({iso2}) => {
  return (
    <View style={styles.container}>
      <SvgUri
        style={styles.image}
        preserveAspectRatio="none"
        uri={`https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/${iso2.toLowerCase()}.svg`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 4,
    height: 250,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden'
  },
  image: {
    borderRadius: 16,
    height: '100%',
    width: '100%'
  }
});

export default memo(FlagImage);
