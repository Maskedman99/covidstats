import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {formatNumber} from '../Logic/misc';

const Global = ({data}) => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    let confirmed = 0;
    let recovered = 0;
    let deaths = 0;
    data.map(item => (confirmed = item.latest_data.confirmed + confirmed));
    data.map(item => (recovered = item.latest_data.recovered + recovered));
    data.map(item => (deaths = item.latest_data.deaths + deaths));

    setGlobalData({confirmed: confirmed, recovered: recovered, deaths: deaths});
  }, [data]);

  return (
    <View style={styles.row}>
      <Text style={styles.dataText}>{formatNumber(globalData.confirmed)}</Text>
      <Text style={styles.dataText}>{formatNumber(globalData.recovered)}</Text>
      <Text style={styles.dataText}>{formatNumber(globalData.deaths)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  dataText: {
    color: 'white'
  }
});

export default Global;
