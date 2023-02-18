export const getRange = (start: number, end: number) => {
  const arr = [];
  const length = end - start;

  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }

  return arr;
};
