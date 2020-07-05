import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ThemedText, TitleDataCard} from './Common';

import {formatNumber} from '../Logic/misc';

const TodayDetails = ({data}) => {
  return (
    <>
      <ThemedText style={styles.todayHeader}>Today</ThemedText>
      <TitleDataCard title={'Confirmed'} data={formatNumber(data.todayCases)} />
      <View style={styles.container}>
        <TitleDataCard title={'Recoverd'} data={formatNumber(data.todayRecovered)} />
        <TitleDataCard title={'Deaths'} data={formatNumber(data.todayDeaths)} />
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
