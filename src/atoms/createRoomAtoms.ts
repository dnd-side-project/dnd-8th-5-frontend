import { atom, selector } from 'recoil';
import { PostRoomTypes } from '../types/roomInfo';
import { initialCreateRoomData } from '../assets/data/initialCreateRoomData';

export const createRoomAtoms = atom<PostRoomTypes>({
  key: 'recoilRoomAtoms',
  default: initialCreateRoomData,
});

export const createRoomInfoState = selector({
  key: 'recoilRoomInfoState', // 고유한 키 값
  get: ({ get }) => {
    const roomInfo = get(createRoomAtoms);
    return roomInfo;
  },
});
