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
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[20],
      paddingVertical: theme.spacing[16],
      backgroundColor: theme.colors.white,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.grey,
    },
    iconWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconStyle: {
      marginRight: 5,
    },
    withoutBottomBorder: {
      borderBottomWidth: 0,
    },
    text: {
      fontSize: theme.fontSize.lg,
      color: theme.colors.black,
    },
    infoText: {
      fontSize: theme.fontSize.lg,
      color: theme.colors.darkGrey,
    },
    textBold: {
      fontWeight: theme.fontWeight.bold,
    },
  });
};

export default dynamicStyles;
