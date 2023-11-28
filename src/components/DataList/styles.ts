import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      borderRadius: 6,
      width: '100%',
      marginVertical: 10,
      overflow: 'hidden',
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      shadowColor: theme.colors.black,
      shadowRadius: 2,
      shadowOpacity: 0.3,
      shadowOffset: {width: 2, height: 2},
      elevation: 3,
    },
  });
};

export default dynamicStyles;
