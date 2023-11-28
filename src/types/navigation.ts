import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IData} from './data';

export type RootStackParamList = {
  FitnessScore: undefined;
  MeasurementDetails: IData;
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FitnessScore',
  'MeasurementDetails'
>;
