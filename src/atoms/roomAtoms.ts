import { atom } from 'recoil';
import { RoomTypes } from '../types/roomInfo';

export const roomState = atom<RoomTypes>({
  key: 'roomState',
  default: {
    title: '',
    deadLine: '',
    headCount: 0,
    participants: [''],
    dates: [''],
    startTime: '',
    endTime: '',
  },
});
