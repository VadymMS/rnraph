import React, {memo, useMemo} from 'react';
import {View} from 'react-native';
import dynamicStyles from './styles';
import {IMeasurement} from '../../types/data';
import {DetailItem} from '../../components';

interface IDetailList {
  info: IMeasurement[];
}

export const DetailsList = memo(({info}: IDetailList) => {
  const styles = useMemo(() => dynamicStyles(), []);
  return (
    <View style={styles.container}>
      {info.map((item, index) => (
        <DetailItem
          key={item.id}
          value={item.value}
          label={item.label}
          index={index}
        />
      ))}
    </View>
  );
});
