import { getTimeArray } from './getTimeArray';

export const getCurrentTableInfo = (
  availableDateTimes: any,
  timeRange: number[]
) => {
  const remainder = availableDateTimes.length % 4;
  const timeInfo = getTimeArray(timeRange);

  const availableTimeInfos = timeInfo.map((time: string) => ({
    time: time,
    count: -1,
  }));

  let dates: any = [...availableDateTimes];

  for (let i = 0; i < remainder; i++) {
    dates = [
      ...dates,
      { availableDate: `blank${i}`, availableTimeInfos: availableTimeInfos },
    ];
  }

  return dates;
};
