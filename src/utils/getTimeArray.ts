export const getTimeArray = (arr: number[]) => {
  return arr
    .map((t) => [`${t}:00`, `${t}:30`])
    .reduce((acc, cur) => acc.concat(cur), []);
};
