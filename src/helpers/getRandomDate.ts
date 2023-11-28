import moment from 'moment';

export const getRandomDate = (
  start: Date,
  end: Date,
): {fullDate: string; MonthName: string} => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  const fullDate = moment(date).format('MM-DD-YYYY');
  const MonthName = moment(date).format('MMMM');

  return {fullDate, MonthName};
};
