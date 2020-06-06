import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import ColorPalette from './ColorPalette';
import {ThemedText} from './Common';
import countriesList from '../Assets/countriesList.json';
import LabelCountry from './LabelCountry';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} nestedScrollEnabled>
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

        <FlatList
          nestedScrollEnabled
          style={[styles.flatlist, {backgroundColor: props.backgroundColor}]}
          data={countriesList}
          renderItem={({item}) => <LabelCountry country={item} />}
          keyExtractor={item => item.ISO2}
        />
      </DrawerContentScrollView>

      <View style={[styles.innerContainer, {backgroundColor: props.backgroundColor}]}>
        <ThemedText>Themes</ThemedText>
        <ColorPalette />
      </View>

      <View style={{backgroundColor: props.backgroundColor}}>
        <ThemedText style={styles.version}>App Version</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  flatlist: {
    maxHeight: 200,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 5
  },
  version: {
    textAlign: 'center',
    padding: 4
  }
});

export default DrawerContent;
