import React, {memo, useEffect, useMemo, useState} from 'react';
import {StatusBar, View, SafeAreaView, ScrollView} from 'react-native';
import dynamicStyles from './styles';
import theme from '../../theme/theme';
import {IData} from '../../types/data';
import {getData} from '../../Services/data';
import {LineGraph, DataList} from '../../components';

export const FitnessScoreScreen = memo(() => {
  const [data, setData] = useState<Array<IData>>([]);

  useEffect(() => {
    const newData = getData(4);
    setData(newData);
  }, []);

  const lineGraphLabels = useMemo(
    () => data.map(item => item.measurementDate.value),
    [data],
  );
  const lineGraphData = useMemo(
    () => data.map(item => +item.fitnessScore.value),
    [data],
  );
  const styles = useMemo(() => dynamicStyles(), []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar
        backgroundColor={theme.colors.darkGrey}
        barStyle="light-content"
      />
      <ScrollView>
        <View style={styles.container}>
          <LineGraph labels={lineGraphLabels} data={lineGraphData} />
          <DataList data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});
