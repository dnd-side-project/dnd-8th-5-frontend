import room from '../assets/data/room.json';

export const getValidDates = (dates: string[]) => {
  let validDates: any = [];

  validDates = [
    ...validDates,
    dates.map((date) =>
      room.dates.indexOf(date) === -1
        ? { date: date, isValidDate: false }
        : { date: date, isValidDate: true }
    ),
  ];

  return validDates[0];
};
