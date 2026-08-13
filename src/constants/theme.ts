/**
 * Baby pink portfolio palette — soft blush, white cards, rose accents.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#7A3358',
    textSecondary: '#A86B8A',
    textInverse: '#FFFFFF',
    background: '#FFF5FA',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#FFB7CE',
    backgroundAccent: '#FFE8F2',
    border: '#FFD1E3',
    link: '#C9477A',
  },
  dark: {
    text: '#FFF0F6',
    textSecondary: '#F0C4D8',
    textInverse: '#4A1F3A',
    background: '#2A1524',
    backgroundElement: '#3F2236',
    backgroundSelected: '#FF8FB8',
    backgroundAccent: '#5A2F4A',
    border: '#6B3A58',
    link: '#FFB3D0',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const Shadows = Platform.select({
  web: {
    card: {
      boxShadow: '0 8px 32px rgba(255, 140, 190, 0.18)',
    },
    nav: {
      boxShadow: '0 4px 24px rgba(255, 140, 190, 0.22)',
    },
    soft: {
      boxShadow: '0 2px 12px rgba(255, 183, 206, 0.25)',
    },
  },
  default: {
    card: {
      shadowColor: '#FF8CBE',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.18,
      shadowRadius: 14,
      elevation: 5,
    },
    nav: {
      shadowColor: '#FF8CBE',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 4,
    },
    soft: {
      shadowColor: '#FFB7CE',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 2,
    },
  },
})!;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
