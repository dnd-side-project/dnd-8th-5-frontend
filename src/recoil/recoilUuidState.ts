import { atom, selector } from 'recoil';

export const recoilUuidState = atom({
  key: 'recoilUuidState',
  default: '',
});

// export const recoilRoomInfoState = selector({
//   key: 'recoilRoomInfoState', // 고유한 키 값
//   get: ({ get }) => {
//     const roomInfo = get(recoilRoomState);
//     return roomInfo;
//   },
// });
