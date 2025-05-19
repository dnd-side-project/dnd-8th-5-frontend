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

export const getTimeRangeInTimePicker = (startTime: string) => {
  const pad = (num: number) => String(num).padStart(2, '0');
  const startHour = parseInt(startTime.split(':')[0], 10);
  const result = [];

  for (let i = 0; i < 24; i++) {
    const hour = (startHour + i) % 24;
    const timeString = `${pad(hour)}:00`;
    result.push(timeString);
  }

  return result;
};
