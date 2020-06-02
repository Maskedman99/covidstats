import React from 'react';

const themes = {
  light: {
    card: '#F7F7F7',
    foreground: '#000000',
    background: '#eeeeee',
    divider: 'hsla(0, 0%, 0%, 0.12)'
  },
  blue: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#212D3B',
    divider: 'hsla(0, 0%, 100%, 0.12)'
  },
  grey: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#222222',
    divider: 'hsla(0, 0%, 100%, 0.12)'
  },
  dark: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#000000',
    divider: 'hsla(0, 0%, 100%, 0.12)'
  }
};

export const ThemeContext = React.createContext(themes.grey);
