import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      primary: '#0168b7',
      white: '#ffffff',
      background: isDarkMode ? '#1a1a1a' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#333333',
      card: isDarkMode ? '#2d2d2d' : '#f8f9fa',
      border: isDarkMode ? '#404040' : '#e9ecef'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 