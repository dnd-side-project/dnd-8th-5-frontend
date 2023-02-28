interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getChunks = (validDates: ValidDate[]) => {
  let dateChunks: Array<ValidDate[]> = [];

  for (let i = 0; i < validDates.length; i += 3) {
    dateChunks = [...dateChunks, validDates.slice(i, i + 3)];
  }

  return dateChunks;
};
