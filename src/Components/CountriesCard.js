import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Card, ThemedText} from './Common';
import {formatNumber, shortenCountryName} from '../Logic/misc';

const CountriesCard = ({topCountries}) => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.container}>
        <View>
          <ThemedText style={styles.header}>Country</ThemedText>
          {topCountries.map((item, id) => {
            return <ThemedText style={styles.data}>{shortenCountryName(item.country)}</ThemedText>;
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Confirmed</ThemedText>
          {topCountries.map((item, id) => {
            return <ThemedText style={styles.data}>{formatNumber(item.cases)}</ThemedText>;
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Active</ThemedText>
          {topCountries.map((item, id) => {
            return <ThemedText style={styles.data}>{formatNumber(item.active)}</ThemedText>;
          })}
        </View>
        <View>
          <ThemedText style={styles.header}>Deaths</ThemedText>
          {topCountries.map((item, id) => {
            return <ThemedText style={styles.data}>{formatNumber(item.deaths)}</ThemedText>;
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
