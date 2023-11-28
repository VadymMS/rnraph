import React, {useMemo} from 'react';
import {Modal, View, SafeAreaView, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import {BackButton} from '../../components';
import dynamicStyles from './styles';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

interface IMeasurementsModal {
  isVisible: boolean;
  toggleModal: () => void;
}

export const MeasurementsModal = ({
  isVisible,
  toggleModal,
}: IMeasurementsModal) => {
  const {width} = Dimensions.get('window');
  const isExtraSpace = hasDynamicIsland() || hasNotch();
  const styles = useMemo(
    () => dynamicStyles(width, isExtraSpace),
    [width, isExtraSpace],
  );
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={toggleModal}>
      <SafeAreaView style={styles.topBar} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.modalView}>
          <BackButton
            title="Close"
            onPress={toggleModal}
            backButtonStyles={styles.BackButtonStyle}
          />
          <WebView
            source={{uri: 'https://volya.us/'}}
            style={styles.webView}
            startInLoadingState={true}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
