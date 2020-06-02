import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Card, ThemedText} from './Common';
import {formatNumber} from '../Logic/misc';

const CountriesCard = ({topCountries}) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <View>
          <ThemedText style={styles.header}>Country</ThemedText>
          {topCountries.map((item, id) => {
            return <ThemedText style={styles.data}>{item.name}</ThemedText>;
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Confirmed</ThemedText>
          {topCountries.map((item, id) => {
            return (
              <ThemedText style={styles.data}>
                {formatNumber(item.latest_data.confirmed)}
              </ThemedText>
            );
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Recovered</ThemedText>
          {topCountries.map((item, id) => {
            return (
              <ThemedText style={styles.data}>
                {formatNumber(item.latest_data.recovered)}
              </ThemedText>
            );
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Deaths</ThemedText>
          {topCountries.map((item, id) => {
            return (
              <ThemedText style={styles.data}>{formatNumber(item.latest_data.deaths)}</ThemedText>
            );
          })}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  data: {
    fontSize: 16
  },
  header: {
    fontSize: 17,
    paddingVertical: 5
  }
});

export default CountriesCard;
