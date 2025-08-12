import { AvailableDateTimeTypes } from '../types/current';
import { getTimeArray } from './getTimeArray';

const MIN_COLUMN_COUNT = 4;

export const getCurrentTableInfo = (
  availableDateTimes: AvailableDateTimeTypes[],
  dates: string[],
  timeRange: number[]
) => {
  let datesInfo: AvailableDateTimeTypes[] = dates.map((date) => {
    const availableTimeInfos = availableDateTimes.find(
      (d) => d.availableDate === date.slice(0, 10)
    );

    return availableTimeInfos
      ? availableTimeInfos
      : {
          availableDate: date.slice(0, 10),
          availableTimeInfos: [],
        };
  });

  if (dates.length < MIN_COLUMN_COUNT) {
    const remainder = MIN_COLUMN_COUNT - (dates.length % MIN_COLUMN_COUNT);
    const timeArray = getTimeArray(timeRange);

    const blankDateTimes = timeArray.map((time: string) => ({
      time: time,
      count: -1,
    }));

    for (let i = 0; i < remainder; i++) {
      datesInfo = [
        ...datesInfo,
        { availableDate: `blank${i}`, availableTimeInfos: blankDateTimes },
      ];
    }
  }

  return datesInfo;
};
