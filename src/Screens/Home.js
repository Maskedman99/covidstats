import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import HomeHeader from '../Components/HomeHeader';
import Global from '../Components/Global';
import CountriesCard from '../Components/CountriesCard';

const Home = () => {
  const theme = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const onRefresh = async () => {
    setRefreshing(true);
    const response = await axios.get('https://api.covid19api.com/summary');
    setGlobalData(response.data.Global);
    setData(response.data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed));
    setRefreshing(false);
  };

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
    <ScrollView
      style={[styles.container, {backgroundColor: theme.background}]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[theme.foreground]}
          progressBackgroundColor={theme.card}
        />
      }>
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
