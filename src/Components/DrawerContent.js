import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import ColorPalette from './ColorPalette';
import {ThemedText, Divider} from './Common';
import countriesList from '../Assets/countriesList.json';
import LabelCountry from './LabelCountry';

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

      <FlatList
        style={styles.flatlist}
        data={countriesList}
        renderItem={({item}) => <LabelCountry country={item} />}
        keyExtractor={item => item.ISO2}
        ItemSeparatorComponent={() => <Divider />}
      />
      <Divider />

      <View style={styles.innerContainer}>
        <ThemedText>Themes</ThemedText>
        <ColorPalette />
      </View>
      <Divider />

      <ThemedText style={styles.version}>App Version</ThemedText>
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
  flatlist: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 4
  },
  version: {
    textAlign: 'center',
    padding: 4
  }
});

export default DrawerContent;
