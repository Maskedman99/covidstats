import React from 'react';
import {Linking, Pressable, StyleSheet} from 'react-native';
import ThemedText from './ThemedText';

const UrlText = ({text, url}) => {
  return (
    <Pressable
      android_ripple
      onPress={() => {
        Linking.openURL(url);
      }}>
      {({pressed}) => (
        <ThemedText style={pressed ? styles.textPressedStyle : styles.textStyle}>{text}</ThemedText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  textPressedStyle: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default UrlText;
