import React, {memo, useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';

import {CountryContext} from '../Context/countries';

import ColorPalette from './ColorPalette';
import {ThemedText, Divider} from './Common';
import SearchCountry from '../Components/SearchCountry';
import {TouchableHighlight} from 'react-native-gesture-handler';

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
          <TouchableHighlight
            onPress={() => {
              changeCountry(null);
              navigation.navigate('Home');
            }}
            style={styles.innerContainer}>
            <ThemedText>Home</ThemedText>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate('About')}
            style={styles.innerContainer}>
            <ThemedText>About</ThemedText>
          </TouchableHighlight>
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
      {!isKeyboardOpen && <ThemedText style={styles.version}>App Version</ThemedText>}
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
  },
  version: {
    textAlign: 'center',
    padding: 4
  }
});

export default memo(DrawerContent);
