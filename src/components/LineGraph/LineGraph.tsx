import React, {memo, useMemo} from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import theme from '../../theme/theme';
import dynamicStyles from './styles';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

interface ILineGraph {
  labels: string[];
  data: number[];
}

export const LineGraph = memo(({labels, data}: ILineGraph) => {
  const {width, height} = Dimensions.get('window');
  const isExtraSpace = hasDynamicIsland() || hasNotch();
  const lineGraphHeight = height / (isExtraSpace ? 2.8 : 2.3);
  const styles = useMemo(
    () => dynamicStyles(lineGraphHeight),
    [lineGraphHeight],
  );
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        width={width}
        height={lineGraphHeight}
        withShadow={false}
        withVerticalLines={true}
        withHorizontalLines={true}
        withInnerLines={true}
        withOuterLines={false}
        yLabelsOffset={7}
        yAxisInterval={10}
        segments={3}
        chartConfig={{
          backgroundGradientFrom: theme.colors.white,
          backgroundGradientTo: theme.colors.white,
          decimalPlaces: 0,
          color: () => theme.colors.darkGrey,
          labelColor: () => theme.colors.darkGrey,
          useShadowColorFromDataset: false,
          strokeWidth: 2,
          propsForBackgroundLines: {
            strokeDasharray: '',
            stroke: theme.colors.grey,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: theme.colors.darkGrey,
          },
        }}
        style={styles.lineChartStyle}
      />
    </View>
  );
});
