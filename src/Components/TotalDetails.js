import React, {useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import {ThemeContext} from '../Context/themes';

import {TitleDataCard} from './Common';
import {formatNumber} from '../Logic/misc';

const TotalDetails = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const pieData = [
    {
      name: 'Active',
      value: data.active,
      color: theme.chartOrange,
      legendFontColor: theme.foreground,
      legendFontSize: 15
    },
    {
      name: 'Recovered',
      value: data.recovered,
      color: theme.chartGreen,
      legendFontColor: theme.foreground,
      legendFontSize: 15
    },
    {
      name: 'Deaths',
      value: data.deaths,
      color: theme.chartRed,
      legendFontColor: theme.foreground,
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 0,
    color: () => 'rgb(0, 0, 0)'
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

export default TotalDetails;
