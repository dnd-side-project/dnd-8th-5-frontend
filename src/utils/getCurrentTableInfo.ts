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
  const remainder = availableDateTimes.length % 4;
  const timeArray = getTimeArray(timeRange);

  const blankDateTimes = timeArray.map((time: string) => ({
    time: time,
    count: -1,
  }));

  let dates: DateTypes[] = [...availableDateTimes];

  for (let i = 0; i < remainder; i++) {
    dates = [
      ...dates,
      { availableDate: `blank${i}`, availableTimeInfos: blankDateTimes },
    ];
  }

  return dates;
};
