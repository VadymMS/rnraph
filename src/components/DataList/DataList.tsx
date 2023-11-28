import React, {memo, useMemo} from 'react';
import {View} from 'react-native';
import dynamicStyles from './styles';
import {IData} from '../../types/data';
import {DataItem} from '../../components';

interface IDataList {
  data: IData[];
}

export const DataList = memo(({data}: IDataList) => {
  const styles = useMemo(() => dynamicStyles(), []);
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <DataItem key={item.id} data={item} index={index} />
      ))}
    </View>
  );
});
