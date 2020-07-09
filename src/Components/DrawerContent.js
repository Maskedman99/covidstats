import React, {memo, useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Keyboard, Pressable} from 'react-native';

import {CountryContext} from '../Context/countries';

import ColorPalette from './ColorPalette';
import {ThemedText, Divider} from './Common';
import SearchCountry from '../Components/SearchCountry';

const DrawerContent = ({navigation}) => {
  const {changeCountry} = useContext(CountryContext);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true); // or some other action
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false); // or some other action
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {!isKeyboardOpen && (
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('Home', {screen: 'Global'});
              changeCountry(null);
            }}
            style={styles.innerContainer}>
            <ThemedText>Home</ThemedText>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('About')} style={styles.innerContainer}>
            <ThemedText>About</ThemedText>
          </Pressable>
          <Divider />
        </View>
      )}
      <SearchCountry navigation={navigation} />
      <Divider />

      {!isKeyboardOpen && (
        <>
          <View style={styles.innerContainer}>
            <ThemedText>Themes</ThemedText>
            <ColorPalette />
          </View>
          <Divider />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 4,
    paddingTop: 24
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

export default memo(DrawerContent);
