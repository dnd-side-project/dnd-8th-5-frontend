import { useRecoilState } from 'recoil';
import { roomState } from '../atoms/roomAtoms';

interface ValidDate {
  date: string;
  isValidDate: boolean;
}

export const getValidDates = (dates: string[]) => {
  const [room, setRoom] = useRecoilState(roomState);

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
