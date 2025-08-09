import { AvailableDateTimeTypes } from '../types/current';
import { getTimeArray } from './getTimeArray';

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

  // 최소 column 개수: 4
  if (dates.length < 4) {
    const remainder = 4 - (dates.length % 4);
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
