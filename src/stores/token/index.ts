import { create } from 'zustand';

interface Token {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
}

export const useTokenStore = create<Token>((set) => {
  return {
    accessToken: null,
    setAccessToken: (accessToken) => set({ accessToken }),
  };
});
