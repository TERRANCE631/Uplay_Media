import { createContext, useContext, useState } from "react"

const ContextWrapper = createContext(null);
export function GlobalState({ children }) {
    const [value, setValue] = useState()
    const values = { value, setValue };
    return (
        <ContextWrapper.Provider value={values}>
            {children}
        </ContextWrapper.Provider>
    )
};

export const GlobalContext = () => {
    const context = useContext(ContextWrapper);
    return context;
}