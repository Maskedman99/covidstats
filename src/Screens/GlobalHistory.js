import React, {useContext, useState, useEffect, memo} from 'react';
import {ScrollView, StyleSheet, RefreshControl, View} from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';

import {ThemeContext} from '../Context/themes';

import {ThemedText, DatePicker} from '../Components/Common';
import Spinner from '../Components/Spinner';
import Plot from '../Components/Plot';

import apiList from '../Assets/apiList.json';

const GlobalHistory = () => {
  const {theme} = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(1579631400000);
  const [endDate, setEndDate] = useState(Date.now());

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

  let range = dayjs(endDate).diff(startDate, 'day') + 1;
  let offset = dayjs(startDate).diff(1579631400000, 'day');

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
      <ThemedText style={styles.header}>Global</ThemedText>
      <View style={styles.datesContainer}>
        <DatePicker
          date={startDate}
          setDate={setStartDate}
          minDate={1579631400000}
          maxDate={endDate}
        />
        <DatePicker date={endDate} setDate={setEndDate} minDate={startDate} maxDate={Date.now()} />
      </View>
      <Plot
        data={data.cases}
        title={'Cases'}
        chartColor={theme.chartOrange}
        from={offset}
        to={range}
      />
      <Plot
        data={data.recovered}
        title={'Recovered'}
        chartColor={theme.chartGreen}
        from={offset}
        to={range}
      />
      <Plot
        data={data.deaths}
        title={'Deaths'}
        chartColor={theme.chartRed}
        from={offset}
        to={range}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 8
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4
  }
});

export default memo(GlobalHistory);
