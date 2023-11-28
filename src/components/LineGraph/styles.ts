import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

const dynamicStyles = (height: number) => {
  return StyleSheet.create({
    container: {
      // position: 'relative',
      borderRadius: 6,
      width: '100%',
      height: height,
      overflow: 'hidden',
      padding: 15,
      paddingBottom: 0,
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      shadowColor: theme.colors.black,
      shadowRadius: 2,
      shadowOpacity: 0.3,
      shadowOffset: {width: 2, height: 2},
      elevation: 3,
    },
    lineChartStyle: {
      // position: 'absolute',
      // right: 0,
      // top: 13,
      // paddingLeft: 15,
      paddingRight: 30,
    },
  });
};

export default dynamicStyles;
