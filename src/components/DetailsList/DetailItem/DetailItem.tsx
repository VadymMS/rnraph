import React, {useMemo} from 'react';
import dynamicStyles from './styles';
import {Text, View} from 'react-native';

interface IDataItem {
  value: string;
  label: string;
  index: number;
}

export const DetailItem = ({value, label, index}: IDataItem) => {
  const styles = useMemo(() => dynamicStyles(), []);
  return (
    <View style={[styles.container, index === 0 && styles.withoutTopBorder]}>
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
      <View>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
};
