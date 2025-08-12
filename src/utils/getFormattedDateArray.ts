import dayjs from 'dayjs';

export const getFormattedDateArray = (dates: string[]) => {
  const newDates = dates.map((date) =>
    dayjs(date).locale('ko').format('YYYY-MM-DD dddd').toString()
  );

  return newDates;
};
