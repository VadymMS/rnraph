import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: 17,
    },
    textColor: {
      color: theme.colors.white,
    },
  });
};
export default dynamicStyles;
