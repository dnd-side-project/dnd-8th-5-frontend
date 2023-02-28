import dayjs from 'dayjs';

export const getDateRange = (startDate: string, endDate: string) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  let diff = end.diff(start, 'd') + 1;

  if (diff % 3 == 1) {
    diff += 2;
  } else if (diff % 3 == 2) {
    diff += 1;
  }

  let dates: string[] = [];

  for (let i = 0; i < diff; i++) {
    dates = [...dates, start.add(i, 'day').format('YYYY-MM-DD').toString()];
  }

  return dates;
};
