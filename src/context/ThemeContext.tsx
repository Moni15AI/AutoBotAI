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
  buttonStyles: 'px-8 py-3 bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-600 rounded-full text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] relative overflow-hidden backdrop-blur-sm hover:scale-[1.02]',
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