import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

const dynamicStyles = () => {
  return StyleSheet.create({
    safeAreaViewStyle: {
      flex: 1,
      backgroundColor: theme.colors.grey,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: theme.colors.grey,
      margin: 10,
    },
  });
};

export default dynamicStyles;
