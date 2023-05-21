import { atom, selector } from 'recoil';

export const recoilRoomAtoms = atom({
  key: 'recoilRoomAtoms',
  default: {},
});

export const recoilRoomInfoState = selector({
  key: 'recoilRoomInfoState', // 고유한 키 값
  get: ({ get }) => {
    const roomInfo = get(recoilRoomAtoms);
    return roomInfo;
  },
});
