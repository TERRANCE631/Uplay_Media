import { createContext, useContext, useState } from "react"

const ContextWrapper = createContext(null);
export function GlobalState({ children }) {
    const [downnload, setDownload] = useState(0);
    const [likes, setLikes] = useState(0);

    const [value, setValue] = useState("");

    const Downlaods = (downlaods) => {
        setDownload(downlaods + 1)
    };

    const Likes = (likes) => {
        setLikes(likes + 1)
    }

    const values = { value, setValue, likes, setLikes, Downlaods, downnload, Likes, setDownload };
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