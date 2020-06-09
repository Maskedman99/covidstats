import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import {TitleDataCard} from './Common';
import {formatNumber} from '../Logic/misc';

const Global = ({data}) => {
  const pieData = [
    {
      name: 'Active',
      value: data.active,
      color: 'orange',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Recovered',
      value: data.recovered,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Deaths',
      value: data.deaths,
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
        <TitleDataCard title={'Confirmed'} data={formatNumber(data.cases)} />
        <TitleDataCard title={'Recovered'} data={formatNumber(data.recovered)} />
      </View>
      <View style={styles.row}>
        <TitleDataCard title={'Deaths'} data={formatNumber(data.deaths)} />
        <TitleDataCard title={'Active'} data={formatNumber(data.active)} />
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
