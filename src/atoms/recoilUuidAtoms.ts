import { atom, selector } from 'recoil';

export const recoilUuidAtoms = atom({
  key: 'recoilUuidAtoms',
  default: '',
});

export const recoilUuidInfoState = selector({
  key: 'recoilUuidInfoState', // 고유한 키 값
  get: ({ get }) => {
    const roomUuid = get(recoilUuidAtoms);
    return roomUuid;
  },
});
