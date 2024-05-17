import { createContext, useState } from "react"

// 데이터를 Context 에 담고있는 역할
export const DarkModeContext = createContext();

// context 를 만들때 항상 Provider을 생성해야함 (우산 역할)
export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}> {children} </DarkModeContext.Provider>
}