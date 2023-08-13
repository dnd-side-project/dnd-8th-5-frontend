export const getTableDateFormat = (date: string) => {
  return `${date.slice(5, 7)}.${date.slice(8, 10)}(${date.slice(11, 12)})`;
};
