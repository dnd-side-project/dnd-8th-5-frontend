import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getAddTimeTableInfo = (dates: string[]) => {
  let extra = 0;

  if (dates.length % 3 == 1) {
    extra = 2;
  } else if (dates.length % 3 == 2) {
    extra = 1;
  }

  let newDates: string[] = dates.map((date) =>
    dayjs(date).locale('ko').format('YYYY-MM-DD dddd').toString()
  );

  for (let i = 0; i < extra; i++) {
    newDates = [...newDates, `blank${i}`];
  }

  const validDates: ValidDate[] = newDates.map((date: string) =>
    date.slice(0, 5) === 'blank'
      ? { date: date, isValidDate: false }
      : { date: date, isValidDate: true }
  );

  let dateChunks: Array<ValidDate[]> = [];

  for (let i = 0; i < validDates.length; i += 3) {
    dateChunks = [...dateChunks, validDates.slice(i, i + 3)];
  }

  return dateChunks;
};
