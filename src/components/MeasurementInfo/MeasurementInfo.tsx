import React, {memo, useMemo} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import dynamicStyles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import theme from '../../theme/theme';

interface IMeasurementInfo {
  title: string;
  pressTitle: string;
  onPress: () => void;
}

export const MeasurementInfo = memo(
  ({title, pressTitle, onPress}: IMeasurementInfo) => {
    const styles = useMemo(() => dynamicStyles(), []);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textBold]}>{title}</Text>
        </View>
        <TouchableHighlight onPress={onPress}>
          <View style={[styles.wrapper, styles.withoutBottomBorder]}>
            <View style={styles.iconWrapper}>
              <MaterialIcons
                name="info-outline"
                size={24}
                color={theme.colors.darkGrey}
                style={styles.iconStyle}
              />
              <Text style={styles.infoText}>{pressTitle}</Text>
            </View>
            <Entypo
              name="chevron-right"
              size={24}
              color={theme.colors.darkGrey}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  },
);
