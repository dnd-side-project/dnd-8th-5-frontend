export const getChunks = (validDates: any) => {
  let dateChunks: any = [];

  for (let i = 0; i < validDates.length; i += 3) {
    dateChunks = [...dateChunks, validDates.slice(i, i + 3)];
  }

  return dateChunks;
};
