export const getChunks = (dates: string[]) => {
  let dateChunks: string[][] = [];

  for (let i = 0; i < dates.length; i += 3) {
    dateChunks = [...dateChunks, dates.slice(i, i + 3)];
  }

  return dateChunks;
};
