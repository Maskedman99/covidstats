import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');

import {ThemeContext} from '../Context/themes';

import Spinner from '../Components/Spinner';
import Global from '../Components/Global';
import TodayDetails from '../Components/TodayDetails';
import {ThemedText, AppHeader, FlagImage} from '../Components/Common';

import apiList from '../Assets/apiList.json';

const Country = ({route}) => {
  const country = route.params.country;

  const {theme} = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  dayjs.extend(relativeTime);

  const fetchData = async () => {
    const response = await axios.get(`${apiList.countries}/${country.ISO2}`);
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
      await fetchData();
      setIsLoading(false);
    };

    getAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

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
      <AppHeader title={country.Country} style={styles.appHeader} onFlag={true} />
      <FlagImage iso2={country.ISO2} />

      <Global data={data} />
      <ThemedText style={styles.todayHeader}>Today</ThemedText>
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
  },
  todayHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  appHeader: {
    zIndex: 3
  }
});

export default React.memo(Country);
