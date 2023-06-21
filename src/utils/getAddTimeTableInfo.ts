import { getRange } from './getRange';

interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getAddTimeTableInfo = (
  dates: string[],
  startTime: string,
  endTime: string
) => {
  const times = getRange(
    parseInt(startTime.slice(0, 2)),
    parseInt(endTime.slice(0, 2))
  );

  let extra = 0;

  if (dates.length % 3 == 1) {
    extra = 2;
  } else if (dates.length % 3 == 2) {
    extra = 1;
  }

  let newDates: string[] = [...dates];

  for (let i = 0; i < extra; i++) {
    newDates = [...newDates, `blank${i}`];
  }

  const validDates: any = [
    newDates.map((date) =>
      date.slice(0, 5) === 'blank'
        ? { date: date, isValidDate: false }
        : { date: date, isValidDate: true }
    ),
  ];

  let dateChunks: Array<ValidDate[]> = [];

  for (let i = 0; i < validDates[0].length; i += 3) {
    dateChunks = [...dateChunks, validDates[0].slice(i, i + 3)];
  }

  return dateChunks;
};
