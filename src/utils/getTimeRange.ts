export const getTimeRange = (start: number, end: number) => {
  let arr: number[] = [];

  if (start < end || end === 0) {
    const length: number = end === 0 ? 24 - start - 1 : end - start - 1;
    arr[0] = start;

    for (let i = 1; i <= length; i++) {
      arr[i] = arr[i - 1] + 1;
    }
  } else {
    const endTime = end === 0 ? 24 : end;
    arr[0] = 0;

    for (let i = 1; i < endTime; i++) {
      arr[i] = arr[i - 1] + 1;
    }

    for (let j = start; j < 24; j++) {
      arr = [...arr, j];
    }
  }

  return arr;
};
