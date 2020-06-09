import React from 'react';
import {StyleSheet} from 'react-native';

import {ThemedText, Card} from '.';

const TitleDataCard = ({title, data}) => {
  return (
    <Card>
      <ThemedText style={styles.header}>{title}</ThemedText>
      <ThemedText style={styles.data}>{data}</ThemedText>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4
  },
  data: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default TitleDataCard;
