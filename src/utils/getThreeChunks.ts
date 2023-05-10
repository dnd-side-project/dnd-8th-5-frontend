export const getThreeChunks = (dateList: string[]) => {
  let extra = 0;

  if (dateList.length % 3 == 1) {
    extra = 2;
  } else if (dateList.length % 3 == 2) {
    extra = 1;
  }

  let dates: string[] = [...dateList];

  for (let i = 0; i < extra; i++) {
    dates = [...dates, `blank${i}`];
  }

  return dates;
};
