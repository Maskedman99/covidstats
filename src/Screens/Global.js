import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import CountriesCard from '../Components/CountriesCard';
import TodayDetails from '../Components/TodayDetails';
import {ThemedText, AppHeader} from '../Components/Common';

import apiList from '../Assets/apiList.json';
import TotalDetails from '../Components/TotalDetails';

const Global = () => {
  const {theme} = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  dayjs.extend(relativeTime);

  const fetchData = async () => {
    const response = await axios.get(`${apiList.countries}?sort=cases`);
    const response1 = await axios.get(apiList.global);
    setGlobalData(response1.data);
    setData(response.data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    const getAxios = async () => {
      await fetchData();
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
      <AppHeader title={'Covid-19 Global Data'} onFlag={false} showMenuIcon showStatsIcon />

      <TotalDetails data={globalData} />
      <CountriesCard topCountries={data.slice(0, 10)} />
      <TodayDetails data={globalData} />
      <ThemedText style={styles.update}>{`Data updated ${dayjs(
        globalData.updated
      ).fromNow()}. Pull down to refresh`}</ThemedText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  update: {
    textAlign: 'center'
  }
});

export default Global;
