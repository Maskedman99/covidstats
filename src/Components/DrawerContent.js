import React, {memo} from 'react';
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
          label="About"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <Divider />
      </DrawerContentScrollView>

      <SearchCountry navigation={props.navigation} />
      <Divider />

      <View style={styles.innerContainer}>
        <ThemedText>Themes</ThemedText>
        <ColorPalette />
      </View>
      <Divider />

      <KeyboardAvoidingView behavior={'height'}>
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
    paddingVertical: 4
  },
  version: {
    textAlign: 'center',
    padding: 4
  }
});

export default memo(DrawerContent);
