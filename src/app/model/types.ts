import type { ThemeType } from 'shared/types/theme';

export interface ApplicationStore {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
