import React from 'react';
import {StyleSheet} from 'react-native';

import {ThemedText, Card} from './Common';

const GlobalCard = ({title, data}) => {
  return (
    <Card>
      <ThemedText style={styles.header}>{title}</ThemedText>
      <ThemedText style={styles.data}>{data}</ThemedText>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16
  },
  data: {
    textAlign: 'center'
  }
});

export default GlobalCard;
