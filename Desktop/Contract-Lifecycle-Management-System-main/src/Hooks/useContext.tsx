import { createContext, useContext, useState } from "react"

const ContextWrapper = createContext({});
const GlobalState = ({ children }: any) => {
    const [showSiderBar, setShowSideBar] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard');

    const values = { showSiderBar, setShowSideBar, currentPage, setCurrentPage }
    return (
        <ContextWrapper.Provider value={values}>
            {children}
        </ContextWrapper.Provider>
    )
};
export default GlobalState
export const GlobalContext = () => {
    const context = useContext(ContextWrapper);
    return context;
}
