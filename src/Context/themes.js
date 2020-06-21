import React from 'react';

export const themes = {
  light: {
    card: '#eeeeee',
    foreground: '#000000',
    background: '#F7F7F7',
    divider: 'hsla(0, 0%, 0%, 0.12)',
    statusBar: 'dark-content',
    chartGreen: 'rgba(0, 127, 0, 1)',
    chartRed: 'rgba(255, 0, 0, 1)',
    chartOrange: 'rgba(255, 152, 0, 1)'
  },
  blue: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#212D3B',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content',
    chartGreen: 'rgba(0, 255, 0, 1)',
    chartRed: 'rgba(255, 0, 0, 1)',
    chartOrange: 'rgba(255, 152, 0, 1)'
  },
  grey: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#222222',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content',
    chartGreen: 'rgba(0, 255, 0, 1)',
    chartRed: 'rgba(255, 0, 0, 1)',
    chartOrange: 'rgba(255, 152, 0, 1)'
  },
  dark: {
    card: '#253446',
    foreground: '#ffffff',
    background: '#000000',
    divider: 'hsla(0, 0%, 100%, 0.28)',
    statusBar: 'light-content',
    chartGreen: 'rgba(0, 255, 0, 1)',
    chartRed: 'rgba(255, 0, 0, 1)',
    chartOrange: 'rgba(255, 152, 0, 1)'
  }
};

export const ThemeContext = React.createContext({theme: themes.blue, changeTheme: () => {}});
