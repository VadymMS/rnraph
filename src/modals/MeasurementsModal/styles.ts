import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';

const dynamicStyles = (width: number, isExtraSpace: boolean) => {
  return StyleSheet.create({
    topBar: {
      flex: 0,
      backgroundColor: theme.colors.darkGrey,
    },
    SafeAreaView: {
      flex: 1,
      backgroundColor: theme.colors.grey,
    },
    modalView: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.darkGrey,
      alignItems: 'flex-end',
    },
    BackButtonStyle: {
      maxWidth: '15%',
      justifyContent: 'center',
      marginRight: 30,
      marginTop: isExtraSpace ? 5 : 18,
      marginBottom: isExtraSpace ? 13 : 15,
    },
    webView: {
      flex: 1,
      width,
    },
  });
};

export default dynamicStyles;
