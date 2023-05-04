export const getTimeArray = (arr: number[]) => {
  return arr
    .map((t) => (t < 10 ? [`0${t}:00`, `0${t}:30`] : [`${t}:00`, `${t}:30`]))
    .reduce((acc, cur) => acc.concat(cur), []);
};
