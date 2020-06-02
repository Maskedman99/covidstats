import React from 'react';
import {StyleSheet} from 'react-native';

import {ThemedText, Card} from './Common';

const GlobalCard = ({title, data}) => {
  return (
    <Card>
      <ThemedText>{title}</ThemedText>
      <ThemedText style={styles.dataText}>{data}</ThemedText>
    </Card>
  );
};

const styles = StyleSheet.create({
  dataText: {
    textAlign: 'center'
  }
});

export default GlobalCard;
