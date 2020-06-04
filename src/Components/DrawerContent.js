import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import './ColorPalette';
import ColorPalette from './ColorPalette';
import {ThemedText} from './Common';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
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

        <View style={styles.innerContainer}>
          <ThemedText>Themes</ThemedText>
          <ColorPalette />
        </View>
      </DrawerContentScrollView>
      <View>
        <Text>App Version</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    padding: 20
  }
});

export default DrawerContent;
