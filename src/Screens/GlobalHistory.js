import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';

import {ThemeContext} from '../Context/themes';

import {ThemedText} from '../Components/Common';
import Spinner from '../Components/Spinner';
import HistoryHeatmap from '../Components/HistoryHeatmap';

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
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText>Global History</ThemedText>
      <HistoryHeatmap data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GlobalHistory;
