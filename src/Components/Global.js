import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import GlobalCard from './GlobalCard';
import {formatNumber} from '../Logic/misc';

const Global = ({data}) => {
  const active = data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths;

  const pieData = [
    {
      name: 'Active',
      value: active,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Recovered',
      value: data.TotalRecovered,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Deaths',
      value: data.TotalDeaths,
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
        <GlobalCard title={'Confirmed'} data={formatNumber(data.TotalConfirmed)} />
        <GlobalCard title={'Recovered'} data={formatNumber(data.TotalRecovered)} />
      </View>
      <View style={styles.row}>
        <GlobalCard title={'Deaths'} data={formatNumber(data.TotalDeaths)} />
        <GlobalCard title={'Active'} data={formatNumber(active)} />
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
