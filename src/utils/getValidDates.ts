import room from '../assets/data/room.json';
interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getValidDates = (dates: string[]) => {
  let validDates: Array<ValidDate[]> = [];

  validDates = [
    ...validDates,
    dates.map((date) =>
      room.dates.includes(date)
        ? { date: date, isValidDate: true }
        : { date: date, isValidDate: false }
    ),
  ];

  return validDates[0];
};
