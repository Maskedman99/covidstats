import React from 'react';
import {View, Dimensions} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';

import {ThemedText} from './Common';
import chartConfig from '../Logic/chartConfig';

import {historicalToHeatMapData} from '../Logic/fixHeatMapData';
import {ScrollView} from 'react-native-gesture-handler';

const HistoryHeatmap = ({data}) => {
  const cases = historicalToHeatMapData(data.cases);

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
    </View>
  );
};

export default HistoryHeatmap;
