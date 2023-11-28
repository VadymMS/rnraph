import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {SafeAreaView, StatusBar, View, ScrollView} from 'react-native';
import dynamicStyles from './styles';
import theme from '../../theme/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenNavigationProp} from '../../types/navigation';
import {BackButton, DetailsList, MeasurementInfo} from '../../components';
import {MeasurementInfoEnums} from '../../types/enums/MeasurementInfoEnums';
import {MeasurementsModal} from '../../modals';
import {useNavigation} from '@react-navigation/native';

type MeasurementDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'MeasurementDetails'
>;

export const MeasurementDetailsScreen = memo(
  ({route}: MeasurementDetailsProps) => {
    const [isModal, setModal] = useState(false);

    const {
      measurementMonth,
      measurementDate,
      height,
      weight,
      bodyFatPercentage,
      fetWeight,
      leanBodyMass,
      bodyMassIndex,
      fitnessScore,
      wellnessScore,
    } = route.params;
    const navigation = useNavigation<ScreenNavigationProp>();
    const MemoizedBackButton = useCallback(
      () => <BackButton title="Back" onPress={navigation.goBack} icon={true} />,
      [navigation.goBack],
    );

    useEffect(() => {
      navigation.setOptions({
        headerLeft: MemoizedBackButton,
      });
    }, [MemoizedBackButton, navigation]);

    const info = [
      measurementMonth,
      measurementDate,
      height,
      weight,
      bodyFatPercentage,
      fetWeight,
      leanBodyMass,
      bodyMassIndex,
      fitnessScore,
      wellnessScore,
    ];

    const toggleModalHandler = () => setModal(!isModal);
    const styles = useMemo(() => dynamicStyles(), []);

    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar
          backgroundColor={theme.colors.darkGrey}
          barStyle="light-content"
        />
        <ScrollView>
          <View style={styles.container}>
            <DetailsList info={info} />
            <MeasurementInfo
              title={MeasurementInfoEnums.title}
              pressTitle={MeasurementInfoEnums.pressTitle}
              onPress={toggleModalHandler}
            />
          </View>
        </ScrollView>
        <MeasurementsModal
          isVisible={isModal}
          toggleModal={toggleModalHandler}
        />
      </SafeAreaView>
    );
  },
);
