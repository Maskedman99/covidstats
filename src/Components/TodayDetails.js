import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemedText, TitleDataCard} from './Common';

const TodayDetails = ({confirmed, recovered, deaths}) => {
  return (
    <>
      <ThemedText style={styles.todayHeader}>Today</ThemedText>
      <TitleDataCard title={'Confirmed'} data={confirmed} />
      <View style={styles.container}>
        <TitleDataCard title={'Recoverd'} data={recovered} />
        <TitleDataCard title={'Deaths'} data={deaths} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todayHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 12
  }
});

export default TodayDetails;
