import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');

import {ThemeContext} from '../Context/themes';
import {CountryContext} from '../Context/countries';

import Spinner from '../Components/Spinner';
import TotalCard from '../Components/TotalCard';
import TodayDetails from '../Components/TodayDetails';
import {ThemedText, AppHeader, FlagImage} from '../Components/Common';

import apiList from '../Assets/apiList.json';

const Country = () => {
  const {theme} = useContext(ThemeContext);
  const {selectedCountry} = useContext(CountryContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  dayjs.extend(relativeTime);

  const fetchData = async ISO2 => {
    const response = await axios.get(`${apiList.countries}/${ISO2}`);
    setData(response.data);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const getAxios = async () => {
      await fetchData(selectedCountry.ISO2);
      setIsLoading(false);
    };

    getAxios();
  }, [selectedCountry]);

  return isLoading || selectedCountry === null ? (
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
      <AppHeader title={selectedCountry.Country} onFlag showMenuIcon showStatsIcon />
      <FlagImage iso2={selectedCountry.ISO2} />

      <TotalCard data={data} />
      <TodayDetails
        deaths={data.todayDeaths}
        recovered={data.todayRecovered}
        confirmed={data.todayCases}
      />
      <ThemedText style={styles.update}>{`Data updated ${dayjs(
        data.updated
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

export default React.memo(Country);
