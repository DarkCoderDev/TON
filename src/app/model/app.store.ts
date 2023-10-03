import { create } from 'zustand';
import { Theme } from 'shared/consts/theme';
import type { ThemeType } from 'shared/types/theme';
import type { ApplicationStore } from './types';

export const useAppStore = create<ApplicationStore>((set) => ({
  theme: Theme.DARK,
  setTheme: (theme: ThemeType) => set({ theme }),
}));
