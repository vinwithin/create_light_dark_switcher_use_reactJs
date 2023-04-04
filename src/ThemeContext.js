import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    
    return (
        <ThemeContext.Provider value={{ theme, 
        toogleTheme:() => setTheme(theme === 'light' ? 'dark' : 'light') }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


