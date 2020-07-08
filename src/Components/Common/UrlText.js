import React from 'react';
import {Linking, TouchableHighlight, StyleSheet} from 'react-native';
import ThemedText from './ThemedText';

const UrlText = ({text, url}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={() => {
        Linking.openURL(url);
      }}>
      <ThemedText style={styles.textStyle}>{text}</ThemedText>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
});

export default UrlText;
