import React from 'react';

const themes = {
  light: {
    card: '#eeeeee',
    foreground: '#000000',
    background: '#F7F7F7',
    divider: 'hsla(0, 0%, 0%, 0.12)',
    statusBar: 'dark-content'
  },
  blue: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#212D3B',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content'
  },
  grey: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#222222',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content'
  },
  dark: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#000000',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content'
  }
};

export const ThemeContext = React.createContext(themes.light);
