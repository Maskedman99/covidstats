import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import Spinner from '../Components/Spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const getAxios = async url => {
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    getAxios('https://corona-api.com/countries');
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <Text style={styles.textClor}>{data.data[0].name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textClor: {
    color: 'white'
  }
});

export default Home;
