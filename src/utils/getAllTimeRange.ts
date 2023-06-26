import { getDateRange } from './getDateRange';
import { getTimeArray } from './getTimeArray';
import { getValidDates } from './getValidDates';

export const getAllTimeRange = (dates: string[], times: number[]) => {
  const validDates = getValidDates(
    getDateRange(dates[0], dates[dates.length - 1])
  );

  const timeDetail = getTimeArray(times);

  const allTimeRange = validDates
    .map(({ date, isValidDate }) =>
      timeDetail.map((time) => isValidDate && `${date} ${time}`)
    )
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter(Boolean);

  return allTimeRange;
};
