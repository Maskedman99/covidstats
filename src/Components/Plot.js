import React, {memo} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import {ThemedText} from './Common';

import {toPlotDataFormat, labelIndicesToHide} from '../Logic/toPlotData';

const Plot = ({data, title, chartColor, from, to}) => {
  const parsedData = toPlotDataFormat(data);

  let dailyLabels = [];
  let dailyCounts = [];
  let cumilativeLabels = [];
  let cumilativeCounts = [];

  parsedData.daily.map(obj => {
    dailyLabels.push(`${obj.date}`);
    dailyCounts.push(obj.count);
  });

  parsedData.cumilative.map(obj => {
    cumilativeLabels.push(`${obj.date}`);
    cumilativeCounts.push(obj.count);
  });

  const dailyPlotData = {
    labels: dailyLabels.slice(from, to),
    datasets: [{data: dailyCounts.slice(from, to)}]
  };

  const cumilativePlotData = {
    labels: cumilativeLabels.slice(from, to),
    datasets: [{data: cumilativeCounts.slice(from, to)}]
  };

  const hideXIndices = labelIndicesToHide(dailyLabels.length);
  const plotWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: 'black',
    backgroundGradientToOpacity: 0,
    color: () => chartColor,
    strokeWidth: 1.5
  };

  return (
    <View>
      <ThemedText style={styles.todayHeader}>{`Daily ${title}`}</ThemedText>
      <LineChart
        data={dailyPlotData}
        width={plotWidth}
        height={250}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withVerticalLabels={true}
        formatYLabel={y => y.slice(0, -3)}
        formatXLabel={x => x.slice(5, 10)}
        hidePointsAtIndex={hideXIndices}
        yLabelsOffset={4}
        xLabelsOffset={2}
        style={styles.lineChart}
        chartConfig={chartConfig}
      />
      <ThemedText style={styles.todayHeader}>{`Cumilative ${title}`}</ThemedText>
      <LineChart
        data={cumilativePlotData}
        width={plotWidth}
        height={250}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withVerticalLabels={true}
        formatYLabel={y => y.slice(0, -3)}
        formatXLabel={x => x.slice(5, 10)}
        hidePointsAtIndex={hideXIndices}
        yLabelsOffset={4}
        xLabelsOffset={2}
        style={styles.lineChart}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineChart: {
    marginLeft: -10
  },
  todayHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default memo(Plot);
