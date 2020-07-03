import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {ThemeContext} from '../Context/themes';

import {ThemedText, AppHeader} from '../Components/Common';

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <AppHeader title="About" showMenuIcon />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default About;
