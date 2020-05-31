import React from 'react';
import {View, StyleSheet} from 'react-native';

import CountriesTable from './CountriesTable';

const CountriesCard = ({topCountries}) => {
  return (
    <View style={styles.cardContainer}>
      <CountriesTable data={topCountries} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    height: '50%',
    flexGrow: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'grey'
  }
});

export default CountriesCard;
