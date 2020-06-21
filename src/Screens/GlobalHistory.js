import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, StyleSheet, RefreshControl} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';
import Spinner from '../Components/Spinner';
import Plot from '../Components/Plot';

import apiList from '../Assets/apiList.json';

const GlobalHistory = () => {
  const {theme} = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${apiList.globalHistorical}`);
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
      <ThemedText>Global History</ThemedText>
      <Plot data={data.cases} title={'Cases'} chartColor={theme.chartOrange} />
      <Plot data={data.recovered} title={'Recovered'} chartColor={theme.chartGreen} />
      <Plot data={data.deaths} title={'Deaths'} chartColor={theme.chartRed} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GlobalHistory;
