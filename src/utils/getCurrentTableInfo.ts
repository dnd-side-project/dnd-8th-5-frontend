import { getTimeArray } from './getTimeArray';

interface DateTypes {
  availableDate: string;
  availableTimeInfos: {
    time: string;
    count: number;
  }[];
}

export const getCurrentTableInfo = (
  availableDateTimes: DateTypes[],
  timeRange: number[]
) => {
  let dates: DateTypes[] = [...availableDateTimes];

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
