import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

export const lightTheme = {
    background: "#e3e4e6",          // Fondo general
    surface: "#f5f2f2",           // Tarjetas, inputs, etc
    surfaceHover: "#ccc6c6",
    text: "#1e1e1f",                // Texto principal (gris muy oscuro)
    subtext: "#4B5563",             // Texto secundario
    primary: "#f58302",             // Azul (botones principales)
    secondary: "#d4d5d6",           // Verde menta (acentos)
    accent: "#F59E0B",              // Amarillo/naranja (alertas/info extra)
    border: "#c2c3c4",              // Líneas, bordes
    muted: "#F3F4F6",
    nutrition: {
      calories: "#4fc94d",
      protein: "#9e590b",
      carbs: "#fa830c",
      fat: "#941e75",
    }
};

export const darkTheme = {
    background: "#161617",          // Fondo general oscuro
    surface: "#202021",             // Tarjetas, inputs, modales
    surfaceHover: "#19191a",
    text: "#d4d5d6",                // Texto principal
    subtext: "#3e3f40",            // Texto secundario gris claro
    primary: "#dde33b",           // Azul claro (botones)
    secondary: "#d4d5d6",           // Verde menta
    accent: "#dde33b",              // Amarillo (acentos)
    border: "#374151",              // Borde sutil
    muted: "#373738",
    nutrition: {
        calories: "#d4d2ba",
        protein: "#f58302",
        carbs: "#b4e319",
        fat: "#f7ce16",
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) setTheme(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme);
    };

    const themeStyles = theme === 'light' ? lightTheme : darkTheme;

    const isDark = theme === 'dark'

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark, lightTheme, darkTheme }}>
            <StyledThemeProvider theme={themeStyles}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)