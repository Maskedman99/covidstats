import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {ContributionGraph, LineChart} from 'react-native-chart-kit';

import {ThemedText} from './Common';
import chartConfig from '../Logic/chartConfig';

import {historicalToHeatMapData} from '../Logic/fixHeatMapData';
import {ScrollView} from 'react-native-gesture-handler';

const HistoryHeatmap = ({data}) => {
  const cases = historicalToHeatMapData(data.cases).actual;

  let labels = [];
  let counts = [];

  cases.map(obj => {
    labels.push(`${obj.date}`);
    counts.push(obj.count);
  });

  const linedata = {
    labels: labels,
    datasets: [{data: counts}]
  };

  let hide = [...Array(labels.length).keys()];
  hide.splice(Math.floor(labels.length / 4), 1);
  hide.splice(Math.floor(labels.length / 2), 1);
  hide.splice(Math.floor((3 * labels.length) / 4), 1);
  hide.splice(0, 1);
  hide.splice(labels.length - 5, 1);

  return (
    <View>
      <ThemedText>Heatmap</ThemedText>
      <ScrollView horizontal>
        <ContributionGraph
          values={cases}
          endDate={new Date()}
          showOutOfRangeDays
          numDays={175}
          width={1000}
          height={220}
          chartConfig={chartConfig}
        />
      </ScrollView>
      <LineChart
        data={linedata}
        width={Dimensions.get('window').width}
        height={250}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withVerticalLabels={true}
        formatYLabel={y => y.slice(0, -3)}
        formatXLabel={x => x}
        hidePointsAtIndex={hide}
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
  }
});

export default HistoryHeatmap;
