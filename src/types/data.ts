export interface IMeasurement {
  label: string;
  value: string;
  id: string;
}

export interface IData {
  measurementMonth: IMeasurement;
  measurementDate: IMeasurement;
  height: IMeasurement;
  weight: IMeasurement;
  bodyFatPercentage: IMeasurement;
  fetWeight: IMeasurement;
  leanBodyMass: IMeasurement;
  bodyMassIndex: IMeasurement;
  fitnessScore: IMeasurement;
  wellnessScore: IMeasurement;
  id: string;
}
