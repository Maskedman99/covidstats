import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import HomeHeader from '../Components/HomeHeader';
import Global from '../Components/Global';
import CountriesCard from '../Components/CountriesCard';

import apiList from '../Assets/apiList.json';

const Home = () => {
  const theme = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  const onRefresh = async () => {
    setRefreshing(true);
    const response = await axios.get(apiList.countries);
    const response1 = await axios.get(apiList.global);
    setGlobalData(response1.data);
    setData(response.data);
    setRefreshing(false);
  };

  useEffect(() => {
    const getAxios = async () => {
      const response = await axios.get(`${apiList.countries}?sort=cases`);
      const response1 = await axios.get(apiList.global);
      setGlobalData(response1.data);
      setData(response.data);
      setIsLoading(false);
    };

    getAxios();
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
