import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Card, ThemedText} from './Common';
import {formatNumber, shortenCountryName} from '../Logic/misc';

const CountriesCard = ({topCountries}) => {
  return (
    <Card style={styles.container}>
      <View>
        <ThemedText style={styles.header}>Country</ThemedText>
        {topCountries.map((item, id) => {
          return (
            <ThemedText style={styles.data} key={id}>
              {shortenCountryName(item.country)}
            </ThemedText>
          );
        })}
      </View>
      <View>
        <ThemedText style={styles.header}>Confirmed</ThemedText>
        {topCountries.map((item, id) => {
          return (
            <ThemedText style={styles.data} key={id}>
              {formatNumber(item.cases)}
            </ThemedText>
          );
        })}
      </View>
      <View>
        <ThemedText style={styles.header}>Active</ThemedText>
        {topCountries.map((item, id) => {
          return (
            <ThemedText style={styles.data} key={id}>
              {formatNumber(item.active)}
            </ThemedText>
          );
        })}
      </View>
      <View>
        <ThemedText style={styles.header}>Deaths</ThemedText>
        {topCountries.map((item, id) => {
          return (
            <ThemedText style={styles.data} key={id}>
              {formatNumber(item.deaths)}
            </ThemedText>
          );
        })}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  data: {
    fontSize: 16,
    fontVariant: ['small-caps']
  },
  header: {
    fontSize: 14,
    paddingBottom: 8,
    fontVariant: ['tabular-nums']
  }
});

export default CountriesCard;
