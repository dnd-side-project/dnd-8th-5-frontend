interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getValidDates = (dateRange: string[], dates: string[]) => {
  let validDates: Array<ValidDate[]> = [];

  validDates = [
    ...validDates,
    dateRange.map((date) =>
      dates.includes(date)
        ? { date: date, isValidDate: true }
        : { date: date, isValidDate: false }
    ),
  ];

  return validDates[0];
};
