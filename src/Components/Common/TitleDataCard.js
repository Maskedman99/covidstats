import React, {memo} from 'react';
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
    fontSize: 14,
    paddingBottom: 8
  },
  data: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24
  }
});

export default memo(TitleDataCard);
