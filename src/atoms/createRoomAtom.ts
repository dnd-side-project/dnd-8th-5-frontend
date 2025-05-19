import { atom, selector } from 'recoil';
import { RoomInfoTypes } from '@/types/roomInfo';
import { initialCreateRoomData } from '@/assets/data/initialCreateRoomData';

export const createRoomAtom = atom<RoomInfoTypes>({
  key: 'recoilRoomAtoms',
  default: initialCreateRoomData,
});

export const createRoomInfoState = selector({
  key: 'recoilRoomInfoState', // 고유한 키 값
  get: ({ get }) => {
    const roomInfo = get(createRoomAtom);
    return roomInfo;
  },
});
