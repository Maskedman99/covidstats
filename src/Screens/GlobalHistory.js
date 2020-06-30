import React, {useContext, useState, useEffect, memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';

import {ThemeContext} from '../Context/themes';
import {CountryContext} from '../Context/countries';

import {ThemedText, DatePicker} from '../Components/Common';
import Spinner from '../Components/Spinner';
import Plot from '../Components/Plot';

import apiList from '../Assets/apiList.json';

const GlobalHistory = () => {
  const {theme} = useContext(ThemeContext);
  const {selectedCountry} = useContext(CountryContext);

  const yesterday = Date.parse(dayjs().add(-1, 'day'));

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(1579631400000);
  const [endDate, setEndDate] = useState(yesterday);

  const fetchData = async () => {
    const response = await axios.get(
      `${
        selectedCountry === null
          ? apiList.historical.replace(':query', 'all')
          : apiList.historical.replace(':query', selectedCountry.ISO2)
      }`
    );
    setData(selectedCountry === null ? response.data : response.data.timeline);
  };

  useEffect(() => {
    const getAxios = async () => {
      await fetchData();
      setIsLoading(false);
    };

    getAxios();
  }, []);

  let offset = dayjs(startDate).diff(1579631400000, 'day');
  let range = dayjs(endDate).diff(startDate, 'day') + 1 + offset;

  return isLoading ? (
    <Spinner />
  ) : (
    <ScrollView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText style={styles.header}>Global</ThemedText>
      <View style={styles.datesContainer}>
        <DatePicker
          date={startDate}
          setDate={setStartDate}
          minDate={1579631400000}
          maxDate={endDate}
        />
        <DatePicker date={endDate} setDate={setEndDate} minDate={startDate} maxDate={yesterday} />
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
