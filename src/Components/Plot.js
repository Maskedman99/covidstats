import React, {memo} from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import dayjs from 'dayjs';
const customParseFormat = require('dayjs/plugin/customParseFormat');

import {ThemedText} from './Common';
import {toPlotDataFormat, labelIndicesToHide} from '../Logic/toPlotData';

const Plot = ({data, title, chartColor, from, to}) => {
  dayjs.extend(customParseFormat);
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

  const hideXIndices = labelIndicesToHide(to - from);
  const plotWidth = useWindowDimensions().width;

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
        fromZero
        withVerticalLabels
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        formatYLabel={y => y.slice(0, -3)}
        formatXLabel={x => dayjs(x, 'M/D/YY').format('MMM DD')}
        hidePointsAtIndex={hideXIndices}
        verticalLabelRotation={270}
        yLabelsOffset={4}
        xLabelsOffset={20}
        style={styles.lineChart}
        chartConfig={chartConfig}
      />
      <ThemedText style={styles.todayHeader}>{`Cumilative ${title}`}</ThemedText>
      <LineChart
        data={cumilativePlotData}
        width={plotWidth}
        height={250}
        withVerticalLabels
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        formatYLabel={y => y.slice(0, -3)}
        formatXLabel={x => dayjs(x, 'M/D/YY').format('MMM DD')}
        hidePointsAtIndex={hideXIndices}
        verticalLabelRotation={270}
        yLabelsOffset={4}
        xLabelsOffset={20}
        style={styles.lineChart}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineChart: {
    marginLeft: -4
  },
  todayHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8
  }
});

export default memo(Plot);
