import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import HomeHeader from '../Components/HomeHeader';
import Global from '../Components/Global';
import CountriesCard from '../Components/CountriesCard';

const Home = () => {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    const getAxios = async url => {
      const response = await axios.get(url);
      setGlobalData(response.data.Global);
      setData(response.data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed));
      setIsLoading(false);
    };

    getAxios('https://api.covid19api.com/summary');
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <HomeHeader />
      <Global data={globalData} />
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
