import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import ColorPalette from './ColorPalette';
import {ThemedText, Divider} from './Common';
import SearchCountry from '../Components/SearchCountry';

const DrawerContent = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          {...props}
          label="Home"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <DrawerItem
          {...props}
          label="Country"
          onPress={() => {
            props.navigation.navigate('Country');
          }}
        />
        <DrawerItem
          {...props}
          label="About"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
      </DrawerContentScrollView>
      <Divider />

      <SearchCountry />
      <Divider />

      <KeyboardAvoidingView behavior={'height'}>
        <View style={styles.innerContainer}>
          <ThemedText>Themes</ThemedText>
          <ColorPalette />
        </View>
        <Divider />

        <ThemedText style={styles.version}>App Version</ThemedText>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  version: {
    textAlign: 'center',
    padding: 4
  }
});

export default DrawerContent;
