import React from 'react';
import {View, StyleSheet} from 'react-native';

import {TitleDataCard} from './Common';

const TodayDetails = ({confirmed, recovered, deaths}) => {
  return (
    <>
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
  }
});

export default TodayDetails;
