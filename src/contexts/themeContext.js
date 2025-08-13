import { useContext, createContext } from "react";

const themeCreateContext = createContext({
    theme: "light",
    toggleTheme: () => {}
});

const useTheme = () => {
    return useContext(themeCreateContext);
}

const ThemeProvider = themeCreateContext.Provider;

export {useTheme, ThemeProvider};