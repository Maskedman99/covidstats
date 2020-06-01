import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GlobalCard = ({title, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.dataText}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white'
  },
  headerText: {
    color: 'white'
  },
  dataText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default GlobalCard;
