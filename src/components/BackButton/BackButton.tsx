import React, {memo, useMemo} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import dynamicStyles from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import theme from '../../theme/theme';

interface IBackButton {
  title: string;
  onPress: () => void;
  backButtonStyles?: ViewStyle;
  color?: string;
  icon?: boolean;
}

export const BackButton = memo(
  ({title, color, onPress, icon, backButtonStyles}: IBackButton) => {
    const styles = useMemo(() => dynamicStyles(), []);
    const colorStyle = (color && {color}) || styles.textColor;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, backButtonStyles]}>
          {icon && (
            <Entypo
              name="chevron-left"
              size={18}
              color={color || theme.colors.white}
            />
          )}
          <Text style={[styles.text, colorStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);
