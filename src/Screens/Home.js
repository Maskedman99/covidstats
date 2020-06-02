import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import Global from '../Components/Global';
import CountriesCard from '../Components/CountriesCard';

const Home = () => {
  const theme = useContext(ThemeContext);
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
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <Global data={data} />
      <CountriesCard topCountries={data.slice(0, 10)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
