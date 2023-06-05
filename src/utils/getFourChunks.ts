export const getFourChunks = (dateList: string[]) => {
  let extra = 0;

  if (dateList.length % 4 == 1) {
    extra = 3;
  } else if (dateList.length % 4 == 2) {
    extra = 2;
  } else if (dateList.length % 4 == 3) {
    extra = 1;
  }

  let dates: string[] = [...dateList];

  for (let i = 0; i < extra; i++) {
    dates = [...dates, `blank${i}`];
  }

  return dates;
};
