import { atom, selector } from 'recoil';

export const recoilRoomState = atom({
  key: 'recoilRoomState',
  default: {},
});

export const recoilRoomInfoState = selector({
  key: 'recoilRoomInfoState', // 고유한 키 값
  get: ({ get }) => {
    const roomInfo = get(recoilRoomState);
    return roomInfo;
  },
});
