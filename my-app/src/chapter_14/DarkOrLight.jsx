import { useState, useCallback } from "react";
import ThemContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props){
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme === "light"){
            setTheme("dark");
        } else if(theme === "dark"){
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemContext.Provider>
    );
}
export default DarkOrLight;