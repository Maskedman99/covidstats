import React, {useContext} from 'react';
import {ScrollView, View, Linking, TouchableHighlight, StyleSheet} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText, AppHeader, Divider} from '../Components/Common';

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <AppHeader title="About" showMenuIcon />
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>License</ThemedText>
      <ThemedText>This project is licensed uder GNU GPL version 3 or any later version</ThemedText>
      <TouchableHighlight
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL('add url');
        }}>
        <ThemedText style={styles.viewmore}>View License</ThemedText>
      </TouchableHighlight>
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>Credits</ThemedText>
      <ThemedText>maskedman</ThemedText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontVariant: ['small-caps']
  },
  viewmore: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  dividerStyle: {
    marginTop: 16
  }
});

export default About;
