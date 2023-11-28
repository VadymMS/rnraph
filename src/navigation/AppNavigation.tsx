import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {FitnessScoreScreen, MeasurementDetailsScreen} from '../screens';
import {ScreenTitlesEnums} from '../types/enums/ScreenTitlesEnums';
import theme from '../theme/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FitnessScore"
        screenOptions={{
          headerStyle: {backgroundColor: theme.colors.darkGrey},
          headerTitleStyle: {fontSize: 18},
          headerTintColor: theme.colors.white,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="FitnessScore"
          component={FitnessScoreScreen}
          options={{title: ScreenTitlesEnums.FitnessScoreScreen}}
        />
        <Stack.Screen
          name="MeasurementDetails"
          component={MeasurementDetailsScreen}
          options={{
            title: ScreenTitlesEnums.MeasurementDetailsScreen,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
