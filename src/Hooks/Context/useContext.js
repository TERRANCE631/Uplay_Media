import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const ContextWrapper = createContext(null);
export function GlobalState({ children }) {
    const token = JSON.parse(sessionStorage.getItem("userToken"));
    const userID = JSON.parse(sessionStorage.getItem("userID"));

    const [profileDetails, setProfileDetails] = useState()
    const [value, setValue] = useState("");
    const [subs, setSubs] = useState([]);

    function getUser() {
        axios.get(`http://localhost:9000/uplay/GetUseId/${userID}`, {
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        })
            .then(res => {
                const data = res.data
                setProfileDetails(data.profile_Image)
            })
    };

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, [token, userID]);

    const GetSubscribers = () => {
        axios.get("http://localhost:9000/uplay/getSubs")
            .then(res => {
                const data = res.data;
                setSubs(data);
            })
    };

    const scrollIntoView = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    };

    const values = {
        value,
        setValue,
        profileDetails,
        getUser,
        GetSubscribers,
        subs,
        setSubs,
        scrollIntoView,
    };
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