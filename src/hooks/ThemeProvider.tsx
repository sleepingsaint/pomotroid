import ThemesDB from "assets/themes.json";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeType } from "types";

interface ThemeContextType {
  theme: ThemeType;
  updateTheme: (idx: number) => void;
  db: Array<ThemeType>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: ThemesDB[0],
  updateTheme: () => {},
  db: [],
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemesDB[0]);
  
  useEffect(() => {
    const themeIdx = localStorage.getItem("pomotroid_theme_id");
    if (themeIdx !== null && theme !== undefined) {
      setTheme(ThemesDB[parseInt(themeIdx)]);
    }
  }, []);

  const updateTheme = (idx: number) => {
    localStorage.setItem("pomotroid_theme_id", idx.toString());
    setTheme(ThemesDB[idx]);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, db: ThemesDB }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, updateTheme, db } = useContext(ThemeContext);
  return { theme, updateTheme, db };
};
