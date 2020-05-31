import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import Spinner from '../Components/Spinner';
import CountriesCard from '../Components/CountriesCard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAxios = async url => {
      const response = await axios.get(url);
      setData(response.data.data.sort((a, b) => b.latest_data.confirmed - a.latest_data.confirmed));
      setIsLoading(false);
    };

    getAxios('https://corona-api.com/countries');
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <CountriesCard topCountries={data.slice(0, 10)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  textClor: {
    color: 'white'
  }
});

export default Home;
