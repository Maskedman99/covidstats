import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';

const FlagImage = ({iso2}) => {
  return (
    <View style={styles.container}>
      <SvgUri
        style={styles.image}
        preserveAspectRatio="none"
        uri={`https://raw.githubusercontent.com/Maskedman99/country-flags/master/svg/${iso2.toLowerCase()}.svg`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -70,
    height: 230,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'hsla(0, 0%, 0%, 0.06)'
  },
  image: {
    borderRadius: 16,
    height: '100%',
    width: '100%'
  }
});

export default memo(FlagImage);
