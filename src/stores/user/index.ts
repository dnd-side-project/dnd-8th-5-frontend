import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  profileImage: string;
  thumbnailImage: string;
}

interface UserInfo {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserInfo>((set) => {
  return {
    user: null,
    setUser: (user) => set({ user }),
  };
});
