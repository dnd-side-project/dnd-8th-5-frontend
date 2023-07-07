export const getRange = (start: number, end: number, step = 1) => {
  const arr = [];
  const length = end - start - 1;

  if (start < end) {
    arr[0] = start;

    for (let i = 1; i <= length; i++) {
      arr[i] = arr[i - 1] + step;
    }
  }

  return arr;
};
