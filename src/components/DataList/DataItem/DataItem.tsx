import React, {useMemo} from 'react';
import dynamicStyles from './styles';
import {Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../types/navigation';
import {IData} from '../../../types/data';

interface IDataItem {
  data: IData;
  index: number;
}

export const DataItem = ({data, index}: IDataItem) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const styles = useMemo(() => dynamicStyles(), []);
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('MeasurementDetails', data)}>
      <View style={[styles.container, index === 0 && styles.withoutTopBorder]}>
        <View>
          <Text style={[styles.text, styles.textBold]}>
            {data.measurementMonth.value}
          </Text>
          <Text style={[styles.text, styles.mt]}>
            {data.measurementDate.value}
          </Text>
        </View>
        <View>
          <Text style={styles.text}>{data.fitnessScore.value}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
