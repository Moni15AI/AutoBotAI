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
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600',
  accentColor: 'text-cyan-400',
  textSecondary: 'text-gray-400',
  buttonStyles: 'group px-8 py-3 bg-gradient-to-r from-cyan-500/90 via-blue-500/90 to-purple-600/90 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-600 rounded-xl text-white font-medium transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] relative overflow-hidden backdrop-blur-sm hover:scale-[1.02] border border-white/10',
  accentBg: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600'
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