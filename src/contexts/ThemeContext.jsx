import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
    background: "#ffffff",
    text: "#000000",
};

const darkTheme = {
    background: "#121212",
    text: "#ffffff",
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

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
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            <StyledThemeProvider theme={themeStyles}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = ()=> useContext(ThemeContext)