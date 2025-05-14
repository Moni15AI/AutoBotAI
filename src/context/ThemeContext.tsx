import React, { createContext, useContext, ReactNode } from 'react';

type ThemeContextType = {
  theme: {
    gradientText: string;
    accentColor: string;
    textSecondary: string;
    buttonStyles: string;
    accentBg: string;
  };
};

const defaultTheme = {
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500',
  accentColor: 'text-blue-400',
  textSecondary: 'text-gray-400',
  buttonStyles: 'px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30',
  accentBg: 'bg-gradient-to-r from-blue-500 to-purple-600'
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);