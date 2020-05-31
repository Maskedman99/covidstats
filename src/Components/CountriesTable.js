import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {formatNumber} from '../Logic/misc';

const CountriesTable = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Country</Text>
        {data.map((item, id) => {
          return <Text style={styles.dataText}>{item.name}</Text>;
        })}
      </View>
      <View>
        <Text style={styles.headerText}>Confirmed</Text>
        {data.map((item, id) => {
          return <Text style={styles.dataText}>{formatNumber(item.latest_data.confirmed)}</Text>;
        })}
      </View>
      <View>
        <Text style={styles.headerText}>Recovered</Text>
        {data.map((item, id) => {
          return <Text style={styles.dataText}>{formatNumber(item.latest_data.recovered)}</Text>;
        })}
      </View>
      <View>
        <Text style={styles.headerText}>Deaths</Text>
        {data.map((item, id) => {
          return <Text style={styles.dataText}>{formatNumber(item.latest_data.deaths)}</Text>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dataText: {
    fontSize: 16
  },
  headerText: {
    fontSize: 17,
    paddingVertical: 5
  }
});

export default CountriesTable;
