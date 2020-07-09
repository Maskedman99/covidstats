import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText, AppHeader, Divider, UrlText} from '../Components/Common';

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <AppHeader title="About" showMenuIcon />
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>Version</ThemedText>
      <ThemedText>v1.1</ThemedText>
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>Source Code</ThemedText>
      <ThemedText>
        This is an open source project. You can find the source code in the link below.
      </ThemedText>
      <UrlText text={'View Source Code'} url={'https://github.com/Maskedman99/covidstats'} />
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>License</ThemedText>
      <ThemedText>This project is licensed under GNU GPL version 3 or any later version</ThemedText>
      <UrlText
        text={'View License'}
        url={'https://raw.githubusercontent.com/Maskedman99/covidstats/master/LICENSE'}
      />
      <Divider style={styles.dividerStyle} />
      <ThemedText style={styles.header}>Credits</ThemedText>
      <ThemedText>maskedman</ThemedText>
      <View style={styles.rowContainer}>
        <UrlText text={'Github'} url={'https://github.com/Maskedman99'} />
        <UrlText text={'Website'} url={'https://maskedman99.github.io'} />
      </View>
      <Divider style={styles.dividerStyle} />
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
    paddingBottom: 4,
    fontVariant: ['small-caps']
  },
  dividerStyle: {
    marginTop: 16
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default About;
