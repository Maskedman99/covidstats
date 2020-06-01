import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import GlobalCard from './GlobalCard';
import {formatNumber} from '../Logic/misc';

const Global = ({data}) => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    let confirmed = 0;
    let recovered = 0;
    let deaths = 0;
    data.map(item => (confirmed = item.latest_data.confirmed + confirmed));
    data.map(item => (recovered = item.latest_data.recovered + recovered));
    data.map(item => (deaths = item.latest_data.deaths + deaths));
    let active = confirmed - recovered - deaths;

    setGlobalData({
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      active: active
    });
  }, [data]);

  const pieData = [
    {
      name: 'Active',
      value: globalData.active,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Recovered',
      value: globalData.recovered,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Deaths',
      value: globalData.deaths,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <>
      <PieChart
        data={pieData}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={chartConfig}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
      />
      <View style={styles.row}>
        <GlobalCard title={'Confirmed'} data={formatNumber(globalData.confirmed)} />
        <GlobalCard title={'Recovered'} data={formatNumber(globalData.recovered)} />
      </View>
      <View style={styles.row}>
        <GlobalCard title={'Deaths'} data={formatNumber(globalData.deaths)} />
        <GlobalCard title={'Active'} data={formatNumber(globalData.active)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default Global;
