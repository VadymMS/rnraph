import 'react-native-get-random-values';
import {getRandomDate} from '../helpers/getRandomDate';
import {getRandomInt} from '../helpers/getRandomInt';
import {v4 as uuidv4} from 'uuid';

export const getData = (quantity: number) => {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    const {fullDate, MonthName} = getRandomDate(
      new Date(2020, 0, 1),
      new Date(),
    );
    const obj = {
      measurementMonth: {
        label: 'Measurement Month',
        value: MonthName,
        id: uuidv4().slice(0, 8),
      },
      measurementDate: {
        label: 'Measurement Date',
        value: fullDate,
        id: uuidv4().slice(0, 8),
      },
      height: {
        label: 'Height',
        value: `${Math.floor(+getRandomInt(40, 200))}.00`,
        id: uuidv4().slice(0, 8),
      },
      weight: {
        label: 'Wight',
        value: `${Math.floor(+getRandomInt(0, 500))}.00`,
        id: uuidv4().slice(0, 8),
      },
      bodyFatPercentage: {
        label: 'Body Fat Percentage',
        value: getRandomInt(0, 100),
        id: uuidv4().slice(0, 8),
      },
      fetWeight: {
        label: 'Fet Weight',
        value: getRandomInt(0, 100),
        id: uuidv4().slice(0, 8),
      },
      leanBodyMass: {
        label: 'Lean Body Mass',
        value: getRandomInt(40, 200),
        id: uuidv4().slice(0, 8),
      },
      bodyMassIndex: {
        label: 'Body Mass Index',
        value: getRandomInt(0, 100),
        id: uuidv4().slice(0, 8),
      },
      fitnessScore: {
        label: 'Fitness Score',
        value: `${Math.floor(+getRandomInt(50, 100))}.00`,
        id: uuidv4().slice(0, 8),
      },
      wellnessScore: {
        label: 'Wellness Score',
        value: `${Math.floor(+getRandomInt(50, 100))}.00`,
        id: uuidv4().slice(0, 8),
      },
      id: uuidv4().slice(0, 8),
    };
    arr.push(obj);
  }
  return arr;
};
