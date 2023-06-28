import { AvailableDateTimeTypes } from '../types/current';
import { getTimeArray } from './getTimeArray';

export const getCurrentTableInfo = (
  availableDateTimes: AvailableDateTimeTypes[],
  timeRange: number[]
) => {
  let dates: AvailableDateTimeTypes[] = [...availableDateTimes];

  if (availableDateTimes.length < 4) {
    const remainder = 4 - (availableDateTimes.length % 4);
    const timeArray = getTimeArray(timeRange);

    const blankDateTimes = timeArray.map((time: string) => ({
      time: time,
      count: -1,
    }));

    for (let i = 0; i < remainder; i++) {
      dates = [
        ...dates,
        { availableDate: `blank${i}`, availableTimeInfos: blankDateTimes },
      ];
    }
  }

  return dates;
};
