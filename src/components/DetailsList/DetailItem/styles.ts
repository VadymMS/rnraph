import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[20],
      paddingVertical: theme.spacing[16],
      backgroundColor: theme.colors.white,
      borderTopWidth: 2,
      borderTopColor: theme.colors.grey,
    },
    withoutTopBorder: {
      borderTopWidth: 0,
    },
    text: {
      fontSize: theme.fontSize.lg,
      color: theme.colors.black,
    },
  });
};

export default dynamicStyles;
